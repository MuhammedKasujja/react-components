import { mergeClassNames } from "src/utils/utils";
import classes from "./ShowItems.module.scss"
import { useEffect, useState } from "react";

type ShowItemsProps = {
  onSelect(value: number): void;
};

const ShowItems: React.FC<ShowItemsProps> = ({ onSelect }) => {
  const options = [10, 25, 50, 75, 100];
  const [selectId, setSelectId] = useState<string>();
  useEffect(()=>{
   setSelectId(new Date().getTime().toString());
  },[])
  
  return (
    <div className={mergeClassNames(classes.show_items)}>
      <label htmlFor={selectId}>Show</label>
      <select
        id={selectId}
        // className="custom-select custom-select-sm form-control form-control-sm"
        className={mergeClassNames(classes.dropdown)}
        onChange={(e) => onSelect(parseInt(e.target.value))}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt}>{opt}</option>
        ))}
      </select>
      <p>entries</p>
    </div>
  );
};

export default ShowItems;
