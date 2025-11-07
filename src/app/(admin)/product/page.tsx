"use client";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useModal } from "@/components/hooks/useModal";
import { Modal } from "@/components/ui/modal";
import Button from "@/components/ui/button/Button";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TextArea from "@/components/input/TextArea";

export default function Product() {
  const columns = [
    {
      name: "Product Name",
      selector: (row: any) => row.name,
    },
    {
      name: "SKU",
      selector: (row: any) => row.sku,
    },
    {
      name: "Category",
      selector: (row: any) => row.category,
    },
    {
      name: "Price",
      selector: (row: any) => row.price,
    },
    {
      name: "Actions",
      cell: () => (
        <div className="inline-flex">
          <button className="text-gray-800 font-bold font-sm py-1 px-2 rounded-l">
            <FaPencilAlt />
          </button>
          <button className="text-gray-800 font-bold font-sm py-2 px-4 rounded-r">
            <RiDeleteBin5Fill />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      name: "Curry",
      sku: "001233",
      category: "Food",
      price: 10000,
    },
  ];
  return (
    <div>
      <PageBreadcrumb pageTitle="Products" />
      <div className="flex mb-6 justify-end">
        <button className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto">
          <AiOutlinePlusCircle />
          New Customer
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[1102px]">
            <DataTable
              className="border-b border-gray-100 dark:border-white/[0.05]"
              columns={columns}
              data={data}
              pagination
            />
          </div>
        </div>
      </div>
    </div>
  );
}
