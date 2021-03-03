import React, { useEffect, useState } from 'react';
import { StyledImageContainer, StyledCollectionsImage, StyledImageCaption, StyledInfoBox } from './imageStyles';

import Modal from "../../Modal_container/Modal";
import SoldLabel from './SoldLabel';


const CollectionImage = ({ data, actions }) => {
  const [isModal, setIsModal] = useState(false);
  const [isSoldPainting, setIsSoldPainting] = useState(false)

  const handleModalToggle = (e) => {
    e.preventDefault();
    setIsModal((prevState) => !prevState);
  };
  
  const filtered = data.collectionList.filter((target) => target.name === data.imageTitle );

  useEffect(() => {
      if (filtered[0].isSold) {
      setIsSoldPainting((prevState) => {
        return true
      });
    }
  },[]);
  
  data = {
    ...data,
    isModal,
  }

  actions = {
    ...actions,
    handleModalToggle,
  }

  return (
    <>
      <Modal data={data} actions={actions}>
        Text
      </Modal>
      <StyledImageContainer>
        <StyledCollectionsImage src={data.src} alt="a painting by Daniel Kosharek" onClick={(e) => handleModalToggle(e)} />
        <StyledInfoBox>
          <StyledImageCaption>{data.imageTitle}</StyledImageCaption>
          {isSoldPainting && <SoldLabel />}
        </StyledInfoBox>
      </StyledImageContainer>
    </>
  );
};

export default CollectionImage;
