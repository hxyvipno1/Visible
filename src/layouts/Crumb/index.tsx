import React, {useState, useEffect} from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'umi';

export default function Crumb() {
    const {pathname} = useLocation();
    const crumbList = pathname.substr(1).split('/');
    
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {
                crumbList.map((name,i)=><Breadcrumb.Item key={i}>{name}</Breadcrumb.Item>)
            }
        </Breadcrumb>
    )
}
