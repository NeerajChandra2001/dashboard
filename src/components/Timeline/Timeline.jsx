import React from "react";
import { FaCheck } from "react-icons/fa6";

const Timeline = ({ page2 }) => {
  return (
    <div className="timeline pl-8 pt-4">
      {/* ----------------------------------- */}
      <div className="flex gap-x-20">
        <div
          className={`${
            page2 ? "bg-[#edeaef] text-blue-700" : "bg-blue-700 text-white"
          } w-12 h-12 justify-center items-center flex  rounded-lg   text text-lg font-bold `}
        >
          {page2 ? <FaCheck /> : "1"}
        </div>
        <div className="">
          <h2 className=" font-semibold text-[#475569]">Details</h2>
          <h3 className="text-[#6c7888] text-sm">Basic Details</h3>
        </div>
      </div>
      <div className="flex flex-col pl-5 mt-[-10px] mb-[6px] text-[#c6c8c9]">
        <div className="dot mb-[-10px]  font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
      </div>
      {/* --------------------------- */}
      <div className="flex gap-x-20">
        <div
          className={`${
            page2 ? "text-white bg-indigo-700" : "bg-[#edeaef]"
          } w-12 h-12 justify-center items-center flex  rounded-lg   text text-lg font-bold `}
        >
          {page2 ? "2" : "2"}
        </div>
        <div className="">
          <h2 className=" font-semibold text-[#475569]">Work Order</h2>
          <h3 className="text-[#6c7888] text-sm">Client Details</h3>
        </div>
      </div>
      <div className="flex flex-col pl-5 mt-[-10px] mb-[6px] text-[#c6c8c9]">
        <div className="dot mb-[-10px]  font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
      </div>
      {/* --------------------------- */}
      <div className="flex gap-x-20">
        <div className=" w-12 h-12 justify-center items-center flex  rounded-lg text-[#475569] text-lg font-bold bg-[#edeaef]">
          3
        </div>
        <div className="">
          <h2 className=" font-semibold text-[#475569]">Department</h2>
          <h3 className="text-[#6c7888] text-sm">How its Managed</h3>
        </div>
      </div>
      <div className="flex flex-col pl-5 mt-[-10px] mb-[6px] text-[#c6c8c9]">
        <div className="dot mb-[-10px]  font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
      </div>
      {/* --------------------------- */}
      <div className="flex gap-x-20">
        <div className=" w-12 h-12 justify-center items-center flex  rounded-lg text-[#475569] text-lg font-bold bg-[#edeaef]">
          4
        </div>
        <div className="">
          <h2 className=" font-semibold text-[#475569]">Tech Stack</h2>
          <h3 className="text-[#6c7888] text-sm">Technology Details</h3>
        </div>
      </div>
      <div className="flex flex-col pl-5 mt-[-10px] mb-[6px] text-[#c6c8c9]">
        <div className="dot mb-[-10px]  font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
      </div>
      {/* --------------------------- */}
      <div className="flex gap-x-20">
        <div className=" w-12 h-12 justify-center items-center flex  rounded-lg text-[#475569] text-lg font-bold bg-[#edeaef]">
          5
        </div>
        <div className="">
          <h2 className=" font-semibold text-[#475569]">Scope</h2>
          <h3 className="text-[#6c7888] text-sm">Project classification</h3>
        </div>
      </div>
      <div className="flex flex-col pl-5 mt-[-10px] mb-[6px] text-[#c6c8c9]">
        <div className="dot mb-[-10px]  font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
        <div className="dot mb-[-10px] font-extrabold">.</div>
      </div>
      {/* --------------------------- */}
      <div className="flex gap-x-20">
        <div className=" w-12 h-12 justify-center items-center flex  rounded-lg text-[#475569] text-lg font-bold bg-[#edeaef]">
          6
        </div>
        <div className="">
          <h2 className=" font-semibold text-[#475569]">Classification</h2>
          <h3 className="text-[#6c7888] text-sm">
            Project & BCP classification
          </h3>
        </div>
      </div>

      {/* --------------------------- */}
    </div>
  );
};

export default Timeline;