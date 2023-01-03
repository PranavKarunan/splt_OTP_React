import './App.css'
import { useRef, useState } from "react";
const App = () => {
  const inputRef = useRef([]);
  const otpLength = [];
  for (let i = 0; i < 4; i++) {
    otpLength.push("");
  }

  const [otp, setOtp] = useState(otpLength);
  const handleChange = (e, ind) => {
    const value = e.key;
    if (isNaN(value) && value !== "Backspace") {
      return false;
    }
    let newFocus = value === "Backspace" && ind >= 0 ? -1 : +1;
    inputRef.current[newFocus + ind]?.focus();
    setOtp((prev) => prev.map((val, index) => (index === ind ? value : val)));
  };
  let show = otp.join("").length === otp.length ? true : false;
  return (
    <div className="App">
      <div className="input_field">
        {otp.map((otpElem, index) => (
        <input
          type="number"
          key={index}
          value={otpElem}
          ref={(input) => (inputRef.current[index] = input)}
          onKeyUp={(e) => handleChange(e, index)}
        />
      ))}
      </div>
      <div>
        <button disabled={!show}>Subimt</button>
      </div>
    </div>
  );
};

export default App;
