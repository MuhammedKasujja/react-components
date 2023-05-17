const SearchField: React.FC = () => {
  return (
    <div className="min-h-[35px] max-h-[39vh] relative mb-3">
      <div className="bg-slate-300 min-h-[30px] h-[230px] absolute rounded-sm py-0 w-96 flex flex-col  items-center z-20">
        <div className="my-4 w-4/5 flex items-center border-b-2 ring-2 ring-[#FF782E]">
          <input
            type="text"
            className="h-full border-none outline-none w-full"
            placeholder="search"
          />
        </div>
        <div className="p-1 w-11/12 mt-[1px] mb-4 font-medium overflow-y-auto scrollbar-thumb-[#8a99b5] scrollbar-thin">
          <p>Holla</p>
          <p>Me</p>
          <p>Data</p>
          <p>Holla</p>
          <p>Me</p>
          <p>Data</p>
          <p>Holla</p>
          <p>Me</p>
          <p>Data</p>
          <p>Holla</p>
          <p>Me</p>
          <p>Data</p>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
