import React from "react";
import { makeStyles, Radio } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioList() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiIconButton-root": {
        padding: "3px",
        flex: "0 0 auto",
        marginLeft: "15px",
        overflow: "visible",
      },
    },
  }));
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="men" control={<Radio />} label="Men" />
        <FormControlLabel value="women" control={<Radio />} label="Women" />
        <FormControlLabel value="boys" control={<Radio />} label="Boys" />
        <FormControlLabel value="girls" control={<Radio />} label="Girls" />
      </RadioGroup>
    </FormControl>
  );
}
