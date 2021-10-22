import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // @ts-ignore
    return (
     <Svg viewBox="0 0 160 160" {...props}>
            <image width="160" height="160" href={isDark ? '/images/icon.png' : '/images/icon.png'}/>
     </Svg>
  );
};

export default Icon;
