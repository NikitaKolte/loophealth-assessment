import React from "react";
import {
  makeStyles,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
} from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // "& .PrivateSwitchBase-root-9": {
    //   padding: "3px",
    // },
    "& .MuiList-root": {
      alignSelf: "start",
      padding: 0,
      position: "relative",
      listStyle: "none",
    },
    "& .MuiFormControlLabel-root": {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      verticalAlign: "middle",
    },
    "& .MuiFormControl-root": {
      border: 0,
      margin: 0,
      /* display: inline-flex; */
      padding: 0,
      position: "relative",
      minWidth: 0,
      flexDirection: "column",
      verticalAlign: "top",
    },
    "& .MuiIconButton-root": {
      padding: "3px",
      flex: "0 0 auto",
      marginLeft: "15px",
      overflow: "visible",
    },
    "& .MuiFormGroup-root": {
      display: "flex",
      flexWrap: "wrap",
    },
  },
}));

export default function CheckList(props) {
  const { listData, heading } = props;
  const classes = useStyles();
  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend">{heading}</FormLabel>
      <FormGroup>
        {listData.map((item, index) => (
          <FormControlLabel
            control={
              <Checkbox
                // checked={gilad}
                // onChange={handleChange}
                name={item.id}
                fontSize="small"
              />
            }
            label={item.value}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
