import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  button: {
    backgroundColor: "#252525",
    // Change the color value to the desired color
    color: "white", // Change the text color to contrast with the background color
    "&:hover": {
      backgroundColor: "#5072A7", // Change the color value to the desired hover color
    },
    marginTop: "20px",
  },
});

export const PlusButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={onClick}
      className={classes.button} // Apply the custom CSS class to the button
      variant="contained"
      startIcon={<AddIcon />}
    >
      Add
    </Button>
  );
};
