"use client";

import { ZodError, z } from "zod";
//@ts-ignore
import store from "store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { login } from "../services/authentication/api";

const loginFormSchema = z.object({
  username: z.string().min(1, {
    message: "username is required",
  }),
  password: z.string().min(1, {
    message: "password is required",
  }),
});

interface FormData {
  username: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const token = store.get("accessToken");
  const [credentialsError, setCredentialsError] = useState("");

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState<ZodError | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCredentialsError("");
    try {
      // Validate the form data
      await loginFormSchema.parseAsync(formData);
      setValidationErrors(null);

      //   If validation is successful, you can proceed with the login process
      const msg = await login({ ...formData });

      if (msg.data.status == "success") {
        store.set("accessToken", msg.data.token);
        toast.success("Successfully login!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "light",
          transition: Bounce,
        });
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.log("error", error);
      if (error?.response?.status == 401) {
        setCredentialsError(error?.response?.data?.errors[0]?.message);
      }
      if (error instanceof ZodError) {
        // Handle validation errors
        setValidationErrors(error);
        console.error("Form validation failed:", error.errors);
      }
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden bg-slate-200">
        <div className="w-full p-10 m-auto  rounded-md bg-white shadow-md lg:max-w-lg">
          <h1 className="text-2xl my-4 font-bold text-center text-black">UltimatePOS</h1>
          {credentialsError && (
            <div role="alert" className="alert alert-error my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{credentialsError}</span>
            </div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                value={formData.username}
                onChange={handleInputChange}
                name="username"
                type="text"
                placeholder="Enter your username"
                className="w-full input input-bordered text-black"
              />
              {validationErrors?.errors && validationErrors.errors.length > 0 && (
                <div style={{ color: "red" }} className="label">
                  {validationErrors.errors
                    .filter((error) => error.path[0] === "username")
                    .map((error, index) => (
                      <span key={index}>{error.message}</span>
                    ))}
                </div>
              )}
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered text-black"
              />
              {validationErrors?.errors && validationErrors.errors.length > 0 && (
                <div style={{ color: "red" }} className="label">
                  {validationErrors.errors
                    .filter((error) => error.path[0] === "password")
                    .map((error, index) => (
                      <span key={index}>{error.message}</span>
                    ))}
                </div>
              )}
            </div>
            <div>
              <button type="submit" className="mt-8 btn ml-auto block">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
