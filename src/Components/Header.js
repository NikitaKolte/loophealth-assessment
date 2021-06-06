import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: "#fff",
    top: 0,
    position: "fixed",
    right: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
