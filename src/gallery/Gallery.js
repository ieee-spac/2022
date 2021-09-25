import {Box, ImageList, ImageListItem} from "@mui/material";
import {galleryImages} from "./images";
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
    <Box>
      <ImageList variant="woven" cols={3} gap={8}>
        {galleryImages.map((item, index) => (
          <ImageListItem key={index} onClick={() => showPhoto(index)} sx={{cursor: 'pointer'}}>
            <img
              src={`${item.image}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
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