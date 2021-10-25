import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <image width="512" height="512" href={true ? './images/dragon_token_logo.png' : '/images/dragon_token_logo.png'}/>
    </Svg>
  );
};

export default Icon;
