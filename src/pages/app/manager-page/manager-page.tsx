import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import { MainContent, MainWrapper } from './manager-page.style';
import Footer from '../../../layouts/footer/footer';
import Header from '../../../layouts/header/header';

interface ManagerPageProps {
  children?: React.ReactNode;
}

const ManagerPage: React.FC<ManagerPageProps> = () => (
  <>
    <Sidebar />
    <Header />
    <MainWrapper>
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </MainWrapper>
  </>
);

export default ManagerPage;
