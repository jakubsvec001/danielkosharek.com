import React, { useState } from 'react';
import { StyledImageContainer, StyledCollectionsImage, StyledImageCaption } from './imageStyles';

import Modal from "../../Modal_container/Modal";
const CollectionImage = ({ data, actions }) => {
  const [isModal, setIsModal] = useState(false);

  const handleModalToggle = (e) => {
    e.preventDefault();
    setIsModal((prevState) => !prevState);
  };

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
        <StyledImageCaption>{data.imageTitle}</StyledImageCaption>
      </StyledImageContainer>
    </>
  );
};

export default CollectionImage;
