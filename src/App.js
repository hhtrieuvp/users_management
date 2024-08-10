import React from 'react';
import "./App.css";
import {Button, DatePicker } from 'antd';
import 'antd/dist/reset.css';
import MyTable from "./MyTable";
import {List} from "./List";

const App = () => {
  return (
    <div style={{ padding: 24}}>
      <h1>Chào mừng đến với Ant Design</h1>
      <Button type="primary">Nút Antd</Button>
      <DatePicker />
      {/* <List /> */}
      <h1>My Ant Design Table</h1>
      <MyTable />
    </div>
  );
};
export default App;
