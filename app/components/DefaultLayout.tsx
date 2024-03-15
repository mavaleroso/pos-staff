"use client";

import { ReactNode, useEffect } from "react";
import Navbar from "./layout/navbar";
import Sidebar from "./layout/sidebar";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation"; 
//@ts-ignore
import store from "store";
import Footer from "./layout/footer";

type Props = {
  children?: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const token = store.get('accessToken');
  const router = useRouter();

  useEffect(() => {
    if(!token && pathname != '/login') {
      router.push('/login');
    } else if (token && pathname == '/login') {
      router.push('/dashboard');
    }
  }, [])

  return (
    <>
      {pathname == "/login" ? (
        children
      ) : (
        <>
          <Navbar />
          <Sidebar>{children}</Sidebar>
          <Footer />
        </>
      )}
    </>
  );
};

export default DefaultLayout;
