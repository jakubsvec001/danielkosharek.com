import * as React from 'react';
import * as style from '../../src_index.scss';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <p className={style.title}>
        Header
      </p> 
    </header>
  )
}

export default Header;