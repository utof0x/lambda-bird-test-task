import React, { useState } from 'react';
import styles from './App.module.css';
import Table from './components/Table/Table';
import magnifyingGlassIcon from './assets/icons/magnifying-glass.png';

function App() {
  // create base data
  const oldMembers = generateData();
  // create data to send it to local storage after sorting by name
  const [members, setMembers] = useState(oldMembers);
  const nameInput = React.createRef();

  // returns array of object that sorted by name using input
  const sortByNames = (members, input) => {
    return members.filter((member) => {
      return member.name.toLowerCase().includes(input.toLowerCase())
        ? member
        : null;
    });
  };

  return (
    <div className={styles.app}>
      <div className={styles.appHead}>
        <div className={styles.appTitle}>BIATHLON RESULTS TABLE</div>
        <div className={styles.appNameSort}>
          <input
            className={styles.searchInput}
            placeholder="Search by name"
            ref={nameInput}
            onInput={(e) => {
              setMembers(sortByNames(oldMembers, e.target.value));
            }}
          />
          <img
            className={styles.magnifyingGlassIcon}
            alt="sort"
            src={magnifyingGlassIcon}
            onClick={() => {
              nameInput.current.focus();
            }}
          />
        </div>
      </div>
      <Table members={members} />
    </div>
  );
}

// returns array of objects with keys
// 'name', 'rank', 'hits', 'totalHits', 'fireRate'
const generateData = () => {
  const names = [
    'Johannes Dale',
    'Sebastian Samuelsson',
    'Emilien Jacquelin',
    'Martin Ponsiluoma',
    'Simon Desthieux',
    'Jakov Fak',
    'Arnd Peiffer',
    'Benedikt Doll',
    'Simon Eder',
    'Erik Lesser',
    'Claude Fabien',
    'Erik Less',
  ];

  return names.map((name, index) => {
    const hits = generateHits();

    return {
      name: name,
      rank: index + 1,
      hits: hits,
      totalHits: hits.filter((hit) => hit === 1).length,
      fireRate: getNumberInRange(23, 42),
    };
  });
};

// return random float number with 2 decimal places in range from 'start' to 'end'
// if decimal part equal 0 deletes it
const getNumberInRange = (start, end) => {
  const number = (Math.random() * (start - end) + end).toFixed(1);

  return number.toString().split('.')[1] === '0'
    ? number.replace('.0', '')
    : number;
};

// returns array of objects with length 5
// each element is 1 or 0 (it turns out randomly)
const generateHits = () => {
  const arr = new Array(5);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random());
  }

  return arr;
};

export default App;
