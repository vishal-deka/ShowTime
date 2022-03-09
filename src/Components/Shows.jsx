import ShowCard from "./Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Shows() {
  //styling the show list
  const isDesktop = useMediaQuery("(min-width:600px)");
  let style = {
    width: "100%",
    padding: "10px"
  };
  if (isDesktop) {
    style.width = "50%";
    style.marginLeft = "360px";
  }
  //end styling

  //fetching data
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("fetching");
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setData("error");
        console.log(err);
      });
  }, []);

  return (
    <div className="showContainer">
      <div className="showList">
        <h2>Available shows:</h2>
        <br />
        {data.map((show) => (
          <ShowCard show={show} />
        ))}
      </div>
    </div>
  );
}
