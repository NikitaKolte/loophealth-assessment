import React from "react";
import { makeStyles, Drawer, List } from "@material-ui/core";
import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import CheckList from "./CheckList";
import RadioList from "./RadioList";
const categories = [
  { id: "tShirts", value: "Tshirts" },
  { id: "tops", value: "Tops" },
  { id: "dresses", value: "Dresses" },
  { id: "casualShoes", value: "Casual Shoes" },
  { id: "shirts", value: "Shirts" },
  { id: "heels", value: "Heels" },
  { id: "trousers", value: "Trousers" },
  { id: "jeans", value: "Jeans" },
];
const brands = [
  { id: "puma", value: "Puma" },
  { id: "macmerise", value: "Macmerise" },
  { id: "roadster", value: "Roadster" },
  { id: "h&m", value: "H&M" },
  { id: "dressBerry", value: "DressBerry" },
];
const drawerWidth = 252;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: "1 1 0%",
    "& .MuiDrawer-paper": {
      top: "64.4px",
    },
    "& .MuiDrawer-paperAnchorLeft": {
      left: "auto",
      right: "auto",
    },
  },
  headerTitle: {
    fontWeight: 700,
    alignSelf: "flex-start",
    marginBottom: "15px",
    marginTop: "10px",
    marginLeft: "8px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    flexGrow: "0 !important",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function AppDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        // anchor="left"
      >
        <div className={classes.headerTitle}>FILTERS</div>
        {/* <div className={classes.toolbar} /> */}
        <Divider />
        <RadioList />

        <Divider />
        <CheckList listData={categories} heading="CATEGORIES" />
        <Divider />
        <CheckList listData={brands} heading="BRANDS" />
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
