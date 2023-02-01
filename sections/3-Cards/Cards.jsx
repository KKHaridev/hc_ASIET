import React from 'react';
import style from "./Cards.module.css";
import { Card } from '../../components';

import advisor from "../../assets/Excom/Anila Ma'am.jpg";
import campuslead from "../../assets/Excom/Akshitha Balan.jpg";
import mentor1 from "../../assets/Excom/Athulkrishna.jpg";
import mentor2 from "../../assets/Excom/Archana.jpg";
import techlead from "../../assets/Excom/Abhi.jpg";
import cotechlead from "../../assets/Excom/Swathi Dinesh.jpg";
import proglead from "../../assets/Excom/Insha Nourin.jpg";
import coproglead from "../../assets/Excom/brahmaduttan namboodiripaad.jpg";
import doclead from "../../assets/Excom/Nanditha.jpg";
import networklead from "../../assets/Excom/Amaldev.jpg";
import grphlead from "../../assets/Excom/Akshara Balan.jpg";

const reasons = [
  {
    title: "Staff Advisor",
    image: advisor,
    desc: "Prof Anila S",
    link:' https://www.linkedin.com/in/anila-s-a16aa2229'
  },
  {
    title: "Campus Lead",
    image: campuslead,
    desc: "Akshitha Balan",
    link:' https://www.linkedin.com/in/akshitha-balan-70699228a'
  },
  {
    title: "Mentor",
    image: mentor1,
    desc: "Athulkrishna S",
    link:' https://www.linkedin.com/in/athulkrishna-n-s-558bb2225'
  },
  {
    title: "Mentor",
    image: mentor2,
    desc: "Archana Delip",
    link:' https://www.linkedin.com/in/archana-delip-2b9770226'
  },
  {
    title: "Technical Lead",
    image: techlead,
    desc: "Abhinand K Prasad",
    link:' https://www.linkedin.com/in/abhinand-prasad'
  },
  {
    title: "Co-Technical Lead",
    image: cotechlead,
    desc: "Swathi Dinesh",
    link:' https://www.linkedin.com/in/swathi-dinesh'
  },
  {
    title: "Program Lead",
    image: proglead,
    desc: "Insha Nourin Sulbi",
    link:' https://www.linkedin.com/in/insha-nourin-sulbi-0a823820b'
  },
  {
    title: "Co-Program Lead",
    image: coproglead,
    desc: "Brahmaduttan Namboodiripad",
    link:' https://www.linkedin.com/in/brahma02'
  },
  {
    title: "Documentation Lead",
    image: doclead,
    desc: "Nanditha Nambiar",
    link:' https://www.linkedin.com/in/nanditha-nambiar-aa66a124b'
  },
  {
    title: "Networking Lead",
    image: networklead,
    desc: "Amaldev Suresh",
    link:' https://www.linkedin.com/in/amaldev-suresh-989741275'
  },
  {
    title: "Graphics Lead",
    image: grphlead,
    desc: "Akshara Balan",
    link:' https://www.linkedin.com/in/akshara-balan-861135229'
  },
]

export const Cards = () => {
  return (
    <div className={style.reasons}>
      <div className="container">
        <h1>Excom Team</h1>
        <div className={style.box}>
          {reasons.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};