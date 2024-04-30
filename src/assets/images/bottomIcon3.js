import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const BottomIcon3 = props => (
  <Svg
    width={67}
    height={30}
    viewBox="0 0 67 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect
      width={65.7862}
      height={29.2383}
      transform="translate(0.528259 0.381042)"
      fill="url(#pattern0_1_363)"
    />
    <Defs>
      <Pattern
        id="pattern0_1_363"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use
          xlinkHref="#image0_1_363"
          transform="scale(0.00347222 0.0078125)"
        />
      </Pattern>
      <Image
        id="image0_1_363"
        width={288}
        height={128}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default BottomIcon3;
