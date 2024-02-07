import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function HorizontalButtonGroup() {
  const buttonItems = [
    "Stock Video",
    "Video Templates",
    "Music",
    "Sound Effects",
    "Graphic Templates",
    "Graphics",
    "Presentation Templates",
    "Photos",
    "Fonts",
    "Add-ons",
    "More",
  ];

  return (
    <ButtonGroup
      aria-label="horizontal button group"
      style={{
        color: "#e8e6e6",
        outline: "none",
        border: "none",
        display: "flex",
        justifyContent: "start",
        marginLeft: "1.8rem",
        marginTop: "1.3rem",
        marginBottom: "0.5rem",
        flexWrap:'wrap',
        maxHeight:'40px',
        overflow: 'hidden',
      }}
    >
      {buttonItems.map((item, index) => (
        <Button
          key={index}
          style={{
            color: "#040404 ",
            fontWeight: "500",
            fontSize: "1rem",
            border: "none",
            textTransform: "capitalize",
            marginLeft: "10px",
            marginBottom:'10px',
          
          }}
        >
          {item}
        </Button>
      ))}
    </ButtonGroup>
  );
}
