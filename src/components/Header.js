export default function Header({ handlePrint }) {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-5xl mb-3">
            Invoicer
          </h1>
        </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button
                onClick={handlePrint}
                className="bg-blue-500
                text-white
                font-bold
                py-2
                px-8
                rounded
                shadow
                border-2
                border-blue-500
                hover:bg-transparent
                hover:text-blue-500
                transition-all
                duration-300"
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button
                className="bg-blue-500
              text-white
              font-bold
              py-2
              px-8
              rounded
              shadow
              border-2
              border-blue-500
              hover:bg-transparent
              hover:text-blue-500
              transition-all
              duration-300"
              >
                Download
              </button>
            </li>
            <li>
              <button
                className="bg-blue-500
              text-white
              font-bold
              py-2
              px-8
              rounded
              shadow
              border-2
              border-blue-500
              hover:bg-transparent
              hover:text-blue-500
              transition-all
              duration-300"
              >
                Send
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
