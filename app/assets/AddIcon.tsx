import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22 11h-9V2c0-.6-.4-1-1-1s-1 .4-1 1v9H2c-.6 0-1 .4-1 1s.4 1 1 1h9v9c0 .6.4 1 1 1s1-.4 1-1v-9h9c.6 0 1-.4 1-1s-.4-1-1-1z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
