const Filter = ({ className }) => {
  return (
    <div
      className={`${className} outline-1 outline-gray-300 mx-5 rounded-2xl p-5 space-y-10`}
    >
      <h1 className="font-bold text-2xl">Filter</h1>
      <div>
        <h2 className="font-bold mb-4">Type</h2>
        <div className="grid grid-cols-2">
          <div className="col-span-1 space-y-3">
            <div>
              <input className="mr-3" type="checkbox" name="check1" id="check1" />
              <label className="text-base" htmlFor="check1">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check2" id="check2" />
              <label className="text-base" htmlFor="check2">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check3" id="check3" />
              <label className="text-base" htmlFor="check3">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check4" id="check4" />
              <label className="text-base" htmlFor="check4">Pan-fried</label>
            </div>
          </div>
          <div className="col-span-1 space-y-3">
            <div>
              <input className="mr-3" type="checkbox" name="check5" id="check5" />
              <label className="text-base" htmlFor="check5">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check6" id="check6" />
              <label className="text-base" htmlFor="check6">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check7" id="check7" />
              <label className="text-base" htmlFor="check7">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check8" id="check8" />
              <label className="text-base" htmlFor="check8">Pan-fried</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold mb-4">Type</h2>
        <div className="grid grid-cols-2">
          <div className="col-span-1 space-y-3">
            <div>
              <input className="mr-3" type="checkbox" name="check1" id="check1" />
              <label className="text-base" htmlFor="check1">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check2" id="check2" />
              <label className="text-base" htmlFor="check2">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check3" id="check3" />
              <label className="text-base" htmlFor="check3">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check4" id="check4" />
              <label className="text-base" htmlFor="check4">Pan-fried</label>
            </div>
          </div>
          <div className="col-span-1 space-y-3">
            <div>
              <input className="mr-3" type="checkbox" name="check5" id="check5" />
              <label className="text-base" htmlFor="check5">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check6" id="check6" />
              <label className="text-base" htmlFor="check6">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check7" id="check7" />
              <label className="text-base" htmlFor="check7">Pan-fried</label>
            </div>
            <div>
              <input className="mr-3" type="checkbox" name="check8" id="check8" />
              <label className="text-base" htmlFor="check8">Pan-fried</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
