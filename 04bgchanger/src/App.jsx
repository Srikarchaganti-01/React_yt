import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-2 justify-center shadow-lg rounded-lg px-3 py-2 bg-white/80">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            Lavender
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
