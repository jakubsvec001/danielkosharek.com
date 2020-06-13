import * as React from 'react';
import * as style from '../../src_index.scss'

const Main_section: React.FC = (props) => {
  return (
    <main className={style['site-container']}>
      { props.children }
    </main>
  )
}

export default Main_section;