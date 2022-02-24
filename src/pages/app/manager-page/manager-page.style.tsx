import { Box } from '@mui/material';
import styled from 'styled-components';

export const MainWrapper = styled(Box)(
  ({ theme }) => `
          flex: 1 1 auto;
          display: flex;
          height: 100%;
          
          @media (min-width: ${theme.breakpoints.values.lg}px) {
              padding-left: ${theme.sidebar.width};
          }
  `
);

export const MainContent = styled(Box)(
  ({ theme }) => `
          margin-top: ${theme.header.height};
          flex: 1 1 auto;
          overflow: auto;
  `
);
