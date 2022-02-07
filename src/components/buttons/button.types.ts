import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MuiButtonProps {
  buttonType?: 'primary' | 'secondary' | 'text' | 'error' | 'disabled';
  loading?: boolean;
  disabled?: boolean;
}
