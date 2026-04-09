import { Download, Star } from "lucide-react";
import React from "react";

const InstalledAppCard = ({ app }) => {
  return (
    <div className="p-4 bg-base-100 rounded-sm shadow flex justify-between sm:items-center">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="w-20 h-20">
          <img src={app.image} />
        </div>

        <div>
          <h5 className="mb-4 text-[#001931] text-xl font-medium">
            {app.title}
          </h5>

          <div className="flex gap-4 items-center">
            <span className="text-[#00D390] flex gap-1 items-center">
              <Download size={16} /> <span>{app.downloads}</span>
            </span>

            <span className="text-[#FF8811] flex gap-1 items-center">
              <Star size={16} /> <span>{app.ratingAvg}</span>
            </span>

            <span className="text-[#627382]">{app.size} MB</span>
          </div>
        </div>
      </div>

      <div>
        <button className="btn border-none shadow-none px-4 h-10.5 bg-[#00D390] rounded-sm text-base-100 font-semibold">
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
