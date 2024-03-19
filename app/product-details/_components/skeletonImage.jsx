import React from "react";

export default function SkeletonImage() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="h-[450px] w-[560px] bg-slate-200 animate-pulse"></div>
    </div>
  );
}
