import React, { useState } from "react";
import LightBoxComponent from "../lightBoxComponent/LightBoxComponent";
import styles from "./imagesDisplay.module.css";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ImagesDisplay = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.imagesGrid}>
        {/* <img src="src\assets\images\image-product-1-thumbnail.jpg" alt="" /> */}
        <Lightbox
          open={true}
          slides={imagesArray}
          plugins={[Inline, Thumbnails]}
          inline={{
            style: {
              width: "100%",
              maxWidth: "900px",
              aspectRatio: "3 / 2",
            },
          }}
          // className={styles.lightbox}
          thumbnails={{
            position: "bottom",
            width: 120,
            height: 80,
            border: 1,
            borderRadius: 4,
            padding: 4,
            gap: 16,
          }}
        />
      </div>
      <button
        // className={styles.btn}
        type="button"
        onClick={() => setOpen(true)}
      >
        Ver más
      </button>
      {open ? <LightBoxComponent open={open} setOpen={setOpen} /> : null}
    </>
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
