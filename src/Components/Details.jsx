import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "./Form";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopBar from "./Bar";
import "./styles.css";

export default function Details(props) {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(0);

  const { id } = useParams();
  console.log("id:", id);
  useEffect(() => {
    let link = "https://api.tvmaze.com/shows/" + id;
    console.log(link);
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setStatus(1);
      })
      .catch((err) => {
        setData("error");
        console.log(err);
      });
  }, []);

  return (
    <div className="detailsContainer">
      <TopBar />
      {status === 1 && (
        <div className="details">
          <h1>{data.name}</h1>
          <div className="contentsContainer">
            <div className="contents">
              <div className="preview">
                <img alt={data.name} src={data.image.medium} />
              </div>

              <div className="summary">
                {data.summary.replace(/<\/?[^>]+(>|$)/g, "")}
              </div>
            </div>
          </div>

          <div className="form">
            <Form name={data.name} />
          </div>
        </div>
      )}
    </div>
  );
}
