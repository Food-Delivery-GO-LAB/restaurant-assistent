import React from 'react';
import { ModalProps } from '@mui/material/Modal';
import { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import { CloseButton, StyledModal, StyledPaper } from './modal.style';

export interface Props extends ModalProps {
  disableCloseIcon?: boolean;
  PaperProps?: MuiPaperProps;
}

const CustomModal = ({
  children,
  className,
  disableCloseIcon,
  PaperProps,
  ...otherProps
}: Props) => (
  <StyledModal {...otherProps}>
    <Fade timeout={200} in={otherProps.open}>
      <StyledPaper {...PaperProps} className={className}>
        {!disableCloseIcon ? (
          <CloseButton
            onClick={(e) =>
              otherProps.onClose && otherProps.onClose(e, 'escapeKeyDown')
            }
          />
        ) : null}
        {children}
      </StyledPaper>
    </Fade>
  </StyledModal>
);

CustomModal.defaultProps = {
  disableCloseIcon: false,
};

export default CustomModal;
