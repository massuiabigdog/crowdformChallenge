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
      <G filter="url(#filter0_d_1_227)">
        <Rect x={24} y={25} width={40} height={40} rx={10} fill="#29B784" />
      </G>
      <Path
        d="M48.967 38.008c-1 0-1.667.667-1.667.667s.95 1.125.95 2.125c0 0-.557.385-.667 1.333-.168 1.452-1.062 2.313-1.728 2.98-.85.85-2.272 1.937-4.272 2.937-2 1-2.308 2.083-2.308 2.083s-.075.461.308.75c0 0 .667.367 1.334.367 6 0 10.333-5.117 10.333-8.117 0-.763-.13-1.31-.329-1.702l.017.015c-.625-1.34-1.971-.77-1.971-3.438zm-1.782 4.262c-.705.75-1.585 1.072-2.283 1.34-1.12.43-2.862.848-5.094.948-2.235.1-2.958.965-2.958.965s-.255.39-.022.81c0 0 .46.605 1.07.877.54.24 1.084.43 1.632.573 2.655-.478 6.95-3.083 7.655-5.513z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent
