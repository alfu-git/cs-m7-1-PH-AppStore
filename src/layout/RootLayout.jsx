import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default RootLayout;