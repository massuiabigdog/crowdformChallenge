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
        d="M26.833 24.5h-1.166v-9.333h-2.334V24.5h-4.666v-9.333h-2.334V24.5h-4.666v-9.333H9.333V24.5H4.667v-9.333H2.333V24.5H1.167a1.166 1.166 0 100 2.333h25.666a1.166 1.166 0 100-2.333zM27.392 7.142l-12.833-7a1.172 1.172 0 00-1.118 0l-12.833 7A1.167 1.167 0 000 8.167v3.5c0 .645.523 1.166 1.167 1.166h25.666c.644 0 1.167-.521 1.167-1.166v-3.5c0-.427-.233-.82-.608-1.025zM14 9.333a2.333 2.333 0 11-.001-4.665A2.333 2.333 0 0114 9.333z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
