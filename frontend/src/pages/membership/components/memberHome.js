import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

const MemberHome = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={12}>
          <Item
            style={{
              height: "96%",
              display: "flex",
              justifyContent: "center",
              flexFlow: "column",
            }}
          >
          <h1 style={{lineHeight: "1.1em", textAlign: "center", fontWeight: "bold", fontSize: "56px", color: "#83314E" }}>Membership</h1>
          <p style={{font: "sans-serif", fontSize: "18px", overflowWrap: "break-word", letterSpacing: "0em", color: "#83314E", margin: "10px"}}>
          East Down Yacht Club is situated on the western shores of Strangford Lough, close to Killyleagh and with unparalleled access to Strangford Lough, the premier location in Northern Ireland for sailing and boating. We sail all types of boats at the Club, including Dinghies, classic wooden boats, Cruisers as well as motor boats. We are also developing our facilities for other watersports such as Kayaking, Skiffs and Swimming, so if you are interested in joining, please contact us as we are more than happy to show you around.</p>
          <p style={{font: "sans-serif", fontSize: "18px", overflowWrap: "break-word", letterSpacing: "0em", color: "#83314E", margin: "10px"}}>
          Membership gives you full access to the Club’s facilities, with boat storage, parking and boat launching all made easy. You are also able to join in as a crew member or take courses to improve your sailing and power boating skills. If you do not have a boat of your own, you can hire Laser Bahias from us.</p>
          <p style={{font: "sans-serif", fontSize: "18px", overflowWrap: "break-word", letterSpacing: "0em", color: "#83314E", margin: "10px"}}>
          The Club has a full and active programme of events, both water based and social which carries on throughout the year. You can race on Wednesday and Saturdays from the Club as well as participating in events organised around the Lough such Regattas or more relaxed social musters such as the new Kayaking Club.</p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default MemberHome;
