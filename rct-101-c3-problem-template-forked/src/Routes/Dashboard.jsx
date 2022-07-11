import Pagination from "../Components/Pagination";
import { useState } from "react";
import { useEffect } from "react";
import Login from "./Login";
import { Navigate, useSearchParams, Link } from "react-router-dom";
function Dashboard() {
  const [data, setData] = useState([]);
  const [current, changepage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  // const getTodos = async () => {
  //   try {
  //     let data = await fetch(
  //       `https://jsonplaceholder.typicode.com/photos?_page=${current}`
  //     );
  //     data = await data.json();
  //     setData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   setSearchParams({
  //     current
  //   });
  //   getTodos(current);
  // }, [current]);

  useEffect(() => {
    setSearchParams({
      current
    });
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${current}&_limit=10`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(re)
        setData(res);
      });
  }, [current]);
  function handleLog() {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">Qpwl5tke4pnpja7X4</h4>
      <button data-testid="logout-btn" onClick={handleLog}>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <h3 data-testid="login-link">Logout</h3>
        </Link>
      </button>
      <ul data-testid="item-container">
        {data.map((item) => {
          return <li data-testid="item">{item.title}</li>;
        })}
      </ul>
      <div data-testid="pagination-container">{/* <Pagination /> */}</div>
      <div style={{ margin: "20px" }}>
        {" "}
        <button onClick={() => changepage(current + 1)} disabled={current == 5}>
          {current}
        </button>
        <button onClick={() => changepage(current - 1)} disabled={current == 0}>
          {current}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
