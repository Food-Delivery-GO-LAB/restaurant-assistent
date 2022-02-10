/* eslint-disable no-nested-ternary */
import React, { useState, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { BoxProps } from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Label from '../typography/label';
import ErrorMessage from '../typography/error-message-input';
import InputWrapper from '../wrappers/input-wrapper';
import EyeIcon from '../icons/eye.icon';
import { colors, sizes } from '../../styles/variables';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  label?: string;
  startIcon?: React.ReactNode;
  ContainerProps?: BoxProps;
}

const errorStyle = css`
  border-color: ${colors.error};
`;

const EyeButton = styled(IconButton)`
  && {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 3px;
    color: ${(props) => props.theme.text.black};
  }
`;

const StartIconButton = styled(IconButton)`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  svg {
    width: 15px;
    height: 15px;
  }
`;

const hasStartIconStyles = css`
  padding-left: 40px;
`;

const StyledInput = styled.input<InputProps>`
  width: 100%;
  background-color: ${(props) => props.theme.bg.light};
  outline: none;
  border: 1px solid #dbdbdd;
  border-radius: 2px;
  font-size: 16px;
  line-height: 19px;
  padding: 0.75em 16px;
  color: ${(props) => props.theme.text.black};
  transition: border-color ease 0.25s, box-shadow ease 0.15s;
  &:focus,
  &:hover {
    border-color: ${colors.green};
  }
  &:placeholder-shown ~ span {
    display: none;
  }
  ${(props) => (props.startIcon ? hasStartIconStyles : '')}

  @media (max-width: ${sizes.breakpoints.sm}) {
    font-size: 14px;
  }
  ${(props) => (props.error ? errorStyle : '')}
`;
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [hidden, setHidden] = useState(true);
  return (
    <InputWrapper {...props.ContainerProps}>
      {props.label ? <Label>{props.label ?? ''}</Label> : null}
      <div style={{ position: 'relative' }}>
        <StartIconButton>{props.startIcon}</StartIconButton>
        <StyledInput
          placeholder=" "
          ref={ref}
          {...props}
          type={
            props.type !== 'password'
              ? props.type
              : hidden
              ? 'password'
              : 'text'
          }
        />
        {props.type === 'password' ? (
          <EyeButton role="button" as="span" onClick={() => setHidden(!hidden)}>
            <EyeIcon />
          </EyeButton>
        ) : (
          ''
        )}
      </div>

      {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
    </InputWrapper>
  );
});

export default Input;
