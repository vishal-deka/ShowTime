import img from "../assets/bg.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width:600px)");
  let headstyle = { fontSize: "40px", textAlign: "center", color: "white" };
  if (isDesktop) {
    headstyle = { fontSize: "70px", textAlign: "center", color: "white" };
  }
  let textStyle = {
    marginTop: "100px",
    textAlign: "center",
    position: "absolute",
    padding: "5px",
    alignItems: "center",
    marginLeft: "10vw"
  };
  if (isDesktop) {
    textStyle.marginLeft = "30vw";
  }

  return (
    <div className="container">
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${img})`
        }}
      >
        <div className="hero-text">
          <h1 style={headstyle}>Its ShowTime!</h1>
          <p style={{ textAlign: "center", color: "white" }}>
            Find below the trending shows
          </p>
        </div>
      </div>
    </div>
  );
}
