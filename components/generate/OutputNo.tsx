import { useInput } from "@/store/store";
import { useState } from "react";

const OutputNo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = ["1", "2", "3", "4", "5", " 6", "7", "8"];
  const setOutput = useInput((state) => state.switchOutputNo);
  const handleItemClick = (item: string) => {
    setOutput(item);
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-5 ">
      {items.map((item) => (
        <div
          key={item}
          className={`cursor-pointer  bg-secondary w-[50px] h-10 items-center rounded-sm border-2 border-slate-400   flex justify-center px-2 ${
            selectedItem === item ? "border-[2.5px] border-violet-500" : ""
          }`}
          onClick={() => handleItemClick(item)}
        >
          <h1 className="text-[12px] "> {item}</h1>
        </div>
      ))}
    </div>
  );
};

export default OutputNo;
