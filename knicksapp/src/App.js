import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Navbar } from './components';
import './App.css';
const { Title, Text } = Typography;

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
