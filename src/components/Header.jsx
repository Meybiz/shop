import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/Header.module.css"
import { ROUTES } from './../util/routes';
import LOGO from "../img/Logo.png"
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="$$" />
            </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user}>
                    <div className={styles.avatar} style={{backgroundImage: `url()`}} />
                    <div className={styles.username}>Guest</div>
                </div>
                <form className={styles.form}>
                <div className={styles.icon}>
                    <svg className="icon">
                        <use xlinkHref="./public/sprite.svg#search" />
                    </svg>
                </div>
                <div className={styles.input}>
                    <input type="search" name="search" placeholder="Ищи" autoComplete="off" onChange={() => {}} value="" />
                </div>

                </form>
            </div>
        </div>
    )
}


export default Header;