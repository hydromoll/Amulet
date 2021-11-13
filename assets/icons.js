import React from 'react';
import {Svg, Path, G} from 'react-native-svg';
import perfectSize from '../page/screenSize';
export function Back(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={perfectSize(25.352)}
      height={perfectSize(22.807)}
      viewBox="0 0 20.352 18.807"
      {...props}>
      <G data-name="Group 32">
        <G
          data-name="Icon feather-arrow-left"
          fill="none"
          stroke={props.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={perfectSize(3)}>
          <Path data-name="Path 43" d="M18.852 9.403H1.5" />
          <Path data-name="Path 44" d="M8.782 16.685L1.5 9.403l7.282-7.282" />
        </G>
      </G>
    </Svg>
  );
}
