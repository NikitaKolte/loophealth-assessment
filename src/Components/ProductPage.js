import React, { useEffect } from "react";
import {
  makeStyles,
  Grid,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Paper,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiGrid-spacing-xs-2": {
      marginLeft: "200px",
      marginTop: "60px",
    },
  },
  paper: {
    height: 293,
    width: 244,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ProductPage() {
  const [spacing, setSpacing] = React.useState(2);
  const [productList, setProductList] = React.useState();
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  useEffect(() => {
    axios.get("https://demo7242716.mockable.io/products").then((res) => {
      setProductList(res);
    });
  }, []);
  console.log(productList);
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
