import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import styles from '../StyleModules/nav.module.css'


export default function NavBar() {
    return (
        <header className={styles.navColor}>
            <div className="container mx-auto flex justify-between">
                <nav className={styles.navLinkContainer}>
                    <NavLink to="/" 
                        exact
                        className={styles.navLinkItem}
                        activeClassName={styles.navLinkItemActive}
                    >
                        Home
                    </NavLink>
                    <NavLink to="/project"
                        className={styles.navLinkItem}
                        activeClassName={styles.navLinkItemActive}
                        
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        className={styles.navLinkItem}
                        activeClassName={styles.navLinkItemActive}
                    >
                        About 
                    </NavLink>
                </nav>
                <div className={styles.socialIcons}>
                    <SocialIcon 
                        url="https://www.linkedin.com/in/nick-luckey-2b086970/" 
                        className="mr-4 my-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style= {{ height: 40, width: 40}} 
                    />
                    <SocialIcon 
                        url="https://github.com/keyluck" 
                        className="mr-4 my-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style= {{ height: 40, width: 40}} 
                    />
                    
                </div>
            </div>
        </header>
    )

}