import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const renderedList = data.map((el) => {
    const initial = el.name
      .split(" ")
      .map((el) => {
        return el.charAt(0).toUpperCase();
      })
      .join("");
    return (
      <div
        key={el.id}
        style={{ display: "flex", alignItems: "center", margin: "10px" }}
      >
        <div
          style={{
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            borderRadius: "100%",
            backgroundColor: "red"
          }}
        >
          {initial}
        </div>
        - {el.name}
      </div>
    );
  });
  return <div>{renderedList}</div>;
}
