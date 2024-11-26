// components/Layout.tsx
import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
