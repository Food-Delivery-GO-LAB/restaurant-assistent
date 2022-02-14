import React, { ReactNode } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import { colors } from '../../styles/variables';
import InputWrapper from '../wrappers/input-wrapper';

const StyledLabel = styled(InputLabel)`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.green};

  &.Mui-focused {
    color: ${colors.green};
  }
`;

const StyledSelect = styled(MuiSelect)`
  color: ${(props) => props.theme.text.black};

  svg,
  path {
    color: ${(props) => props.theme.text.black};
  }

  .MuiInputBase-root {
    padding: 12px 16px;
  }

  .MuiPaper-root.MuiPaper-elevation {
    background-color: ${colors.white_lighter} !important;
    color: ${colors.dark};
  }
`;

const StyledInputWrapper = styled(InputWrapper)`
  .MuiOutlinedInput-root {
    border-radius: 2px;

    &:hover fieldset {
      border: 1px solid ${colors.green};
    }

    &.Mui-focused {
      fieldset {
        border: 1px solid ${colors.green};
      }
    }

    &.Mui-error fieldset {
      border: 1px solid ${colors.error};
    }
  }

  fieldset {
    background-color: ${(props) => props.theme.bg.light};
    border: 1px solid ${colors.grey_dark};
  }

  #demo-customized-select {
    padding: 12px 16px;
  }
`;

const StyledErrorText = styled(FormHelperText)`
  && {
    font-size: 12px;
    margin: 0;
    margin-top: 1px;
    margin-left: 8px;
    font-weight: 500;
  }
`;

interface Props {
  errorMsg?: string;
  label?: string;
  value: string;
  required?: boolean;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  options: { value: string; name: string }[];
}

const Select: React.FC<Props> = ({
  errorMsg,
  label,
  value,
  required,
  onChange,
  options,
}) => (
  <StyledInputWrapper>
    <FormControl error={!!errorMsg} required={required}>
      <StyledLabel variant="filled" id="demo-customized-select-label">
        {label}
      </StyledLabel>
      <StyledSelect
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        onChange={onChange}
        variant="outlined"
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </StyledSelect>
      <StyledErrorText>{errorMsg}</StyledErrorText>
    </FormControl>
  </StyledInputWrapper>
);

Select.defaultProps = {
  required: false,
  label: '',
};

export default Select;
