import React, { useState, useEffect } from 'react';
import style from "./Footer.module.css";
import hcflag from "../../assets/flag-standalone.svg"
import Image from 'next/image';
import Link from 'next/link';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillHeart } from 'react-icons/ai';

function Contributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/kkharidev/hc_asiet/contributors')
      .then(response => response.json())
      .then(data => setContributors(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="contributors">
      <h3>Contributors</h3>
      <ul>
        {contributors.map(contributor => (
          <li key={contributor.id}>
            <a href={contributor.html_url} target="_blank" rel="noreferrer">
              {contributor.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
            <a href="https://github.com/hackclubasiet"><AiFillGithub /></a>
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
