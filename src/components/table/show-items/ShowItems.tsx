type ShowItemsProps = {
  onSelect(value: number): void;
};

const ShowItems: React.FC<ShowItemsProps> = ({ onSelect }) => {
  const options = [10, 25, 50, 75, 100];
  const selectId = new Date().toString();
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={selectId}>Show</label>
      <select
        id={selectId}
        className="custom-select custom-select-sm form-control form-control-sm"
        onChange={(e) => onSelect(parseInt(e.target.value))}
      >
        {options.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
      <p>entries</p>
    </div>
  );
};

export default ShowItems;
