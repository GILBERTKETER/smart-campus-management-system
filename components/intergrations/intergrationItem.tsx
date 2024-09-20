import React from "react";
import { IntergrationsType as IntergrationItemProps } from "@/types/intergrtions";

const IntergrationItem: React.FC<IntergrationItemProps> = ({ title, icon }) => {
  return (
    <div className="w-full p-6 rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 inline-flex">
      <a href="">{icon}</a>
      <h5 className="text-center text-gray-900 text-base font-semibold leading-relaxed">
        {title}
      </h5>
    </div>
  );
};

export default IntergrationItem;
