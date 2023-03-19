import React from 'react';
import style from "./Footer.module.css";
import hcflag from "../../assets/flag-standalone.svg"
import Image from 'next/image';
import Link from 'next/link';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillHeart } from 'react-icons/ai';


export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={"container" + ' ' + style.box}>
        <div className={style.left}>
          <h3>Hack Club ASIET</h3>
          <ul className={style.links}>
            <li className={style.link + ' ' + "subheadline"}>
              <Link href="/"
              >
                Home
              </Link>
            </li>
            <li className={style.link + ' ' + "subheadline"}>
              <Link href="/#About"
              >
                About
              </Link>
            </li>
            <li className={style.link + ' ' + "subheadline"}>
              <Link href="/#Cards"
              >
                Execom
              </Link>
            </li>
            <li className={style.link + ' ' + "subheadline"}>
              <Link href="/#Events"
              >
                Events
              </Link>
            </li>
            <li className={style.link + ' ' + "subheadline"}>
              <Link href="/"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.right}>
          <h3>Connect with Us</h3>
          <div className={style.social}>
            <a href="https://instagram.com/hackclubasiet"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/hackclubasiet"><AiFillLinkedin /></a>
          </div>
          <Image src={hcflag} layout='fill' alt="hc flag" />
        </div>

      </div>
      <div className={style.copyright}>
        Made with&nbsp; <AiFillHeart /> &nbsp; by &nbsp;<span>Hack</span><span>Desk</span>
      </div>
    </div>
  )
}
