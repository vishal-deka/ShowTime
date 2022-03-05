import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Form(props) {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid blue",
    boxShadow: 24,
    p: 4,
    textAlign: "center"
  };

  if (isDesktop === true) {
    style.width = "20%";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={handleOpen}>Book Tickets</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Book Tickets</h1>
          <Stack
            component="form"
            sx={{
              width: "25ch"
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Show Name"
              id="filled-hidden-label-small"
              defaultValue={props.name}
              size="small"
            />
            <TextField
              label="Number of tickets"
              id="filled-hidden-label-small"
              defaultValue=""
              size="small"
              type="number"
            />

            <TextField
              id="filled-hidden-label-small"
              defaultValue=""
              size="small"
              type="date"
            />
            <Button variant="outlined">Checkout</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
