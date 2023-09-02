import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Layout, Menu, MenuItemGroup} from 'antd';
import {IdcardOutlined, MailOutlined, ToolOutlined ,TeamOutlined} from '@ant-design/icons';
import Logo from '../assets/esasaLogo.png'
import SubMenu from 'antd/es/menu/SubMenu';
import "./headerStyle.css";
const {Header} = Layout;



export default function HeaderEsasa() {
    const [current, setCurrent] = useState('service');

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
                <a href='/quien_somos
                '>
                  <IdcardOutlined/>  Quienes Somos
                </a>
                </Menu.Item>
                
            <SubMenu selectedKeys={[current]} title={<span><ToolOutlined/>    Nuestros Servicios</span>} >
                <Menu.Item key="DisIngEle">Diseño e Ingenieria Electromecánica</Menu.Item>
                <Menu.Item key="InsENH">Construcción de Instalaciones
                 Eléctricas, Neumáticas e Hidráulicas</Menu.Item>
                <Menu.Item key="EnsaMaq">Ensamble de Máquinas</Menu.Item>
                <Menu.Item key="SubPote">Subestaciones de Potencia</Menu.Item>
                <Menu.Item key="TrataAgua">Sistemas de Tratamiento de Agua</Menu.Item>
                <Menu.Item key="LinSub">Líneas Subterráneas</Menu.Item>
                <Menu.Item key="ProcMaq">Procesos Internos de Maquiladora</Menu.Item>
                <Menu.Item key="ManteInd">Servicios de Mantenimiento Industrial</Menu.Item>
                <Menu.Item key="RigTP">Servicios de Rigging y Transferenciade Procesos</Menu.Item>
                <Menu.Item key="AhorroEner">Sistemas de Ahorro de Energía</Menu.Item>
                <Menu.Item key="InsSolar">Instalación de Paneles Solares</Menu.Item>
                <Menu.Item key="LlavMano">Proyectos Llave en Mano</Menu.Item>
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

