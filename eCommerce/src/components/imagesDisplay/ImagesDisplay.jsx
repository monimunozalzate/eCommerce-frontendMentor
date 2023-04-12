import React, { useState } from "react";
import LightBoxComponent from "../lightBoxComponent/LightBoxComponent";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ImagesDisplay = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        padding: " 5rem 0",
      }}
    >
      <Lightbox
        open={true}
        slides={imagesArray}
        plugins={[Inline, Thumbnails]}
        styles={{ container: { backgroundColor: "var(--white)" },
      thumbnail:{backgroundColor: ' white', borderRadius:'5px'},
      thumbnailsContainer:{backgroundColor: ' white'},
      root:{"--yarl__slide_image":'8px'}
      
     }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "100%",
            aspectRatio: "3 / 3",
          },
        }}
        thumbnails={{
          position: "bottom",
          width: 130,
          height: 80,
          border: 0,
          borderRadius: 8,
          padding: 2,
          gap: 0,
          imageFit:'contain',
          vignette: false
        }}
      />

      {/* <button
        // className={styles.btn}
        type="button"
        onClick={() => setOpen(true)}
      >
        Ver más
      </button> */}
      {open ? (
        <LightBoxComponent
          open={open}
          setOpen={setOpen}
          imagesArray={imagesArray}
        />
      ) : null}
    </div>
  );
};

export default ImagesDisplay;

//obj images
const imagesArray = [];
const img1 = { src: "src/assets/images/image-product-1.jpg" };
imagesArray.push(img1);
const img2 = { src: "src/assets/images/image-product-2.jpg" };
imagesArray.push(img2);
const img3 = { src: "src/assets/images/image-product-3.jpg" };
imagesArray.push(img3);
const img4 = { src: "src/assets/images/image-product-4.jpg" };
imagesArray.push(img4);
// console.log(imagesArray)
