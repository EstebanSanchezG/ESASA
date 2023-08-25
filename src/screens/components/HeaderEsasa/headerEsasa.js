import React, { useState } from 'react';
import {Layout, Menu, MenuItemGroup} from 'antd';
import {IdcardOutlined, MailOutlined, ToolOutlined ,TeamOutlined} from '@ant-design/icons';
import Logo from '../assets/esasaLogo.png'
import SubMenu from 'antd/es/menu/SubMenu';
const {Header} = Layout;

const items = [
    {
        label: 'Quienes Somos',
        key: 'Identidad',
        icon: <IdcardOutlined />,
      },
      {
        label: 'Contactanos',
        key: 'Contacto',
        icon: <MailOutlined />,
      },
      {
        label: 'Servicios',
        key: 'SubMenuServicios',
        icon: <ToolOutlined />,
        children: [
          {
            type: 'Grupo de Servicios 1',
            label: 'Item 1',
            children: [
              {
                label: 'Servicio 1',
                key: 'service:1',
              },
              {
                label: 'Servicio 2',
                key: 'service:2',
              },
            ],
          },
          {
            type: 'Grupo de Servicios 2',
            label: 'Item 2',
            children: [
              {
                label: 'Servicios 3',
                key: 'service:3',
              },
              {
                label: 'Servicios 4',
                key: 'service:4',
              },
            ],
          },
        ],
      },
      {
        label: (
          <a href="" target="" rel="noopener noreferrer">
            Solicita
          </a>
        ),
        icon: <TeamOutlined />,
        key: 'Tramita',
      },
];

export default function HeaderEsasa() {
    const [current, setCurrent] = useState('service');

    const onClick = (e) => {
      setCurrent(e.key);
    }

    return(
      <>
        <Header>
          <Menu 
              onClick={onClick} 
              selectedKeys={[current]} 
              mode='horizontal' 
              style={{lineHeight:"64px", fontSize:"14px"}}
              >
                <img className="logo-icon" src={Logo} alt="ESASA Logo" style={{width:"100px", height:"auto"}}/>
            <Menu.Item key="Identidad">
              <IdcardOutlined/>
              <span>Quienes Somos</span>
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

          </Menu>
        </Header>
      </>
    )
};

