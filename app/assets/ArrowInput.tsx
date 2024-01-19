import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.667 15.61l-.943-.943L10.391 8 3.724 1.333l.943-.942 7.138 7.138c.26.26.26.682 0 .942L4.667 15.61z"
        fill="#898989"
      />
    </Svg>
  )
}

export default SvgComponent
