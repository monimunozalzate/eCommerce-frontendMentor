import React, { useState } from "react";
import LightBoxComponent from "../lightBoxComponent/LightBoxComponent";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./ImagesDisplay.css";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { IconButton } from "@mui/material";

const ImagesDisplay = ({imagesArray}) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="imagesContainer">
      <IconButton
        id="btn"
        type="button"
        onClick={() => setOpen(true)}
        style={{position:'absolute'}}
      >
        <ZoomInIcon style={{ fontSize: "1.8rem" }} />
      </IconButton>
      <Lightbox
        open={true}
        slides={imagesArray}
        plugins={[Inline, Thumbnails]}
        carousel={{ preload: 1 }}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
        styles={{
          container: { backgroundColor: "var(--white)" },
          thumbnail: { backgroundColor: " white", borderRadius: "5px" },
          thumbnailsContainer: { backgroundColor: " white", marginTop:'1rem' },
          // root:{"--yarl__slide_image":'8px'}
        }}
        inline={{
          style: {
            width: "103%",
            maxWidth: "103%",
            aspectRatio: "4 /4",
          },
        }}
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
      />

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


