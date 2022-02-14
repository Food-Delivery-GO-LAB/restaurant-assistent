import React, { ReactNode } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import MuiSelect, {
  SelectChangeEvent,
  SelectProps,
} from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import { colors } from '../../styles/variables';
import InputWrapper from '../wrappers/input-wrapper';

const StyledLabel = styled(InputLabel)`
  && {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.green};
    margin-bottom: 8px;
    line-height: 17px;
    width: max-content;

    &.Mui-focused {
      color: ${colors.green};
    }
  }
`;

const StyledSelect = styled(MuiSelect)`
  && {
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

interface Props extends SelectProps {
  errorMsg?: string;
  label?: string;
  options: { value: string | number; name: string }[];
}

const Select: React.FC<Props> = ({
  errorMsg,
  label,
  value,
  required,
  onChange,
  options,
  ...otherProps
}) => (
  <StyledInputWrapper>
    <StyledLabel id="demo-customized-select-label">{label}</StyledLabel>
    <FormControl error={!!errorMsg} required={required} fullWidth>
      <StyledSelect
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        onChange={onChange}
        {...otherProps}
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
