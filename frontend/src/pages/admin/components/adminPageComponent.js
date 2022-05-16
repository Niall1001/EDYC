import React, { useState, useEffect } from "react";
import instance from "../../../utils/axios";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AdminPageComponent = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(Date.now());
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    setDate(today.toDateString());
  }, []);

  const handleChangeName = (event) => {
    event.preventDefault();

    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    event.preventDefault();

    setDescription(event.target.value);
  };

  const handleChangeText = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = [];
    const errorFields = [];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    if (name === "") {
      errorFields.push("Name");
    }
    if (date === "") {
      errorFields.push("Date");
    }
    if (description === "") {
      errorFields.push("Description");
    }
    if (text === "") {
      errorFields.push("Text");
    }
    if (errorFields.length > 0) {
      errors.push(
        "The following fields are required before creating a news article: " +
          errorFields
      );
    }

    if (errors.length > 0) {
      alert(errors);
      return;
    }

    formData.append("name", name);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("text", text);

    instance.post(`http://localhost:3001/newsupload`, formData).then(
      (response) => {
        alert("News article added");
      },
      (error) => {
        alert(error);
      }
    );
  };

  return (
    <div>
      <Item>
        <form onSubmit={handleSubmit}>
          <div>
            <div style={{ width: "100%" }}>
              <p>Article Title</p>
              <TextField
                id="filled-basic"
                variant="standard"
                onChange={handleChangeName}
                value={name}
                style={{ width: "70%" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <p>Description</p>
              <TextField
                id="filled-basic"
                variant="standard"
                onChange={handleChangeDescription}
                value={description}
                style={{ width: "70%" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <p>Text</p>
              <TextField
                id="filled-basic"
                variant="standard"
                onChange={handleChangeText}
                value={text}
                multiline
                maxRows={4}
                style={{ width: "70%" }}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexFlow: "column",
                alignItems: "center",
              }}
            >
              <label for="file">Choose file to upload</label>
              <div style={{ display: "flex", width: "15%", maxWidth: "30%" }}>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={saveFile}
                  style={{ color: "rgba(0, 0, 0, 0)" }}
                ></input>
                <div>{fileName}</div>
              </div>
            </div>

            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "30px" }}
            >
              Save News Article
            </Button>
          </div>
        </form>
      </Item>
    </div>
  );
};

export default AdminPageComponent;
