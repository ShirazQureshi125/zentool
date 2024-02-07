import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


interface MediaCardProps {
  title: string;
  image: string; // Assuming image is a URL
  description: string;
}
const MediaCard: React.FC<MediaCardProps> =({ title, image, description }) => {
  return (
    <Card
      sx={{
        maxWidth: 345 ,
        width: 280,
        minwidth:250,
        marginLeft:'1rem',
        borderRadius:'20px',
        transition: "transform 0.3s", 
        "&:hover": {
          transform: "scale(1.01)", 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        },
      }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MediaCard;
