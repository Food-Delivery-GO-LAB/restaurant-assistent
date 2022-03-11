import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import MuiSelect, { SelectProps } from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import { colors } from '../../styles/variables';
import InputWrapper from '../wrappers/input-wrapper';

export const StyledLabel = styled(InputLabel)`
  && {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.dark};
    margin-bottom: 8px;
    line-height: 17px;
    width: max-content;

    &.Mui-focused {
      color: ${colors.primary};
    }
  }
`;

export const StyledSelect = styled(MuiSelect)`
  && {
    color: ${(props) => props.theme.text.black};
    background-color: ${(props) => props.theme.bg.grey};

    svg,
    path {
      color: ${(props) => props.theme.text.black};
    }

    .MuiInputBase-root {
      padding: 12px 16px;
    }

    .MuiPaper-root.MuiPaper-elevation {
      color: ${colors.dark};
    }
  }
`;

export const StyledInputWrapper = styled(InputWrapper)`
  .MuiOutlinedInput-root {
    border-radius: 2px;

    fieldset {
      border: 1px solid ${colors.grey};
    }

    &:hover fieldset {
      border: 1px solid ${colors.primary};
    }

    &.Mui-focused {
      fieldset {
        border: 1px solid ${colors.primary};
      }
    }

    &.Mui-error fieldset {
      border: 1px solid ${colors.error};
    }
  }

  #demo-customized-select,
  #demo-multiple-checkbox {
    padding: 12px 16px;
  }
`;

export const StyledErrorText = styled(FormHelperText)`
  && {
    font-size: 12px;
    margin: 1px 0 0 8px;
    font-weight: 500;
  }
`;

interface Props extends SelectProps {
  errormsg?: string;
  label?: string;
  options: { value: string | number; name: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, Props>((props, ref) => (
  <StyledInputWrapper>
    <StyledLabel id="demo-customized-select-label">{props.label}</StyledLabel>
    <FormControl error={!!props.errormsg} required={props.required} fullWidth>
      <StyledSelect
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={props.value}
        onChange={props.onChange}
        ref={ref}
      >
        {props.options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </StyledSelect>
      <StyledErrorText>{props.errormsg}</StyledErrorText>
    </FormControl>
  </StyledInputWrapper>
));

Select.defaultProps = {
  required: false,
};

export default Select;
