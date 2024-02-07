// Carousel.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaCard from "../general-components/card";
import Button from "@mui/material/Button";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useMediaQuery } from "@mui/material";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const cardsPerPage = 4;
  const data = [
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "PDF to Word",
      description: "Description for lizard 1 for lizard for lizard for lizard",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "PDF to PPT",
      description: "Description for lizard 2 for lizard for lizard for lizard",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "PDF to Excel",
      description: "Description for lizard 3 for lizard for lizard for lizard",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "PDF to JPG",
      description:
        "Description for lizard 4 for lizard for lizard for lizard   ",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "PDF to TXT",
      description:
        "Description for lizard 4 for lizard for lizard for lizard   ",
    },
    {
      image:
        "https://i.pinimg.com/564x/17/85/cb/1785cbc8818b4e702f6064d439f152ad.jpg",
      title: "Retate Text",
      description:
        "Description for lizard 4 for lizard for lizard for lizard   ",
    },
  ];
  const isLargeScreen = useMediaQuery("(min-width:960px)");
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  const cardsPerPage = isLargeScreen ? 4 : isMediumScreen ? 2 : 1;

  const totalPages = Math.ceil(data.length / cardsPerPage);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  const startIndex = currentIndex * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, data.length);
  const visibleCards = data.slice(startIndex, endIndex);
  return (
    <Box mt={10} ml={5}>
      <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth={1400}>
        <Typography
          variant="h4"
          gutterBottom
          color={"black"}
          ml={10}
          fontWeight={700}
        >
          Convert from PDF
        </Typography>
        <button
          style={{
            display: "flex",
           backgroundColor: "#f2f2f2 ",
            borderRadius: "20px",
            alignItems:'center',
            marginRight:'6rem',
            width:'80px',
            height:'35px',
            justifyContent: 'center',
          
          }}
        >
          <span style={{ color: "black", fontWeight: 500 }}>All</span>{" "}
          <MdNavigateNext size={20} color="black" />
        </button>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        gap={2}
        style={{
          transition: "transform 0.2s ease", // CSS transition for sliding effect
          transform: `translateX(${-currentIndex * 1}%)`, // Adjust the translation based on the currentIndex
        }}
      >
        <Button
          onClick={handlePrevious}
          style={{
            height: "65px",
            width: "5px",
            border: "1px solid gray",
            borderRadius: "100px",
            display: "flex",
            position: "relative",
            top: "6rem",
            left: "2rem",
          }}
        >
          <GrFormPrevious size={30} color="gray" />
        </Button>
        {visibleCards.map((cardData, index) => (
          <MediaCard key={index} {...cardData} style={{ minWidth: "345px" }} />
        ))}
        <Button
          onClick={handleNext}
          style={{
            height: "65px",
            width: "20px",
            border: "1px solid gray",
            borderRadius: "70px",
            position: "relative",
            top: "6rem",
            right: "2rem",
          }}
        >
          <MdNavigateNext size={30} color="gray" />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
