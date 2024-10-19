
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
        <main>{children}</main>
        <footer>
          <p>My Website Footer</p>
        </footer>
      </div>
    );
  };
