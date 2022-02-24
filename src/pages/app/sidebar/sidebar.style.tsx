import styled from 'styled-components';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '../../../components/buttons';
import { colors } from '../../../styles/variables';

export const SidebarHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 2rem 2rem;
  border-bottom: 1px solid lightgrey;
`;

export const LogoSection = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  min-height: 10%;
  color: ${colors.green};
`;

export const CourierName = styled(Box)`
  display: inline-flex;
  width: fit-content;
  flex-basis: auto;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: ${colors.white};
  background-color: ${colors.grey_light};
`;

export const OrdersNav = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  margin-top: 2rem;
`;

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    padding: 1rem 0;
    border: none;
    border-radius: 0;
    &:hover {
      border: none;
      color: ${colors.primary};
    }
  }
`;

export const NavButton = styled(NavLink)`
  width: 100%;
`;

export const LogoutStyle = styled(Button)`
  && {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            position: fixed;
            z-index: 10;
        }
`
);

export const TopSection = styled(Box)(
  ({ theme }) => `
        display: flex;
        height: 10px;
        align-items: center;
        margin: 0 ${theme.spacing(2)} ${theme.spacing(2)};
        border-bottom: ${theme.sidebar.dividerBg} solid 1px;
        
`
);

export const StyledNavLink = styled(NavLink)`
  &.active {
    box-shadow: inset 3px 0 0 0 ${colors.primary};

    button {
      color: ${colors.primary};
    }
  }
`;
