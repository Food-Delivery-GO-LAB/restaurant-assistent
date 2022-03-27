import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import deliveryLogo from '../../components/icons/delivery.svg';
import SignIn from './sign-in';
import { colors } from '../../styles/variables';

const RootStyle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.white_lighter,
  height: '70vh',
});

const SectionStyle = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')({
  maxWidth: 480,
  minWidth: 330,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export type FormType = 'login' | 'passRestore';
const Auth = () => (
  <>
    <Typography
      variant="h3"
      sx={{ px: 5, m: 5, display: { xs: 'none', md: 'block' } }}
    >
      Welcome back, Manager
    </Typography>
    <RootStyle>
      <SectionStyle sx={{ display: { xs: 'none', md: 'block' } }}>
        <img src={deliveryLogo} width="100%" alt="login" />
      </SectionStyle>
      <Container sx={{ margin: 3 }} maxWidth="xs">
        <ContentStyle>
          <SignIn userRole="Restaurant Manager" />
        </ContentStyle>
      </Container>
    </RootStyle>
  </>
);
export default Auth;
