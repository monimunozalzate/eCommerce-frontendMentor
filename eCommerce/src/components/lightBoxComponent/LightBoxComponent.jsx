import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./LightBoxComponent.css";

const LightBoxComponent = ({ open, setOpen, imagesArray }) => {
  return (
    <div>
      <Lightbox
        id="box"
        open={open}
        close={() => setOpen(false)}
        slides={imagesArray}
        carousel={{ preload: 1 }}
        plugins={[Thumbnails]}
        // className={styles.lightbox}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 0,
          padding: 0,
          gap: 0,
          imageFit: "contain",
          vignette: false,
        }}
        styles={{
          thumbnail: { border: "none" },
          thumbnailsContainer: {  paddingBottom:'6rem' },
          container: { backgroundColor: "black", padding:'6rem 6rem 2rem' },
        }}
      />
    </div>
  );
};

export default LightBoxComponent;
