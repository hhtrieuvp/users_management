import React from 'react';
import "./App.css";
import 'antd/dist/reset.css';
import {List} from "./List";


const App = () => {
  return (
    <div style={{ padding: 24}}>
      
      Add User
      <List />
    </div>
  );
};
export default App;
