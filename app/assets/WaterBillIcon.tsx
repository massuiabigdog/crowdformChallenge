import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={94}
      height={100}
      viewBox="0 0 94 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_1_219)">
        <Rect x={24} y={25} width={40} height={40} rx={10} fill="#3629B7" />
      </G>
      <Path
        d="M44.473 37.2a.687.687 0 00-.946 0C43.3 37.425 38 42.807 38 46.333a5.941 5.941 0 006 6 5.94 5.94 0 006-6c0-3.526-5.301-8.908-5.527-9.133zm.194 11.8H44a2.623 2.623 0 01-2.667-2.667v-.666h1.334v.666A1.333 1.333 0 0044 47.667h.667V49z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent
