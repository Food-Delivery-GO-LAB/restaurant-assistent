import React from 'react';

export interface IconBaseProps extends React.SVGProps<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  stroke?: string;
}
export type IconType = React.FC<IconBaseProps>;
