import ImageLink from "../components/ImageLink";
import { useState, useEffect, useMemo } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Counter() {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);

  const text = useMemo(() => {
    return isDisplay ? "Dialog is open" : "Dialog is closed";
  }, [isDisplay]);

  function add5ToCount() {
    setCount((previous) => previous + 5);
  }

  useEffect(() => {
    console.log("useEffect is triggered when isDisplay changes");
  }, [isDisplay]);

  const images = [
    {
      url: "https://vitejs.dev",
      src: viteLogo,
      title: "Vite logo",
    },
    {
      url: "https://react.dev",
      src: reactLogo,
      title: "React logo",
    },
  ];

  return (
    <>
      <div>
        {images.map((image, index) => (
          <ImageLink
            key={index}
            title={image.title}
            src={image.src}
            url={image.url}
          />
        ))}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          [+1] count is {count}
        </button>
        <button onClick={add5ToCount}>[+5] count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => setIsDisplay((previous) => !previous)}>
        Toggle text ({text})
      </button>
      <dialog open={isDisplay}>This is the dialog.</dialog>
    </>
  );
}

export default Counter;
