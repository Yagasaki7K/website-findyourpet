import styled from "styled-components";
import Colors from "../utils/Colors";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 990;
  width: 100vw;
  height: 100vh;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ModalDetails = styled(Flexbox)`
  width: 85%;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${Colors.lightColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  border-radius: 8px;
`;

export const ModalHeader = styled(Flexbox)`
  img {
    max-width: 100px;
  }
`;

export const ModalContent = styled(Flexbox)`
  h1 {
    color: ${Colors.darkColor};
    font-size: 1.25rem;
    text-align: center;
  }

  p {
    color: ${Colors.darkColor};
    font-size: 0.8rem;
    text-align: center;
  }

  img {
    max-width: 150px;
  }
`;
