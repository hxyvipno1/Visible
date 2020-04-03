import React , { useState } from 'react';
import styles from './index.less';
import { Layout } from 'antd';
import Nav from './Nav';
import Crumb from './Crumb';
import { ClickParam } from 'antd/lib/menu';
import { history, useLocation } from 'umi';
import logo from '../assets/logo.jpg';
import '../global.less';
const { Header, Content, Footer } = Layout;

const BasicLayout: React.FC = props => {
  const { pathname } = useLocation();
  const [activeKey,setActiveKey] = useState(pathname==='/'?'/vis-network':pathname);
  const getYear = ()=> new Date().getFullYear();
  const changeKeys = ({key}:ClickParam)=>{
    setActiveKey(key);
    history.push(key)
  }

  return (
    <Layout style={{height:'100%'}}>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className={styles.logo} >
        <img src={logo}/>
      </div>
      <Nav selectedKeys={[activeKey]} changeKeys={(item)=>{changeKeys(item)}}/>
    </Header>
    <Content className={styles["site-layout"]} style={{ padding: '0 50px', marginTop: 64 }}>
      <Crumb/>
      <div className={styles["site-layout-background"]} style={{ padding: 24, minHeight: 380 }}>
      {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Visible ©{getYear()} Created by Hu Xian Yang</Footer>
  </Layout>
  );
};

export default BasicLayout;
