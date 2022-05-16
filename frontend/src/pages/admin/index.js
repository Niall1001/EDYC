import { Button } from "@mui/material";
import React, { useState } from "react";
import { AdminPage } from "./components";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [input, setinput] = useState("");
  const [error, seterror] = useState(false);
  const inputStyle = {
    width: 235,
    margin: 5,
  };

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const submit = () => {
    if (input === "password123") {
      seterror(false);
      setIsAuthenticated(true);
    } else {
      seterror(true);
    }
  };

  return (
    <div>
      {!isAuthenticated && (
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
          }}
        >
          <h3>Enter the password to continue to admin page</h3>
          <input
            style={inputStyle}
            type="text"
            value={input}
            onChange={handleChange}
          />
          {error && (
            <div style={{ color: "red" }}>Error- incorrect password</div>
          )}
          <Button onClick={submit}>Submit</Button>
        </div>
      )}
      {isAuthenticated && <AdminPage />}
    </div>
  );
};

export default Admin;
