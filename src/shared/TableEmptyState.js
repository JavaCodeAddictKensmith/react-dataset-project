import { PAIconTableEmptyState, PAIconUseradd } from "assets/images/svgs";
import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const TableEmptyState = ({ account, dashboard, button, label, path }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(path);
  };
  return (
    <div
      className={`w-full ${account ? "h-full" : "h-[500px]"} bg-white ${
        dashboard ? "rounded-b-[10px]" : "rounded-[10px]"
      } flex justify-center items-center`}
    >
      <div className="flex flex-col items-center">
        <PAIconTableEmptyState />
        {button && (
          <Button
            neutral
            onClick={handleNavigate}
            className="flex w-[157px] h-[44px] mt-[16px] border-[1px] border-gray rounded-[5px] justify-center items-center bg-primaryColor"
          >
            <PAIconUseradd />
            <p className="text-sm font-normal text-white ml-[5px]">{label}</p>
          </Button>
        )}
      </div>
    </div>
  );
};

export default TableEmptyState;
