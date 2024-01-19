import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={19}
      height={14}
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.167 0C2.5 0 0 6.667 0 6.667s2.5 6.666 9.167 6.666c6.666 0 9.166-6.666 9.166-6.666S15.833 0 9.167 0zm0 1.667c4.396 0 6.62 3.556 7.34 4.996-.72 1.431-2.961 5.004-7.34 5.004-4.397 0-6.62-3.556-7.34-4.997.72-1.43 2.96-5.003 7.34-5.003zm0 1.666a3.333 3.333 0 100 6.667 3.333 3.333 0 000-6.667zm0 1.667a1.666 1.666 0 110 3.332 1.666 1.666 0 010-3.332z"
        fill="#979797"
      />
    </Svg>
  )
}

export default SvgComponent
