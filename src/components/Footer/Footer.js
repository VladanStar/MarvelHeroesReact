import React from 'react';
import styles from './Footer.module.css';

import { Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar className={`${styles.footer} justify-content-center`}>
            <Navbar.Brand >
                <span className={styles.name}>&copy; 2021, by Vladan Cupric</span>
            </Navbar.Brand>
        </Navbar>
    )
}

export { Footer }