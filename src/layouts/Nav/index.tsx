import React from 'react';
import { Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import styles from './index.less';

const { SubMenu } = Menu;

interface NavProp {
    selectedKeys: string[];
    changeKeys: (item:ClickParam)=> void;
}

const Nav: React.FC<NavProp> = ({ selectedKeys,changeKeys }) => {
    return (
        <div className={styles.menuCont}>
            <Menu mode="horizontal" theme="dark" selectedKeys={selectedKeys} onClick={changeKeys}>
                <Menu.Item key="/vis-network">
                    vis-network
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            AntV
                        </span>
                    }
                >
                    <Menu.Item key="/antV/g6">G6</Menu.Item>
                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            animation
                        </span>
                    }
                >
                    <Menu.ItemGroup title="旋转">
                        <Menu.Item key="/animation/rollhorse">旋转木马</Menu.Item>
                        <Menu.Item key="rollball" disabled>旋转星球</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="特效">
                        <Menu.Item key="fadein" disabled>进去出来效果</Menu.Item>
                        <Menu.Item key="fadeout" disabled>显示消失效果</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="/bigtable">
                    大数据量表格
                </Menu.Item>
                <Menu.Item key="/d3" >
                        d3
                </Menu.Item>
                
            </Menu>
        </div>
    )
}

export default Nav