import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ShowCard(props) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.show.show.name}
        </Typography>

        <div
          className="ratings"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div>{props.show.show.language}</div>
          <div>Rating: {props.show.score.toFixed(2) * 100}% </div>
        </div>
        <div className="genres" style={{ marginTop: "10px" }}>
          {props.show.show.genres.toString()}
        </div>
      </CardContent>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <Link
          style={{ textDecoration: "none" }}
          className="link2"
          to={`/details/${props.show.show.id}`}
        >
          <Button variant="outlined">
            <span>SHOW MORE</span>
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
