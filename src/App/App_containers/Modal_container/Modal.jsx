import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { StyledModalBackdrop } from './ModalStyle';
import {
  measureOfTimeList,
  additionalList,
  landscapeList,
} from "../utilities/imageCollections";

const StyledModalImage = styled.img`
  position: absolute;
  object-fit: contain;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  max-height: 80%;
  height: 100%;
  width: 100%;
`;

const Modal = ({ data, actions, children }) => {
  const [modalImageComponent, setModalImageComponent] = useState(false);

  const modalImageSrc = () => {
    const collection = data.collection;
    let src;
    if (collection === 'aMeasureOfTime') {
      src = measureOfTimeList.filter((item) => item.name === data.imageTitle);
    } else if (collection === 'landscapes') {
      src = landscapeList.filter((item) => item.name === data.imageTitle);
    } else if (collection === 'additional') {
      src = additionalList.filter((item) => item.name === data.imageTitle);
    }
    return src[0];
  };

  useEffect(() => {
    modalImageSrc().src[750].then(source => {
      setModalImageComponent(() => {
        return <StyledModalImage src={source.default} alt="a painting by Daniel Kosharek" />
      });
    });
  }, []);

  useEffect(()=>{
    if (data.isModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [data.isModal]);

  return (
    <StyledModalBackdrop data={data} onClick={(e) => actions.handleModalToggle(e)}>
      {modalImageComponent}
    </StyledModalBackdrop>
  );
};

export default Modal;
