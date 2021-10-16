import React from 'react'
import {NavLink} from "react-router-dom";
import s from './header.module.css'

function Header() {
    return (
        <div>
            // add NavLinks
            <div>
                <div>
                    <NavLink to={'/pre-junior'} activeClassName={s.activeLink}>Pre Junior</NavLink>
                </div>
                <div>
                    <NavLink to={'/junior'} activeClassName={s.activeLink}>Junior</NavLink>
                </div>

                <div>
                    <NavLink to={'/junior-plus'} activeClassName={s.activeLink}>Junior Plus</NavLink>
                </div>

            </div>
        </div>
    )
}

export default Header
