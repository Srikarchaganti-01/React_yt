import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if (numbers) str += "0123456789";
    if (symbols) str += "!@#$%^&*()_+";
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    if (str == "") pass = "Please select at least one option";
    setPassword(pass);
  }, [length, numbers, symbols, uppercase, lowercase, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, symbols, uppercase, lowercase, passwordGenerator]);

  const copypass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-8 text-white bg-gray-700">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Password will appear here"
            className="outline-none w-full px-4 py-2 text-gray-700 bg-gray-200"
          />
          <button
            onClick={copypass}
            className="outline-none bg-blue-500 hover:bg-blue-600 text-white py-0.5 px-4"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-gray-300">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            <label className="text-gray-300">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
            <label className="text-gray-300">Symbols</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            <label className="text-gray-300">Uppercase</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            <label className="text-gray-300">Lowercase</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
