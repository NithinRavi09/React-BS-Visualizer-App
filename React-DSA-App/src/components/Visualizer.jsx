import React, { useState } from "react";

function Visualizer() {
  const [arrayInput, setArrayInput] = useState("");
  const [target, setTarget] = useState("");
  const [steps, setSteps] = useState([]);

  const handleVisualize = () => {
    const arr = arrayInput.split(",").map((num) => parseInt(num.trim()));
    const tgt = parseInt(target);
    const stepLog = [];

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      stepLog.push({ left, mid, right, current: arr[mid] });

      if (arr[mid] === tgt) break;
      else if (arr[mid] < tgt) left = mid + 1;
      else right = mid - 1;
    }

    setSteps(stepLog);
  };
  return (
    <div className="visualizer">
      <input
        type="text"
        placeholder="Enter sorted array (e.g., 1, 3, 5, 7)"
        value={arrayInput}
        onChange={(e) => setArrayInput(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter target value"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <button onClick={handleVisualize}>Visulaize</button>

      <div className="steps">
        {steps.map((step, idx) => (
          <div key={idx} className="step">
            <p>🔁 Step {idx + 1}</p>
            <p>
              Left: {step.left}, Mid: {step.mid} (value: {step.current}), Right:{" "}
              {step.right}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visualizer;
