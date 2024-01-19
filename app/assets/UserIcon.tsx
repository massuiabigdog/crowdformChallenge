import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 15.167c3.86 0 7-3.14 7-7V7c0-3.86-3.14-7-7-7S7 3.14 7 7v1.167c0 3.86 3.14 7 7 7zM22.542 18.645c-5.488-1.52-11.595-1.52-17.084 0a5.862 5.862 0 00-4.291 5.628V28h25.666v-3.727a5.862 5.862 0 00-4.29-5.628z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
