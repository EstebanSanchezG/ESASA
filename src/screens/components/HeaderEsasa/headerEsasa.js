import React, { useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Layout, Menu, MenuItemGroup} from 'antd';
import {IdcardOutlined, MailOutlined, ToolOutlined ,TeamOutlined} from '@ant-design/icons';
import Logo from '../assets/esasaLogo.png'
import SubMenu from 'antd/es/menu/SubMenu';
import "./headerStyle.css";
import axios from 'axios';
import services from '../DescriptionPage/descripciones-de-servicios.json'
const {Header} = Layout;

export default function HeaderEsasa() {

    const [serviceData, setServices] = useState(services);

    return(
      <>
        <Header style={{display:"flex", backgroundColor:"white", backgroundSize:"cover", lineHeight:"0"}}>
          <Menu
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
                
            <SubMenu title={<span><ToolOutlined/>  Nuestros Servicios</span>} >
                {serviceData && 
                serviceData.map(({ title, id} ) => (
                    <Menu.Item>
                      <NavLink reloadDocument to = {`/servicios/${id}`}>{title}</NavLink>
                    </Menu.Item>
                ))
                }
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

