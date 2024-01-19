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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.343 7.997c0-.286.104-.573.311-.792L10.181.328a1.025 1.025 0 011.503 0 1.163 1.163 0 010 1.584L5.909 7.997l5.775 6.085a1.163 1.163 0 010 1.584 1.025 1.025 0 01-1.503 0L3.654 8.79a1.148 1.148 0 01-.31-.792z"
        fill="#343434"
      />
    </Svg>
  )
}

export default SvgComponent
