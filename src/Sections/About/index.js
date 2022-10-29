import React, { lazy } from "react";
import styled from "styled-components";
import Asset from "../../assets/Asset3.png"
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const CARD = lazy(() => import("../../components/Card About Us/index"));

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
  width: 80vw;
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

const About = () => {
  const settings = {
   
    infinite: true,
    autoplay:true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section id="aboutus">
      <Title>About Us</Title>
      <Carousal>
        <Slider {...settings}>
        
           <CARD
            text="चौBARA started  with a perfect blend of youthful exuberance and experienced cool and calm heads. Just like how chai brings everyone together Chaubara aims to do the same .
            Our vision is to provide hygienic street food from all over the world.Offering a wide variety of options for you to choose from, Chaubara is constantly working on its taste and menu. It’s a modern and lively cafe where guest enjoy a sensory experience.All our cafes are already generating positive reviews due to our highest quality standards."
            name="CHAUBARA- Chaat,Chai&Charcha"
            image="Slide12"
          />
          <CARD
            text="Nitin Jain, a serial entrepreneur is heading the quality control and marketing division of Chaubara. He is a highly motivated and innovative entrepreneur with various notable successes in varied industries and is now focusing solely on making चौBARA a household name in the F&B industry."
            name="NITIN JAIN, co-founder"
            image="Slide13"
          />
          <CARD
            text="Rajan Gupta is already a renowned name in the Stock Broking industry. The dream of building a successful chain of cafés excited him enough to venture into the F&B industry. He is heading our procurement and HR division."
            name="RAJAN GUPTA, Co- founder"
            image="place6"
          />
          <CARD
            text="Jyoti Jain, a Delhi University Graduate, was a homemaker till this F&B idea came along. She is an epitome of women empowerment and a Young India example of entrepreneurship. She took it upon herself to fine tune our recipes and made sure that every bite gives comfort of ‘ghar ka khana’ .She keeps a strict vigil on our preparations and standardization of taste across all locations."
            name="JYOTI JAIN, Director "
            image="place5"
          />
          <CARD
            text="Saroj Gupta is an articulate, intelligent and self-motivated lady.Her foresight, strong business acumen and a meticulous eye for detail has helped Chaubara reach it’s objectives. Her knowledge of F&B industry has really come handy in our organization.She is also the person responsible for our hygiene standards."
            name="SAROJ GUPTA , Director "
            image="place4"
          />
          <CARD
            text="Bhavi Jain represents today’s youth. She is a startup scientist, who's passionate about building human connections & solving real world problems. She carries her expertise in IT & Marketing. She looks after the creation and maintenance of digital assets of our company."
            name="BHAVI JAIN "
            image="place4"
          />
          
          </Slider>
      </Carousal>
    </Section>
  );
};

export default About;
