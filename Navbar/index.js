import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import MenuItems from "./MultiItems";

const Header2 = () => {
    // ------------------background-------------------------
    const [header, setHeader] = useState('header');

    const listenScrollEvent = event => {
        if (window.scrollY < 73) {
            return setHeader('header');
        } else if (window.scrollY > 70) {
            return setHeader('header2');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    // ------------------------ Responsive-------------------------------------

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    // ------------------------------------------------------------------
    return (<>
        <header className={header}>
            <nav className="Navbar">
                <div className="imager">
                    <div className={styles["image-div"]}>
                        <Image src="/images/logo.png" width={120}
                            height={60} />
                    </div>
                </div>
                <div className="menu-icon" onClick={handleClick}>

                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className="nav-item">
                                <a
                                    className={item.cName}
                                    href={item.url}
                                    activeClassName="active"
                                    onClick={handleClick}
                                ><div class="dropdown-content">
                                        <a href="#">{item.menu}</a>
                                      
                                        <a href="#">{item.menu1}</a>
                                    </div>

                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>

            </nav>
        </header>
        
    </>
    );
};
export default Header2;
