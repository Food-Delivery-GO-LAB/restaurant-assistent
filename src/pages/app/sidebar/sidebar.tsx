import React, { useContext } from 'react';
import { Drawer, Hidden } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { SidebarContext } from '../../../context/sidebar-context';
import {
  AdminName,
  LogoutStyle,
  OrdersNav,
  SidebarWrapper,
  StyledBadge,
  StyledButton,
  StyledNavLink,
  TopSection,
} from './sidebar.style';
import LogoutIcon from '../../../components/icons/log-out.icon';

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
  </OrdersNav>
);

const Logout = () => (
  <NavLink to="/">
    <LogoutStyle buttonType="primary" startIcon={<LogoutIcon />}>
      Log out
    </LogoutStyle>
  </NavLink>
);

const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();

  return (
    <>
      <Hidden lgDown>
        <SidebarWrapper>
          <AdminName>Restaurant Assistant</AdminName>
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
