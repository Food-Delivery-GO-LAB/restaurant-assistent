import React, { useContext } from 'react';

import { Drawer, Hidden } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../../../context/sidebar-context';
import {
  LogoutStyle,
  OrdersNav,
  SidebarWrapper,
  StyledBadge,
  StyledButton,
  StyledNavLink,
  TopSection,
} from './sidebar.style';

const NavBar = () => (
  <OrdersNav>
    <StyledNavLink to="/active-orders">
      <StyledButton buttonType="text">
        Active orders
        <StyledBadge />
      </StyledButton>
    </StyledNavLink>
    <StyledNavLink to="/menu">
      <StyledButton buttonType="text">Menu</StyledButton>
    </StyledNavLink>
    <StyledNavLink to="/history">
      <StyledButton buttonType="text">Order History</StyledButton>
    </StyledNavLink>
  </OrdersNav>
);

const Logout = () => (
  <NavLink to="/">
    <LogoutStyle buttonType="primary">Log out</LogoutStyle>
  </NavLink>
);

const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <NavBar />
          <Logout />
        </SidebarWrapper>
      </Hidden>

      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggle}
          onClose={closeSidebar}
          variant="temporary"
          elevation={9}
        >
          <SidebarWrapper>
            <TopSection>Logo-rithm</TopSection>
          </SidebarWrapper>
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
