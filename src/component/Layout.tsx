import React from 'react';
import Navbar from '../navBar';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
