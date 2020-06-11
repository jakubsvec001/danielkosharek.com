import React from 'react';
import * as style from './StyledHello.module';

const StyledComponent: React.FC = () => {

  return (
    <h1 style={style.greeting}>Hello</h1>
  )
}

export default StyledComponent;