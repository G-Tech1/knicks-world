import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../images/knicks.png';

const { Title, Text } = Typography;

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          style={{ maxHeight: '100px', maxWidth: '100px' }}
          src={icon}
          alt="knicks-logo"
        />
        <Title level={2}>
          <Link to="/">Knicks World</Link>
        </Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<MenuOutlined />}>
          <Link to="/schedule">Schedule</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/players">Players</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
