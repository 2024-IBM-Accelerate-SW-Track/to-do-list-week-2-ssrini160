import React, { Component } from 'react';
import "./About.css";
import shriya from  "../assets/shriya.jpg";



export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
        <div className="centered">

        <img 
        className="profile_image"
        alt="Profile Pic"
        src={shriya}
        ></img>
        </div>
        </div>
        <div className="split right">
        <div className="name_title">Shriya Srinivas</div>
        <div className="brief_description">
        Education: Purdue University, Computer Engineering
        </div>
        <div></div>
        <div></div>
        <div className="brief_description">
        Hometown: Minneapolis, MN 
        </div>
        <div></div><div></div>
        <div className="brief_description">
        Hobbies: Dancing, Traveling, Hanging Out With Friends
        </div>
        <div></div><div></div>
        <div className="brief_description">
        Fun Fact: I am allergic to olive oil!
        </div>
        </div>
        </div> 
      </div>
    )
  }
}