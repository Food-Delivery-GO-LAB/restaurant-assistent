import styled, { css } from 'styled-components';
import { sizes } from '../../styles/variables';

const titleSizes = {
  lg: css`
    font-size: 28px;
    @media (max-width: ${sizes.breakpoints.sm}) {
      font-size: 24px;
    }
  `,
  md: css`
    font-size: 24px;
    @media (max-width: ${sizes.breakpoints.sm}) {
      font-size: 20px;
    }
  `,
  sm: css`
    font-size: 18px;
  `,
};

interface Props {
  size: 'lg' | 'md' | 'sm';
  fontWeight?: '300' | '400' | '500' | '700';
  position?: 'center' | 'left' | 'right';
}

const Title = styled.h2<Props>`
  color: ${(props) => props.theme.text.green};
  ${(props) => titleSizes[props.size]}
  text-align: ${(props) => props.position};
  font-weight: ${(props) => props.fontWeight};
`;

Title.defaultProps = {
  position: 'center',
};

export default Title;
