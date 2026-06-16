import { useState } from "react";
import "tailwindcss";
import { InputBox } from "./components";
import { useCurrencyinfo } from "./hooks/useCurrencyinfo";
function App() {
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const { currencyInfo } = useCurrencyinfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  setConvertedAmount(
    (amount * currencyInfo[toCurrency]) / currencyInfo[fromCurrency],
  );
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                setAmount={setAmount}
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                currencyOptions={currencyOptions}
                onCurrencyChange={(e) => setFromCurrency(e.target.value)}
                onAmountChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapCurrencies}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                setAmount={setConvertedAmount}
                fromCurrency={toCurrency}
                setFromCurrency={setToCurrency}
                currencyOptions={currencyOptions}
                onCurrencyChange={(e) => setToCurrency(e.target.value)}
                onAmountChange={(e) => setConvertedAmount(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert{fromCurrency} to {toCurrency}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
