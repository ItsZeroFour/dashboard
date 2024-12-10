import React from 'react'
import style from './style.module.scss'

const Nav = () => {
  return (
    <aside className={style.nav}>
        <nav>
            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default Nav