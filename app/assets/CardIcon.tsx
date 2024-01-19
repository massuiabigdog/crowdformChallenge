import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={3}
      height={28}
      viewBox="0 0 3 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3 9.332V4.667A2.333 2.333 0 00.667 2.333h-23.334A2.333 2.333 0 00-25 4.667v4.665H3zM-25 12.833v10.5a2.333 2.333 0 002.333 2.334H.667A2.333 2.333 0 003 23.333v-10.5h-28zm12.833 7h-8.166V17.5h8.166v2.333zm10.5 0h-4.666V17.5h4.666v2.333z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
