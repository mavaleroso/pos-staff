"use client";

import { ArrowLeftRight, ArrowRightLeft, CircleAlert, CircleDollarSign, File, FileMinus, FileWarning, ShoppingCart } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="container mx-auto p-4 mt-5">
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2  gap-6">
      <div className="card bg-base-100 shadow border-l-4 border-l-secondary">
          <div className="card-body py-4">
            <div className="flex flex-row gap-x-3">
            <ShoppingCart className="h-full" />
            <div>
              <p className="font-semibold">Total Sales</p>
              <p>Lek 0.00</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow border-l-4 border-l-secondary">
          <div className="card-body py-4">
            <div className="flex flex-row gap-x-3">
            <File className="h-full" />
            <div>
              <p className="font-semibold">Net</p>
              <p>Lek 0.00</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow border-l-4 border-l-secondary">
          <div className="card-body py-4">
            <div className="flex flex-row gap-x-3">
            <FileWarning className="h-full" />
            <div>
              <p className="font-semibold">Invoice Due</p>
              <p>Lek 0.00</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow border-l-4 border-l-secondary">
          <div className="card-body py-4">
            <div className="flex flex-row gap-x-3">
            <ArrowRightLeft className="h-full" />
            <div>
              <p className="font-semibold">Total Sell Return</p>
              <p>Lek 0.00</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow border-l-4 border-l-secondary">
          <div className="card-body py-4">
            <div className="flex flex-row gap-x-3">
            <CircleDollarSign className="h-full" />
            <div>
              <p className="font-semibold">Total Purchase</p>
              <p>Lek 0.00</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow border-l-4 border-l-secondary">
          <div className="card-body py-4">
            <div className="flex flex-row gap-x-3">
            <CircleAlert className="h-full" />
            <div>
              <p className="font-semibold">Purchase Due</p>
              <p>Lek 0.00</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow border-l-4 border-l-secondary">
          <div className="card-body py-4">
            <div className="flex flex-row gap-x-3">
            <ArrowLeftRight className="h-full" />
            <div>
              <p className="font-semibold">Total Purchase Return</p>
              <p>Lek 0.00</p>
            </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow border-l-4 border-l-secondary">
          <div className="card-body py-4">
            <div className="flex flex-row gap-x-3">
            <FileMinus className="h-full" />
            <div>
              <p className="font-semibold">Expense</p>
              <p>Lek 0.00</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
