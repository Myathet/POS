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

export default function Customer() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
    },
    {
      name: "Phone",
      selector: (row: any) => row.phone,
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
      name: "John Doe",
      email: "john@gmail.com",
      phone: "0912345677",
    },
    {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "0912345677",
    },
  ];
  return (
    <div>
      <PageBreadcrumb pageTitle="Customers" />
      <div className="flex mb-6 justify-end">
        <button
          onClick={openModal}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
        >
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
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Customer Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update customer details to keep.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[350px] overflow-y-auto px-2 pb-3">
              <div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>First Name</Label>
                    <Input type="text" defaultValue="Mya thet" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Last Name</Label>
                    <Input type="text" defaultValue="Thet Hninn" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email Address</Label>
                    <Input type="text" defaultValue="myathet@.com" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Phone</Label>
                    <Input type="text" defaultValue="+09 363 398 46" />
                  </div>

                  <div className="col-span-2">
                    <Label>Description</Label>
                    <TextArea rows={6}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
