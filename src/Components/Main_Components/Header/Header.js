import React, { useEffect, useRef } from "react";
import styled from "styled-components";
//Media
import Cover from "../../../Media/Header/Cover.webp";
import SpinText from "../../../Media/Header/SpinText.png";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Header() {
  const SpinRef = useRef(null);
  const HeaderContainerImg = useRef(null);
  useEffect(() => {
    const el = SpinRef.current;
    const ImgEl = HeaderContainerImg.current;
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      rotation: 360,
      ease: "none",
    });
  }, []);
  return (
    <StyledHeader data-scroll-section id="Main">
      <div className="Left">
        <div className="Info">
          <h3>Hi, My name is </h3>
          <h1>HASSAN KARRACH</h1>
          <div className="SayHelloIcons">
            <a href="mailto:hassankarrach@outlook.fr?subject=From%20hassankarrach.com&body=%0D%0A">
              <EmailIcon fontSize="large" className="Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hassankarrach/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" className="Icon" />
            </a>
            <a href="https://wa.me/646838512" target="_blank">
              <WhatsAppIcon fontSize="large" className="Icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="Right" ref={HeaderContainerImg}>
        <img
          height="100%"
          width="auto"
          className="HeaderCover"
          src={Cover}
          title="Hassan karrach photo"
          alt="hassan karrach photo"
        />
        <div className="IconHolder">
          <img
            width="180px"
            height="180px"
            src={SpinText}
            className="spinText"
            ref={SpinRef}
            title="hassan karrach logo"
            alt="hassan karrach logo"
          />
          <svg
            className="icon"
            viewBox="0 0 24 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 24V0L0 24H8V48L24 24H16Z" />
          </svg>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
  }

  .Left {
    color: var(--White-Color);
    background-color: var(--Bg);
    height: 100%;
    display: flex;
    flex-direction: column;

    .SayHelloIcons {
      margin-top: 20px;

      .Icon {
        margin: 0px;
        color: white;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        &:hover {
          color: #2c2c47;
        }
      }
    }

    .Info {
      position: absolute;
      left: 15%;
      top: 35%;
      z-index: 2;
      @media (max-width: 768px) {
        left: 3%;
        top: 40%;
      }
      h3,
      h1 {
        font-family: "Lemon/Milk light", sans-serif;
        font-size: 40px;
        margin-bottom: 5px;
        @media (max-width: 768px) {
          font-size: 30px;
        }
      }

      h1 {
        font-size: 60px;
        @media (max-width: 768px) {
          font-size: 50px;
          line-height: 95%;
        }
      }
    }
  }

  .Right {
    background-color: #26263e;
    background-repeat: no-repeat;
    height: 70%;
    width: 70%;
    overflow: hidden;
    margin-left: auto;
    .HeaderCover {
      height: 100%;
      float: right;
    }
    @media (max-width: 768px) {
      height: 100%;
      width: 100%;
    }

    .IconHolder {
      position: absolute;
      display: flex;
      bottom: 51px;
      z-index: 3;

      .icon {
        width: 25px;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 50%;
        transform: translateY(-50%);
        fill: white;
      }

      .spinText {
        width: 180px;
        height: 180px;
      }
    }
  }
`;

export default Header;
