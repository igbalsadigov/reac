import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo-01.png'
import styles from './Header.module.css'



const Header = () => {
    return (
        <header className={styles.header} >
            <div className= {styles.container}>
                <div  className= {styles.containerLogo}>
                    <img src={logo} alt="" />
                
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Shope</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav></div>
                <div className={styles.icons}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faCartShopping} />
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>
        </header>

    )
}

export default Header
