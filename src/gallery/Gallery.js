import {Box, ImageList, ImageListItem} from "@mui/material";
import {galleryImages} from "./images";

export default function Gallery() {
  return (
    <Box>
      <ImageList variant="woven" cols={3} gap={8}>
        {galleryImages.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={`${item.image}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}