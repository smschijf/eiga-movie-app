const WatchListButton = (props) => {
  window.onclick = (e) => {
    if (e.target === document.getElementById("confirmation-modal")) {
      document.getElementById("confirmation-modal").style.display = "none";
  }
  }
  return (
    <>
      <button
        onClick={(e) => {
          props.handleWatchListClick(props.data);
          document.getElementById("confirmation-modal").style.display = "block";
          e.stopPropagation();
        }}
        className="py-2 px-4 bg-transparent text-white font-semibold border border-white rounded hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        id="open-modal-btn"
      >
        <span>{props.innerText}</span>
      </button>

      <div
        className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        id="confirmation-modal"
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Successful!
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Movie/Serie has been successfully added to your watchlist!
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="close-modal-btn"
                className="py-2 px-10 bg-transparent text-black font-semibold border border-black rounded hover:bg-black hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                onClick={() => {
                  document.getElementById("confirmation-modal").style.display = "none";
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchListButton;
