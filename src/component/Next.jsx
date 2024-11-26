function Next({ dataIndex, totalItems, onNext, onPrevious }) {
  return (
    <div className="flex justify-center items-center bg-red-100">
      <div>
        <div className="flex justify-between items-center">
          {/* Previous Button */}
          {dataIndex === 0 ? null : (
            <button
              className="bg-emerald-400 p-2 me-10 px-3 rounded-md text-white"
              onClick={onPrevious}
            >
              Previous
            </button>
          )}

          {/* Next Button */}
          {dataIndex >= Math.ceil(totalItems / 6) - 1 ? null : (
            <button
              className="bg-emerald-400 p-2 px-3 ml-5 rounded-md text-white"
              onClick={onNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Next;
