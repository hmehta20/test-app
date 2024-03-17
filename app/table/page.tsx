import React from 'react';
import styles from "../table/page.module.css";
import Link from "next/link";

const Table: React.FC = () => {
  return (
    <div className={styles.container}>
      {[...Array(12)].map((_, index) => (
        <div key={index} className={styles.cell}>
          Box {index + 1}
          <div className={styles.tooltip}>Tooltip {index + 1}</div>
        </div>
      ))}
      <Link href="/">
        <div>Back to Home</div>
      </Link>
    </div>
  );
};

export default Table;
