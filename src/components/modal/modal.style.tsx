import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CancelIcon from '../icons/cancel.icon';
import { colors } from '../../styles/variables';

export const StyledPaper = styled(Paper)`
  padding: 6px 0;
  position: relative;
  background-color: ${(props) => props.theme.bg.main};
  &:focus {
    outline: none;
  }
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const CloseButton = styled((props: IconButtonProps) => (
  <IconButton {...props}>
    <CancelIcon size={22} />
  </IconButton>
))`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${colors.white_lighter};
  padding: 7px;
  border-radius: 8px;
  z-index: 2;
`;
