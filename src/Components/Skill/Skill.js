import React from 'react';
import react from '../../images/react.png'
import es6 from '../../images/es6.png'
import js from '../../images/js.png'
import node from '../../images/node.png'
import mongo from '../../images/mongodb.png'
import bootstrap from '../../images/bootstrap.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import Navber from '../Home/Navber/Navber';
import SkillDetails from './SkillDetails';

const skillData = [
    {
        id:"1",
        img: react,
        title: "React.js"
    },
    {
        id:"2",
        img: es6,
        title: "Es6"
    },
    {
        id:"3",
        img: js,
        title: "JavasCript"
    },
    {
        id:"4",
        img: node,
        title: "Node.js"
    },
    {
        id:"5",
        img: mongo,
        title: "MongoDB"
    },
    {
        id:"6",
        img: bootstrap,
        title: "Bootstrap"
    },
    {
        id:"7",
        img: html,
        title: "HTML"
    },
    {
        id:"8",
        img: css,
        title: "CSS"
    },
];
const Skill = () => {
    return (
        <div className="bg-main1">
            <Navber></Navber>
            <div className="container my-5">
            <h2 className="text-center text-brand"><u>Key Skills</u></h2>
            <div className="row">
                {
                    skillData.map(skl => <SkillDetails key={skl.id} skills={skl} />)
                }
            </div>
        </div>
        </div>
    );
};

export default Skill;