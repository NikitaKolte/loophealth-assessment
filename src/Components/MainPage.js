import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import AppDrawer from "./AppDrawer";
import ProductPage from "./ProductPage";

const useStyles = makeStyles((theme) => ({
  searchBase: {
    margin: "0 auto",
    maxWidth: "1600px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
}));

export default function MainPage() {
  const classes = useStyles();
  return (
    <div position="fixed" className={classes.searchBase}>
      <div>Hey</div>
      <div>Hello</div>
      <AppDrawer />
      <ProductPage />
    </div>
  );
}
