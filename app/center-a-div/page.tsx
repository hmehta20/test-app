import React from 'react';
import styles from "../page.module.css";
import Link from "next/link";

const CenterADivPage: React.FC = () => {
  return (
    <div className={styles.centerContainer}>
      <h1>Center This</h1>
      <Link href="/">
        <div>Back to Home</div>
      </Link>
    </div>
  );
};

export default CenterADivPage;
