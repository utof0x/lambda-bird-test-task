import React from 'react';
import styles from './TableRow.module.css';

const TableRow = (props) => {
  return (
    <div className={styles.row}>
      <div className={`${styles.rowItem} ${styles.rowRank}`}>{props.rank}</div>
      <div className={`${styles.rowItem} ${styles.rowName}`}>{props.name}</div>
      <div className={`${styles.rowItem} ${styles.rowHits}`}>
        {/* add custom targes depending on hit or miss */}
        {props.hits.map((hit, index) => {
          return (
            <div key={index} className={styles.hitsBackground}>
              {hit ? (
                <div className={styles.hitCircle}></div>
              ) : (
                <div className={styles.missCircle}></div>
              )}
            </div>
          );
        })}
      </div>
      <div className={`${styles.rowItem} ${styles.rowFireRate}`}>
        {props.fireRate}
      </div>
    </div>
  );
};

export default TableRow;
