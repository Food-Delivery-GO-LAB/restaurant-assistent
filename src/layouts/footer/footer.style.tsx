import styled from 'styled-components';
import { Box } from '@mui/material';
import Button from '../../components/buttons';
import { colors } from '../../styles/variables';

export const StyledButton = styled(Button)`
  width: 2rem;
`;

export const FooterStyle = styled(Box)(
  ({ theme }) => `
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: right;
  padding: 1rem 3rem;
  box-shadow: -5px 0 3px grey;
  z-index: 5;
  opacity: 1;
  background-color: ${colors.white};
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    left: ${theme.sidebar.width};
    width: auto;
}
`
);

export const FdsContacts = styled(Box)`
  display: flex;
  justify-content: right;
`;
