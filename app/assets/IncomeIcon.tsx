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
      <G filter="url(#filter0_d_1_265)">
        <Rect x={24} y={25} width={40} height={40} rx={10} fill="#FF4267" />
      </G>
      <Path
        d="M44.367 46.682v1.297c.472-.08.708-.285.708-.615 0-.351-.386-.535-.708-.682zM42.982 44.203c0 .368.333.533.672.682v-1.224c-.448.066-.672.247-.672.542z"
        fill="#fff"
      />
      <Path
        d="M48 39l-2-2-2 2-2-2-2 2-2.667-2v15.333c0 .369.299.667.667.667h12a.667.667 0 00.667-.667V37L48 39zm-3.633 10.219v1.068h-.713V49.24c-.847-.017-1.59-.167-2.23-.448v-1.375c.6.297 1.553.557 2.23.599v-1.615c-1.193-.462-2.24-.911-2.24-2.198 0-1.168 1.073-1.718 2.24-1.833v-.797h.713v.776c.795.034 1.514.194 2.156.479l-.489 1.219a5.634 5.634 0 00-1.667-.406v1.536c1.266.487 2.276.93 2.276 2.11 0 1.243-1.032 1.818-2.276 1.932z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent
