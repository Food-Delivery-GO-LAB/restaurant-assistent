import styled from 'styled-components';
import Box from '@mui/material/Box';

export const Wrapper = styled(Box)`
  min-width: 450px;
  min-height: 200px;
  padding: 1em 2.5em;
  display: flex;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

export const StyledBox = styled(Box)`
  margin-top: 1.5em;
  padding: 5px;
  height: 70vh;
  overflow: auto;

  p:first-of-type {
    margin-bottom: 1em;
  }
`;
