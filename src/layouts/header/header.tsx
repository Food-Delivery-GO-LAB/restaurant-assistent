import React, { useContext } from 'react';
import { Box, Hidden, IconButton, Tooltip } from '@mui/material';
import MenuTwoTone from '@mui/icons-material/MenuTwoTone';
import CloseTwoTone from '@mui/icons-material/CloseTwoTone';
import { useMatch } from 'react-router-dom';
import { SidebarContext } from '../../context/sidebar-context';
import { HeaderWrapper, StyledTitle } from './header.style';

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const match = useMatch('/courier/:orders');
  const headerTitle = match && match.params.orders?.split('_').join(' ');
  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <Hidden lgUp>Logo here</Hidden>
        {/* <Hidden mdDown>Header menu</Hidden> */}
        <StyledTitle>{headerTitle}</StyledTitle>
      </Box>
      <Box display="flex" alignItems="center">
        Hello, User
        <Hidden lgUp>
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoTone /> : <CloseTwoTone />}
            </IconButton>
          </Tooltip>
        </Hidden>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
