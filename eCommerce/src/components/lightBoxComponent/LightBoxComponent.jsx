import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const LightBoxComponent = ({ open, setOpen, imagesArray }) => {
  return (
    <div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imagesArray}
        plugins={[Thumbnails]}
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
  );
};

export default LightBoxComponent;
