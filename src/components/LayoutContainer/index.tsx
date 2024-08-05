'use client'


import React from 'react';
import UperHeader from './UperHeader';

// import { Container } from './styles';

interface LayoutProps {
  children: React.ReactNode
}

const LayoutContainer: React.FC<LayoutProps> = ({
  children
}) => {
  return (
    <>
      <header>
        <UperHeader />
      </header>
    </>
  );
}

export default LayoutContainer;