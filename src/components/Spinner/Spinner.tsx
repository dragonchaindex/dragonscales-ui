import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC = () => {
  return (
    <Container>      
        <image width="160" height="56" href="/images/logo.png"/>
    </Container>
  );
};

export default Spinner;
