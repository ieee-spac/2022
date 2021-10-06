import Image1 from '../assets/gallery/1.jpg';
import Image2 from '../assets/gallery/2.jpg';
import Image3 from '../assets/gallery/3.jpg';
import Image4 from '../assets/gallery/4.jpg';
import Image5 from '../assets/gallery/5.jpg';
import Image6 from '../assets/gallery/6.jpg';
import Image7 from '../assets/gallery/7.jpg';
import Image8 from '../assets/gallery/8.jpg';
import Image9 from '../assets/gallery/9.jpg';
import Image10 from '../assets/gallery/10.jpg';
import Image11 from '../assets/gallery/11.jpg';
import Image12 from '../assets/gallery/12.jpg';
import Image13 from '../assets/gallery/13.jpg';
import Image14 from '../assets/gallery/14.jpg';
import Image15 from '../assets/gallery/15.jpg';
import Image16 from '../assets/gallery/16.jpg';
import Image17 from '../assets/gallery/17.jpg';
import Image18 from '../assets/gallery/18.jpg';

let images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18];
images = images.map((image, index) => {
  return {
    image: image,
    title: `Gallery ${index}`
  }
});

export const galleryImages = images;