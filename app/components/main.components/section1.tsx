import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaCard from "../general-components/card";
import { useMediaQuery } from "@mui/material";

const Section1 = () => {

  const data = [
    {
      image:
        "https://www.shutterstock.com/image-vector/orange-clipboard-checklist-icon-isolated-260nw-1320814034.jpg",
      title: "Edit PDF",
      description: "Description for lizard 1 for lizard for lizard for lizard",
    },
    {
      image:
        "https://www.shutterstock.com/image-vector/orange-clipboard-checklist-icon-isolated-260nw-1320814034.jpg",
      title: "Crop PDF",
      description: "Description for lizard 2 for lizard for lizard for lizard",
    },
    {
      image:
        "https://www.shutterstock.com/image-vector/orange-clipboard-checklist-icon-isolated-260nw-1320814034.jpg",
      title: "Replace Text",
      description: "Description for lizard 3 for lizard for lizard for lizard",
    },
    {
      image:
        "https://www.shutterstock.com/image-vector/orange-clipboard-checklist-icon-isolated-260nw-1320814034.jpg",
      title: "Retate Text",
      description:
        "Description for lizard 4 for lizard for lizard for lizard   ",
    },
  ];
  const isWideScreen = useMediaQuery("(min-width:768px)");


  return (
    <Box mt={10} ml={14} mr={5}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ color: "black", fontWeight: 700 }}
      >
        Your Bookmarks
      </Typography>
      <Box display="flex"   flexDirection="row"  flexWrap="wrap" gap={2} mt={4} >
        {data.map((cardData, index) => (
          <MediaCard key={index} {...cardData} style={{ minWidth: "345px" }} />
        ))}
      </Box>
    </Box>
  );
};

export default Section1;
