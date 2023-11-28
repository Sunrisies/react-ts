import React, { useState } from 'react'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Outlet,useNavigate } from 'react-router-dom'
import {RouterPath} from '../router/index'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}



const HomeLayout: React.FC = () => {
  const nav = useNavigate()
  const items: MenuItem[] = [
    getItem('网盘', RouterPath.NETDISK, <PieChartOutlined />),
    getItem('写作', RouterPath.WORKS, <DesktopOutlined />),
    getItem('关于', RouterPath.ABOUT, <UserOutlined />),
    getItem('登录', RouterPath.LOGIN, <UserOutlined />),
  ]
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const onMenuClick:MenuProps['onClick'] = (e) => {
    nav(e.key)
  }


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onMenuClick} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default HomeLayout
