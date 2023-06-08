import React from "react";
import { Button, styled } from "@mui/material";

const MuIButton = ({ color, children, width, variant }) => {
  return (
    <div>
      <StyledButton variant={variant} color={color} width={width}>
        {children}
      </StyledButton>
    </div>
  );
};

export default MuIButton;

const StyledButton = styled(Button)(({ variant }) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: "#7689a5",
        width: "155px",
        height: "45px",
        boxShadow: " 0px 4px 12px #15151526",
        borderRadius: "4px",
        "&:hover": {
          backgroundColor: "#7393c1",
          color: "#fff",
        },
      };
    case "outlined":
      return {
        width: "393px",
        height: "50px",
        marginTop: "40px",
        border: "1.5px solid #596B86",
        borderRadius: "4px",
        color: "#222426",
        "&:hover": {
          backgroundColor: "#90aed9",
          color: "#fff",
          border: "1.5px solid #90aed9",
        },
      };
    default:
      break;
  }
});
