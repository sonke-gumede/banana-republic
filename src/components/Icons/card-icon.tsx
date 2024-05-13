import * as React from "react";
import { JSX } from "react/jsx-runtime";
const CardIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={19}
    viewBox="0 0 27 19"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeWidth={2.117}
      transform="translate(2 2)"
    >
      <rect width={23.275} height={15.89} rx={2.117} />
      <path strokeLinecap="square" d="M0 5.297h22.77" />
      <ellipse cx={17.986} cy={10.593} rx={2.116} ry={2.119} />
      <ellipse cx={13.754} cy={10.593} rx={2.116} ry={2.119} />
    </g>
  </svg>
);
export default CardIcon;
