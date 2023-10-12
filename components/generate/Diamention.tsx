import { useInput } from "@/store/store";
import { useState } from "react";

const Diamention: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const setInput = useInput((state) => state.switchInputDiamention);

  const items = ["256x128", "576x384", "576x1024", "704x512"];

  const handleItemClick = (item: string) => {
    setInput(item);
    setSelectedItem(item);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-5 justify-evenly ">
      {items.map((item) => (
        <div
          key={item}
          className={`cursor-pointer  w-[126px] h-10 items-center rounded-sm border-2 border-slate-400   flex justify-center px-2 ${
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

export default Diamention;
