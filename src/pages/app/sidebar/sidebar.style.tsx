import styled from 'styled-components';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Button from '../../../components/buttons';
import { colors } from '../../../styles/variables';

export const OrdersNav = styled(Box)`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  margin-top: 1rem;
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

export const AdminName = styled(Box)`
  width: 100%;
  padding: 15px;
  color: ${colors.white};
  background-color: ${colors.primary};
`;

export const TopSection = styled(Box)(
  ({ theme }) => `
        display: flex;
        height: 10px;
        align-items: center;
        margin: 0 ${theme.spacing(2)} ${theme.spacing(2)};
        border-bottom: ${theme.sidebar.dividerBg} solid 1px;
`
);

export const StyledButton = styled(Button)`
  && {
    position: relative;
    color: ${colors.dark};
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

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  display: flex;
  &:hover {
    div {
      background-color: ${colors.primary_hover};
    }
  }
  &.active {
    box-shadow: inset 3px 0 0 0 ${colors.primary};
    button {
      color: ${colors.primary};
    }
    &:hover button {
      color: ${colors.primary_hover};
    }
  }
`;

export const StyledBadge = styled.div`
  position: absolute;
  right: 45px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.primary};
`;
