
import { Footer } from '@/components/footer/footer';
import { NavBar } from '@/components/navbar/navbar';
import React from 'react';

type TemplateProps = {
  children: React.ReactNode;
};

export const PageTemplate =
  ({ children }: TemplateProps) => {
    return (
      <div className="template-container">
        <NavBar />
        <main className='flex flex-col gap-6'>{children}</main>
        <Footer />
      </div>
    );
  };
