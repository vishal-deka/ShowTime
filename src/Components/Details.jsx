import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "./Form";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopBar from "./Bar";

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

  let styleSummary = {
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "10px"
  };

  let stylePreview = {
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "5px"
  };

  let styleDetail = {};
  if (isDesktop === true) {
    styleDetail = {
      display: "flex",
      justifyContent: "space-around",
      width: "70%",
      alignItems: "center",
      marginLeft: "300px",
      marginBottom: "50px"
    };

    styleSummary.width = "50%";
    styleSummary.marginTop = "100px";
  }
  return (
    <div className="container">
      <TopBar />
      {status === 1 && (
        <div className="details">
          <h1 style={{ textAlign: "center" }}>{data.name}</h1>
          <div className="contents" style={styleDetail}>
            <div className="preview" style={stylePreview}>
              <img alt={data.name} src={data.image.medium} />
            </div>

            <div className="summary" style={styleSummary}>
              {data.summary.replace(/<\/?[^>]+(>|$)/g, "")}
            </div>
          </div>

          <div
            className="form"
            style={{
              textAlign: "center",
              marginTop: "5px",
              marginBottom: "5px"
            }}
          >
            <Form name={data.name} />
          </div>
        </div>
      )}
    </div>
  );
}
