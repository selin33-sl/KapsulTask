import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Arrow = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2 18L17.9995 2"
      stroke="#7F56D9"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.90948 2H18V15.0909"
      stroke="#7F56D9"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Arrow;
