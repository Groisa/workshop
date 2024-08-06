'use client'

import { Montserrat } from 'next/font/google'
import React, { Suspense, useEffect, useState } from 'react';
import UperHeader from './UperHeader';

// import { Container } from './styles';

interface LayoutProps {
  children: React.ReactNode
}
const inter = Montserrat({ subsets: ['latin'] })
const LayoutContainer: React.FC<LayoutProps> = ({
  children
}) => {
  const [init, setInit] = useState<boolean>(false);


  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    })
  }, [])
  return (
    <Suspense>
      <UperHeader />
      <main className={inter.className}>
        {
          init &&
          children
        }
      </main>
    </Suspense>
  );
}

export default LayoutContainer;