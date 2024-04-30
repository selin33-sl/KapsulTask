import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const PlayIcon = props => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={0.786804}
      y={0.442871}
      width={24.7869}
      height={24.7869}
      rx={12.3934}
      fill="#8459EB"
    />
    <Path
      d="M17.9999 11.7681C18.9179 12.2429 18.9179 13.4298 17.9999 13.9045L9.7376 18.1774C8.81956 18.6522 7.67202 18.0587 7.67202 17.1092L7.67202 8.56344C7.67202 7.61391 8.81956 7.02045 9.7376 7.49522L17.9999 11.7681Z"
      fill="white"
    />
  </Svg>
);
export default PlayIcon;
