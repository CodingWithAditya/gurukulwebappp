import React, { lazy } from "react";
import styled from "styled-components";
import Asset from "../../assets/Asset3.png"
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const CARD = lazy(() => import("../../components/Card Nearu/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Asset});
 
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(2rem + 1.5vw);
  margin-top: 2.5rem;
  margin-bottom:-5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Nearu = () => {
  const settings = {
   
    infinite: true,
    autoplay:true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <Section>
      <Title>चौBARA Near U</Title>
      <Carousal>
        <Slider {...settings}>
        <CARD
            text=""
            name="Narula’s Inn , P-block, Near Jain Chawal Waley, CP, New Delhi"
            image="place1"
          />
           <CARD
            text=""
            name="17A/35, First Floor, Punjabi Bagh,West,New Delhi, Delhi"
            image="place2"
          />
          <CARD
            text=""
            name="Upper Ground Floor ,Capital Cyberscape,Sector-59,Gurugram"
            image="place3"
          />
          <CARD
            text=""
            name="G-2, National Market,Vardhman Western Plaza,Bhera Enclave, Paschim Vihar"
            image="place6"
          />
          <CARD
            text=""
            name="Shop No.5, Gol Chakkar Market , Ramesh Nagar , New Delhi"
            image="place5"
          />
          <CARD
            text=""
            name="Central Plaza Mall , Golf Course Road , Gurgaon - 122002"
            image="place4"
          />
          
          </Slider>
      </Carousal>
    </Section>
  );
};

export default Nearu;
