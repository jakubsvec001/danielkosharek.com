import * as React from 'react';
import * as style from '../../src_index.scss';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>
        Daniel Kosharek
      </h1> 
    </header>
  )
}

export default Header;