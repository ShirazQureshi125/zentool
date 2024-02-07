// Carousel.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaCard from "../general-components/card";
import Button from "@mui/material/Button";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useMediaQuery } from "@mui/material";
const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const cardsPerPage = 4;
  const data = [
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "Word to PDF",
      description: "Description for lizard 1 for lizard for lizard for lizard",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "PPt to PDF",
      description: "Description for lizard 2 for lizard for lizard for lizard",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "Excel to PDF",
      description: "Description for lizard 3 for lizard for lizard for lizard",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "JPG to PDF",
      description:
        "Description for lizard 4 for lizard for lizard for lizard   ",
    },
   
  ];
  const isLargeScreen = useMediaQuery("(min-width:960px)");
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  
  return (
    <Box mt={10}  ml={14}  mr={5}>
     
        <Typography
          variant="h4"
          gutterBottom
          color={"black"}
          ml={1}
          fontWeight={700}
        >
          Convert to PDF
        </Typography>
      
     

      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap={2}
    
      >
    
        {data.map((cardData, index) => (
          <MediaCard key={index} {...cardData} style={{ minWidth: "345px" }} />
        ))}
      
      </Box>
    </Box>
  );
};

export default Section4;
