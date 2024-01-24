import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInputData] = useState({
    initialNumber: 1000,
    annualInvestment: 10000,
    expectedReturn: 10000,
    duration: 10,
  });

  function handleNumberChange(event) {
    const { name, value } = event.target;
    setUserInputData((prevNumber) => ({
      ...prevNumber,
      [name]: Number(value),
    }));
  }

  return (
    <section className="input-group">
      <div id="user-input">
        <p>
          <label>Initial Number</label>
          <input
            type="number"
            name="initialNumber" // Added name attribute
            value={userInput.initialNumber}
            onChange={handleNumberChange}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment" // Added name attribute
            value={userInput.annualInvestment}
            onChange={handleNumberChange}
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn" // Added name attribute
            value={userInput.expectedReturn}
            onChange={handleNumberChange}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration" // Added name attribute
            value={userInput.duration}
            onChange={handleNumberChange}
            required
          />
        </p>
      </div>
    </section>
  );
}
