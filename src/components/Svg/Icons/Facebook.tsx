import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 15" {...props}>
      <path d="M10.8,8.4l0.4-2.6H8.7V4.1c0-0.7,0.3-1.4,1.5-1.4h1.1V0.5c0,0-1-0.2-2-0.2c-2.1,0-3.4,1.2-3.4,3.5v2H3.7v2.6h2.3v6.3h2.8
	V8.4H10.8z"/>
    </Svg>
  );
};

export default Icon;
