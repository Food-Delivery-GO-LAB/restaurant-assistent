import React from 'react';
import styled, { css } from 'styled-components';
import { sizes } from '../../styles/variables';

const textSizes = {
  xs: css`
    font-size: 12px;
  `,
  sm: css`
    font-size: 14px;
    @media (max-width: ${sizes.breakpoints.md}) {
      font-size: 13px;
    }
  `,
  md: css`
    font-size: 16px;
  `,
  lg: css`
    font-size: 18px;
    @media (max-width: ${sizes.breakpoints.xl}) {
      font-size: 16px;
    }
    @media (max-width: ${sizes.breakpoints.md}) {
      font-size: 16px;
    }
    @media (max-width: ${sizes.breakpoints.sm}) {
      font-size: 16px;
    }
  `,
};

interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'white' | 'green' | 'black';
  className?: string;
  onClick?: () => void;
}

const StyledText = styled.p<TextProps>`
  color: ${(props) => props.theme.text[props.color ?? 'black']};
  ${(props) => textSizes[props.size ?? 'md']}
`;

const Text: React.FC<TextProps> = ({ children, size, color, ...other }) => (
  <StyledText color={color} size={size} {...other}>
    {children}
  </StyledText>
);

Text.defaultProps = {
  size: 'lg',
  color: 'black',
};

export default Text;
