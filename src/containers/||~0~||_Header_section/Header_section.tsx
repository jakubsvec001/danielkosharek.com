import * as React from 'react';
import * as style from '../../src_index.scss';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>
        DanielKosharek.com
      </h1> 
    </header>
  )
}

export default Header;