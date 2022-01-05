import React from "react";

const useState = React.useState;

export default function App() {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="content">
      <button onClick={onButtonClick}>Click me!</button>
      <h1>Count is: {count}</h1>
    </div>
  );
}
