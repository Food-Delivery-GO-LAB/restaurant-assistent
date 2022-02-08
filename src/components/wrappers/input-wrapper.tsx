import styled from 'styled-components';
import Box, { BoxProps } from '@mui/material/Box';

const InputWrapper = styled(Box)<BoxProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  text-align: left;
`;

export default InputWrapper;
