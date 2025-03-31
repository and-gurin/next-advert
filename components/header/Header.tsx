"use client";

import "@/styles/wrapper.scss"
import NavItem from "@/components/navigation/Navigation";
import style from "./Header.module.scss";
import Image from "next/image";
import {raleWay} from '@/app/fonts';
import Logo from "@/components/logo/Logo";
import React, {useEffect, useRef, useState} from "react";
import burger from "@/public/icons8-menu.svg";
import close from "@/public/close-bold-svgrepo-com.svg";
import handset from "@/public/handset-svgrepo-com.svg";

const links = [
    {id: 1, title: 'LEISTUNGEN', href: '#services'},
    {id: 2, title: 'PORTFOLIO', href: '#gallery'},
    {id: 3, title: 'FÜR KUNDEN', href: '#clients'},
    {id: 4, title: 'TEAM', href: '#team'},
    {id: 5, title: 'KONTAKT', href: '#contact'},
]

const Header = () => {

    const [openBurger, setOpenBurger] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpenBurger(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenBurger]);

    return (
        <header className={raleWay.className + ' ' + style.header} ref={headerRef}>
            <div className={`wrapper ${style.header__wrapper}`} >
                <Logo/>
                <nav className={style.header__navigation}>
                    <ul className={style.header__links}>
                        <NavItem links={links}/>
                    </ul>
                </nav>
                <div className={style.header__burger} onClick={() => setOpenBurger(!openBurger)}>
                    <Image
                        src={openBurger ? close : burger}
                        alt='Burger menu'
                        width='32'
                        height='32'
                    />
                </div>
            </div>
            {openBurger &&
                <nav className={style.header__navigation_burger} ref={burgerRef}>
                    <ul className={style.header__links_burger}>
                        <NavItem links={links} openMenu={() => setOpenBurger(!openBurger)}/>
                    </ul>
                    <a href="tel:+48511944302" className={style.header__phone}>
                        <Image
                            src={handset}
                            width='24'
                            height='24'
                            alt='Słuchawka'
                        />
                        {'Mon-Sat: 8:00 AM - 8:00 PM'}
                    </a>
                </nav>
            }
        </header>
    );
};

export default Header;