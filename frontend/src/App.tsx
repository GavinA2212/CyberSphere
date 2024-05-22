import { ChangeEvent } from "react";

export default function App() {
  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 onChange={handlechange} className="text-2xl font-bold underline">
        Hello world!
      </h1>
    </>
  );
}
