import styled from "styled-components";

const CARD = styled.div`
  height: calc(15rem + 12vw);
  width: calc(11rem + 12vw);
  background-color: var(--nav3);
  border-radius: 30px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 90%;
  height: 80%;
  position:absolute;
  left: 50%;
  bottom: 15%;
  transform: translate(-50%);
  border-radius: 10%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px 1px 3px var(--white));
`;

const TEXT = styled.h4`
  color: var(--white);
  padding: 0 calc(1rem + 1vw);
  padding-top: 5rem;
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  color: var(--white);
  padding-top: 16rem;
  padding-bottom:0.4rem;
  padding-left: 1.5rem;
  font-size: calc(0.1rem + 1vw);
`;

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <CARD>
      <Image img={Avatar} width="800" height="800" />
      <TEXT>{text}</TEXT>
      <NAME>{name}</NAME>
    </CARD>
  );
};

export default Card;
