import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/variables';

export const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        // color: #101010;
        font-weight: bold;
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 5;
        background-color: ${theme.header.background};
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);

export const StyledTitle = styled('h3')(
  () => `
    text-transform: capitalize;
    `
);

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  &:hover {
    color: ${colors.primary_hover};
  }
`;
