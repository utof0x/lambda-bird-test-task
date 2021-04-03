import React, { useState } from 'react';
import styles from './TableHeader.module.css';
import sortIcon from '../../../assets/icons/sort.png';

const TableHeader = (props) => {
  const [sort, setSort] = useState('name');

  return (
    <div className={styles.header}>
      <div
        className={`${styles.headerItem} ${styles.headerRank}`}
        onClick={() => {
          props.sortByRank();
          setSort('rank');
        }}>
        Rank
        {/* add sort icon if sorted by ranks */}
        {sort === 'rank' ? (
          <img alt="sort" src={sortIcon} className={styles.sortIcon} />
        ) : null}
      </div>
      <div
        className={`${styles.headerItem} ${styles.headerName}`}
        onClick={() => {
          props.sortByName();
          setSort('name');
        }}>
        Name
        {/* add sort icon if sorted by names */}
        {sort === 'name' ? (
          <img alt="sort" src={sortIcon} className={styles.sortIcon} />
        ) : null}
      </div>
      <div
        className={`${styles.headerItem} ${styles.headerHits}`}
        onClick={() => {
          props.sortByHits();
          setSort('hits');
        }}>
        Hits
        {/* add sort icon if sorted by hits */}
        {sort === 'hits' ? (
          <img alt="sort" src={sortIcon} className={styles.sortIcon} />
        ) : null}
      </div>
      <div
        className={`${styles.headerItem} ${styles.headerFireRate}`}
        onClick={() => {
          props.sortByFireRate();
          setSort('fireRate');
        }}>
        Fire Rate
        {/* add sort icon if sorted by fire rates */}
        {sort === 'fireRate' ? (
          <img alt="sort" src={sortIcon} className={styles.sortIcon} />
        ) : null}
      </div>
    </div>
  );
};

export default TableHeader;
