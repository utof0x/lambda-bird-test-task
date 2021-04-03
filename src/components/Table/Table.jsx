import React, { useState, useEffect } from 'react';
import styles from './Table.module.css';
import TableHeader from './TableHeader/TableHeader';
import TableRow from './TableRow/TableRow';

const Table = (props) => {
  const [members, setMembers] = useState(props.members);

  // after every props.members change set local state
  // (needs to change local state after sorting by name)
  useEffect(() => {
    setMembers(props.members);
  }, [props.members]);

  // sorts members by ranks
  const sortByRank = () => {
    setMembers([
      ...members.sort((first, second) => {
        return first.rank - second.rank;
      }),
    ]);
  };

  // sorts members by names
  const sortByName = () => {
    setMembers([
      ...members.sort((first, second) => {
        const firstValue = first.name.toLowerCase();
        const secondValue = second.name.toLowerCase();

        if (firstValue < secondValue) {
          return -1;
        } else if (firstValue > secondValue) {
          return 1;
        }

        return 0;
      }),
    ]);
  };

  // sorts members by hits
  const sortByHits = () => {
    setMembers([
      ...members.sort((first, second) => {
        return second.totalHits - first.totalHits;
      }),
    ]);
  };

  // sorts members by fire rates
  const sortByFireRate = () => {
    setMembers([
      ...members.sort((first, second) => {
        return first.fireRate - second.fireRate;
      }),
    ]);
  };

  // create all rows using members array
  const rows = members.map((member, index) => {
    return (
      <TableRow
        key={index}
        name={member.name}
        rank={member.rank}
        hits={member.hits}
        totalHits={member.totalHits}
        fireRate={member.fireRate}
      />
    );
  });

  return (
    <div className={styles.table}>
      <TableHeader
        sortByRank={sortByRank}
        sortByName={sortByName}
        sortByHits={sortByHits}
        sortByFireRate={sortByFireRate}
      />
      {rows}
    </div>
  );
};

export default Table;
