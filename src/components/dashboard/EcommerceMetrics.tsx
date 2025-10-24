"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { FaUserGroup } from "react-icons/fa6";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <FaUserGroup className="w-6 h-6 text-gray-900 dark:text-white" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Customers
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <FaArrowUp className="w-3 h-3 mr-1" />
            11.01%
          </Badge>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <FiBox className="w-6 h-6 text-gray-900 dark:text-white" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
             Order
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              1,782
            </h4>
          </div>
          <Badge color="error">
            <FaArrowDown className="w-3 h-3 mr-1" />
            1.01%
          </Badge>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <FiBox className="w-6 h-6 text-gray-900 dark:text-white" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Order From Bot
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              6,782
            </h4>
          </div>
          <Badge color="success">
            <FaArrowUp className="w-3 h-3 mr-1" />
            30.01%
          </Badge>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <MdAttachMoney className="w-6 h-6 text-gray-900 dark:text-white" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Revenue
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              1K
            </h4>
          </div>
          <Badge color="success">
            <FaArrowUp className="w-3 h-3 mr-1" />
            50.01%
          </Badge>
        </div>
      </div>
    </div>
  );
};
