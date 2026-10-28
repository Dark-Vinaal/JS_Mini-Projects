import React from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  const handleClick = () => {
    alert("Reset Button Clicked!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </form>
  );
}

export default App;
