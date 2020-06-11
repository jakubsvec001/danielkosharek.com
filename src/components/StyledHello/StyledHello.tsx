import React from 'react';
import * as styledHello from './StyledHello.module.scss'

const StyledComponent: React.FC = (props) => {

  return (
    <div className={styledHello.greeting} >Hello There You</div>
  )
}

export default StyledComponent;