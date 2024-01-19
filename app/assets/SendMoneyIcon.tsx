import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
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
        d="M12 2v2H1.333v1.333H12v2l2.667-2.666L12 2zM4 8.667l-2.667 2.666L4 14v-2h10.667v-1.333H4v-2z"
        fill="#120F20"
      />
    </Svg>
  )
}

export default SvgComponent
