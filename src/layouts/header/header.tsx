import React, { useContext } from 'react';
import { Box, Hidden, IconButton, Tooltip } from '@mui/material';
import MenuTwoTone from '@mui/icons-material/MenuTwoTone';
import CloseTwoTone from '@mui/icons-material/CloseTwoTone';
import { useMatch } from 'react-router-dom';
import { SidebarContext } from '../../context/sidebar-context';
import { HeaderWrapper, StyledLink, StyledTitle } from './header.style';
import Title from '../../components/typography/title';

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const match = useMatch('/menu');
  const headerTitle = match && match.params.orders?.split('_').join(' ');
  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <StyledLink to="/">
          <Hidden lgUp>Restaurant Assistant</Hidden>
        </StyledLink>
        {/* <Hidden mdDown>Header menu</Hidden> */}
        <StyledTitle>{headerTitle}</StyledTitle>
      </Box>
      <Box display="flex" alignItems="center">
        <Title size="sm" fontWeight="500">
          Hello, Manager
        </Title>
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
