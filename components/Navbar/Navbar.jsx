import React, { useState } from 'react';
import logo from "../../assets/flag-orpheus-top.svg";
import style from "./Navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';


export const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    

    <header className={style.header}>
      <nav className={style.nav + ' ' + "container"}>
        <div className={style.logo}>
          <Image src={logo} alt="" />
        </div>
        <div className={nav ? style.close : style.open}>
          <ul className={style.links}>
            <li className={style.link + ' ' + "subheadline"}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={0}
                duration={500}
                delay={250}
                isDynamic={true}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className={style.link + ' ' + "subheadline"}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={0}
                duration={500}
                delay={250}
                isDynamic={true}
                href="/#About"
              >
                About
              </Link>
            </li>
            <li className={style.link + ' ' + "subheadline"}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={0}
                duration={500}
                delay={250}
                isDynamic={true}
                href="/#Cards"
              >
                Execom
              </Link>
            </li>
            <li className={style.link + ' ' + "subheadline"}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={32}
                duration={500}
                delay={250}
                isDynamic={true}
                href="/#Events"
              >
                Events
              </Link>
            </li>
            <li className={style.link + ' ' + "subheadline"}>
              <Link
                spy={false}
                smooth={true}
                onClick={() => setNav(!nav)}
                offset={0}
                duration={500}
                delay={250}
                isDynamic={true}
                href="/#Home"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={() => {
          setNav(!nav);
        }} className={nav ? style.hamburger : style.active}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>
      </nav>

    </header>
  )
}
