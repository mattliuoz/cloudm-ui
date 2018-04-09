import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import './App.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;

class App extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <div className="logo" />
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Icon type="home" />Home
        </Menu.Item>
            <Menu.Item key="services" disabled>
              <Icon type="appstore" />Services
        </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Settings</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="contact">
              <Icon type="mail" />
              Contact Us
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <p>fafda</p>
            <p>fafda</p>
            <p>fafda</p><p>fafda</p><p>fafda</p>
            <p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p>
            <p>fafda</p><p>fafda</p><p>fafda</p>
            <p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p>
            <p>fafda</p><p>fafda</p><p>fafda</p>
            <p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p><p>fafda</p>
            <p>fafda</p><p>fafda</p><p>fafda</p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
    </Footer>
      </Layout>
    );
  }
}

export default App;
