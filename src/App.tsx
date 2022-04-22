import React from 'react';
import styles from './App.module.css';
import {Header} from "./header/Header";
import {Home} from "./home/Home";

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
