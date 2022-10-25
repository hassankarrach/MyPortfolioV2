import React, { useEffect } from "react";
import styled from "@emotion/styled";
import AboutPic from "../../../Media/About/About.jpg";
//Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".itemAnimate",
      start: "top 95%",
      end: "bottom top",
      duration: 1.25,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
      scrub: 1,
      onEnter: () => {
        gsap.to(".itemAnimate", {
          x: 0,
          duration: 1,
          opacity: 1,
        });
      },
      onLeave: () => {
        gsap.to(".itemAnimate", {
          x: -100,
          duration: 1,
          opacity: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(".itemAnimate", {
          x: 0,
          duration: 1,
          opacity: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to(".itemAnimate", {
          x: 100,
          duration: 1,
          opacity: 0,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".itemAnimate2",
      start: "top 95%",
      end: "bottom top",
      duration: 1.25,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
      scrub: 1,
      onEnter: () => {
        gsap.to(".itemAnimate2", {
          x: 0,
          duration: 1,
          opacity: 1,
        });
      },
      onLeave: () => {
        gsap.to(".itemAnimate2", {
          x: 100,
          duration: 1,
          opacity: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(".itemAnimate2", {
          x: 0,
          duration: 1,
          opacity: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to(".itemAnimate2", {
          x: -100,
          duration: 1,
          opacity: 0,
        });
      },
    });
  }, []);

  return (
    <StyledAbout data-scroll-section id="AboutMe">
      <div className="left itemAnimate2"></div>
      <div className="right">
        <h1 className="itemAnimate">
          Hi there! <br />
          I'm a 23 years old web developer and Graphic Designer located in
          Casablanca, Morocco.
          <br />
          My affection towards coding started in high school, where I wrote my
          first lines of JavaScript. <br />
          Apart from programming, I'm into reading books, traveling, and amateur
          photography. I've also got interested in blockchain and smart contract
          coding on the Ethereum.
        </h1>
      </div>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  .left {
    width: 40%;
    height: 350px;
    background: linear-gradient(
        90deg,
        rgba(16, 16, 26, 0) 0%,
        rgba(16, 16, 26, 1) 100%
      ),
      url(${AboutPic});
    background-position: center;
    background-size: cover;
    transform: translateX(-5vw);
  }

  .right {
    position: absolute;
    width: 60%;
    margin-left: 30%;

    h1 {
      color: white;
      font-family: "Montserrat";
      font-size: 1.2rem;
      opacity: 0.7;
      line-height: 1.8rem;
      transform: translateX(8vw);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: initial;
    align-items: initial;

    .left {
      width: 100%;
      background: linear-gradient(
          180deg,
          rgba(16, 16, 26, 0) 0%,
          rgba(16, 16, 26, 1) 100%
        ),
        url(${AboutPic});
    }

    .right {
      width: 100%;
      margin-left: 0px;
      padding: 10px;
      position: static;

      h1 {
        font-size: 1rem;
        text-align: left;
      }
    }
  }
`;

export default About;
