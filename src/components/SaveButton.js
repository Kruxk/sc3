import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Save } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    background: "#E0E1E2",
    color: "black",
    fontSize: "0.9em",
    borderRadius: "2em",
    fontFamily: "Lato",
    "&:hover": {
      backgroundColor: "#CACBCD",
    },
  },
}));

export default function SaveButton(props) {
  const classes = useStyles();
  return (
    <Button
      onClick={(e) => props.handler(true)}
      startIcon={<Save />}
      children="Export"
      color="primary"
      variant="contained"
      size="small"
      className={classes.button}
    />
  );
}
