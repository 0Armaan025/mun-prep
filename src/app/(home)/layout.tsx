import React from "react";
import Navbar from "../../components/navbar/Navbar.tsx"

interface Props {

  children: React.ReactNode;
};


const Layout = ({children}:children) => {

  return (
    <>
<Navbar/>
  {children}
</>
  );

} 


export default Layout;
