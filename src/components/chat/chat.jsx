import {
  Box,
  Paper,
  TextField,
  Typography,
  Modal,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../redux/features/chatSlice/chat";

function Chat() {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const [currentMessage, setCurrentMessage] = useState("");
  const textAi = [
    "Hola bienvenido es un placer",
    "Un placer haber sido de ayuda",
    "No tengo respuesta para esa pregunta",
  ];

  const response = (message) => {
    if (message === "hola") {
      return textAi[0];
    } else if (message === "hasta luego") {
      return textAi[1];
    } else {
      return textAi[2];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMessage(currentMessage));
    setCurrentMessage("");
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px",
    textAlign: "end",
    boxSizing: "border-box",
    padding: "0 8px",
    background: "#f7f7f7",
  }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: "100%", height: "100vh", background: "skyblue" }}
    >
      <Typography variant="h3">Chat Test</Typography>
      <Button onClick={handleOpen}>Ayuda para obtener respuesta</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Texto de ayuda - Que preguntar
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            hola - mensaje de saludo <br />
            hasta luego - mensaje de despedida <br />
            todo lo demas - mensaje de no tengo respuesta
          </Typography>
        </Box>
      </Modal>
      <Box sx={{ width: "60%", height: "60%", overflow: "auto" }}>
        <ul style={{ listStyle: "none" }}>
          {messages.map((message, index, i) => (
            <>
              <Box margin={2} sx={{ background: "#f7f7f7" }}>
                <Item>
                  <li style={{ background: "#f7f7f7" }} key={index}>
                    {message}
                  </li>
                </Item>
              </Box>
              <Box margin={2}>
                <Item sx={{ textAlign: "start" }}>
                  <li style={{ background: "#f7f7f7" }} key={i}>
                    {response(message)}
                  </li>
                </Item>
              </Box>
            </>
          ))}
        </ul>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "70%",
            height: "40px",
          },
          "& .MuiInputBase-input": {
            background: "#f7f7f7",
          },
          width: "60%",
          display: "flex",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-size-small"
          size="small"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button style={{ width: "20%", height: "40px" }} type="submit">
          Send
        </button>
      </Box>
    </Box>
  );
}

export default Chat;
