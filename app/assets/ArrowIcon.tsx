import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={11}
      height={6}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.823.683L1.446 0 5.85 4.833 10.254 0l.623.683L6.16 5.858a.413.413 0 01-.622 0L.822.683z"
        fill="#979797"
      />
    </Svg>
  )
}

export default SvgComponent
