import React, { useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Layout, Menu, Button, Drawer} from 'antd';
import {MenuOutlined, IdcardOutlined, MailOutlined, ToolOutlined ,TeamOutlined} from '@ant-design/icons';
import Logo from '../assets/esasaLogo.svg'
import SubMenu from 'antd/es/menu/SubMenu';
import "./headerStyle.css";
import services from '../DescriptionPage/descripciones-de-servicios.json'
const {Header, Sider} = Layout;

export default function HeaderEsasa() {

  const [serviceData, setServices] = useState(services);
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return(
    <>
      <Header className='header-environment'>
        <div className='top-menu-header-container'>
          <nav className='big-screen-menu'>
            <Link to= '/'>
                <img className="logo-icon" src={Logo} 
                alt="ESASA Logo" style={{width:"100px", height:"auto"}}/>
            </Link>
            <Menu mode='horizontal' className='top-menu-header'>
              <div className='menu-text-options'>
                <Menu.Item>
                  <Link to='/quien-somos'>
                    <IdcardOutlined/>  Quienes Somos
                  </Link>
                </Menu.Item>
                  
                <SubMenu title={<span><ToolOutlined/>  Nuestros Servicios</span>} >
                    {serviceData && serviceData.map(({ title, id} ) => (
                        <Menu.Item>
                          <NavLink reloadDocument to = {`/servicios/${id}`}  key={id}>{title}</NavLink>
                        </Menu.Item>
                    ))}
                </SubMenu>

                <Menu.Item>
                  <Link to = "/contacto">
                    <MailOutlined/>
                    <span>Contáctenos</span>
                  </Link>
                </Menu.Item>
              </div>

            </Menu>
          </nav>
        </div>

        <div className='small-screen-menu-container'>
          <nav className='navi-side-bar'>
            <Button className="menu-open-drawer-button" style={{background:"#348fde"}} type="primary" icon={<MenuOutlined />} onClick={showDrawer}/>
            <Drawer className="side-menu-header" title="Menú" 
            placement="left" onClose={onClose} open={open}> 
              <div className='side-menu-text-option'>  
                <p>
                  <Link to="/quien-somos">
                    <IdcardOutlined/>  Quienes Somos
                    </Link>
                </p>
                <p>
                  <a onClick={showChildrenDrawer}>
                    <ToolOutlined/>  Nuestros Servicios
                  </a>
                  <Drawer title="Nuestros Servicios" width={320} placement='left'
                  onClose={onChildrenDrawerClose} open={childrenDrawer}>
                    {serviceData && serviceData.map(({ title, id} ) => (
                        <p>
                          <Link>
                          <NavLink style={{color:"grey"}} key={id} reloadDocument to = {`/servicios/${id}`}>{title}</NavLink>
                          </Link>
                        </p>
                    ))}
                  </Drawer>
                </p>
                <p>
                  <Link to = "/contacto">
                    <MailOutlined/>
                    <span> Contáctenos</span>
                  </Link>
                  </p>
              </div>
            </Drawer>
            <Link to= '/'>
                <img className="logo-icon" src={Logo} 
                alt="ESASA Logo" style={{width:"100px", height:"auto"}}/>
            </Link>
          </nav>
        </div>

      </Header>
    </>
  )
};

