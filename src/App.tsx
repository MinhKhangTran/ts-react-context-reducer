import * as React from "react";
import { useGlobalContext } from "./context";

export default function App() {
  const { fetchPackages, data, error, loading } = useGlobalContext();
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchPackages(value);
    // console.log(data, error, loading);
    setValue("");
  };

  // console.log(data, error, loading);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="suche ein package"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Suche</button>
      </form>
      <ul>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {!loading &&
          !error &&
          data.map((item) => {
            return <li key={item}>{item}</li>;
          })}
      </ul>
    </>
  );
}
