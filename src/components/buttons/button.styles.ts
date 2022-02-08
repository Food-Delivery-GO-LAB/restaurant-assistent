import styled, { css } from 'styled-components';
import MuiButton from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import { ButtonProps } from './button.types';
import { colors as globalColors, sizes } from '../../styles/variables';
import isIOS from '../../utils/is-IOS';
import IosSpinner from '../loaders/ios-spinner';

const colors = {
  primary: css`
    background-color: ${globalColors.green};
    color: ${globalColors.white};
    &:hover {
      background-color: ${globalColors.green_hover};
    }
  `,
  secondary: css`
    background-color: transparent;
    border: 1px solid ${globalColors.green};
    color: ${globalColors.green};
    &:hover {
      background-color: ${globalColors.white_lighter};
      color: ${globalColors.green_hover};
      border: 1px solid ${globalColors.green_hover};
    }
  `,
  disabled: css`
    background-color: ${globalColors.white_lighter};
    cursor: not-allowed;
    color: ${globalColors.grey};
  `,
  text: css`
    padding: 6px 12px;
    background-color: transparent;
  `,
  error: css`
    background-color: ${globalColors.primary};
    color: ${globalColors.white};
    border-color: ${globalColors.primary};
    &:hover {
      background-color: ${globalColors.primary_hover};
    }
  `,
};

const loadingStyles = css`
  pointer-events: none;
  color: transparent !important;
`;

export const StyledProgress = styled(
  isIOS() ? IosSpinner : CircularProgress
).withConfig({
  shouldForwardProp: (prop) => !['loading', 'buttonType'].includes(prop),
})<Pick<ButtonProps, 'buttonType'>>`
  position: absolute;
  color: ${({ buttonType }) => {
    switch (buttonType) {
      case 'secondary':
        return globalColors.green;
      case 'primary':
        return globalColors.white;
      default:
        return globalColors.white;
    }
  }};
`;

export const StyledButton = styled(MuiButton).withConfig({
  shouldForwardProp: (prop) => !['loading', 'buttonType'].includes(prop),
})<ButtonProps>`
  width: max-content;
  && {
    position: relative;
    line-height: 1.25;
    border-radius: 0.25em;
    outline: none;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    text-align: center;
    text-transform: unset;
    font-weight: 500;
    font-size: 1em;
    padding: 0.5em 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => colors[props.buttonType ?? 'primary']};
    ${(props) => (props.loading ? loadingStyles : '')}
    ${(props) => (props.disabled && !props.loading ? colors.disabled : '')}
    img {
      width: 14px;
      height: 14px;
      margin-right: 11px;
    }
    @media (max-width: ${sizes.breakpoints.sm}) {
      font-size: 14px;
      width: 100%;
      img {
        width: 14px;
        height: 14px;
        margin-right: 8px;
      }
    }
  }
`;
