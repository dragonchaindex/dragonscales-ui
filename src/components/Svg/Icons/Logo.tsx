import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // @ts-ignore
    return (
     <Svg viewBox="0 0 200 160" {...props}>
            <image width="200" height="160" href={isDark ? '/images/logoDark.svg' : '/images/logoWhite.svg'}/>
     </Svg>
  );
};

export default Icon;
