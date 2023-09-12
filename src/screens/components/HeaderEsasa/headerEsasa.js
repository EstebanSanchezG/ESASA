import React, { useState, setCurrent, current } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Layout, Menu, MenuItemGroup} from 'antd';
import {IdcardOutlined, MailOutlined, ToolOutlined ,TeamOutlined} from '@ant-design/icons';
import Logo from '../assets/esasaLogo.png'
import SubMenu from 'antd/es/menu/SubMenu';
import "./headerStyle.css";
import {ServiceList} from '../DescriptionPage/ServiceList';

const data = ServiceList

const {Header} = Layout;


function ServiceLinks(props) {
  const { name, id } = props
  return (
    <>
      <NavLink to={`/servicios/${id}`}>{name}</NavLink>
    </>
  )
}

function ServiceListing (){

  const submenutitle = data.map(({ title, desc, id}, i) => {
    return (
      <ServiceLinks
        id={i}
        key={id}
        name={title}
        desc={desc}
      />
    )
  })

  return (
    <>
      { submenutitle }
    </>
  )
}



export default function HeaderEsasa() {
    
    const onClick = (e) => {
      setCurrent(e.key);
    }

    return(
      <>
        <Header style={{display:"flex", backgroundColor:"white", backgroundSize:"cover", lineHeight:"0"}}>
          <Menu 
              onClick={onClick} 
              selectedKeys={[current]} 
              mode='horizontal' 
              style={{lineHeight:"70px", fontSize:"18px", color:"gray", display:"flex"}}
              >
            <Link to= '/'>
                <img className="logo-icon" src={Logo} 
                alt="ESASA Logo" style={{width:"100px", height:"auto"}}/>
            </Link>
              <Menu.Item key="Identidad">
                <a href='/quien_somos'>
                  <IdcardOutlined/>  Quienes Somos
                </a>
                </Menu.Item>
                
            <SubMenu selectedKeys={[current]} title={<span><ToolOutlined/>  Nuestros Servicios</span>} >
                <Menu.Item>
                  <ServiceListing key={0} />
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="Contacto">
              <a href = "/contacto">
                <MailOutlined/>
                <span>Contáctenos</span>
              </a>
            </Menu.Item>
            <Menu.Item key="Trabajo">
              <TeamOutlined/>
              <span>Oportunidades de Empleo</span>
            </Menu.Item>
          </Menu>
        </Header>
      </>
    )
};

