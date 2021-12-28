import {Box, ImageList, ImageListItem, Typography} from "@mui/material";
import {galleryImages} from "./Images";
import Lightbox from 'react-image-lightbox';
import {useState} from "react";

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState();
  const [isOpen, setOpen] = useState(false);

  function showPhoto(index) {
    setPhotoIndex(index);
    setOpen(true);
  }

  return (
    <Box sx={{pb: '4em', pt: '1rem'}}>
      <Typography variant='h1'>Gallery</Typography>
      <ImageList variant="woven" cols={3} gap={8}>
        {galleryImages.map((item, index) => (
          <ImageListItem key={index} onClick={() => showPhoto(index)} sx={{cursor: 'pointer'}}>
            <img src={item.image} alt={item.title}/>
          </ImageListItem>
        ))}
      </ImageList>
      {
        isOpen && (
          <Lightbox
            enableZoom={false}
            mainSrc={galleryImages[photoIndex].image}
            nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length].image}
            prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length].image}
            onCloseRequest={() => setOpen(false)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % galleryImages.length)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)}
          />
        )
      }
    </Box>
  )
}
