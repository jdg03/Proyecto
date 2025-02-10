"use client";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import { signOutAction } from '@/supabase/actions';
import "./sideMenu.css";

function SideMenu() {
  const handleSignOut = async () => {
    //await signOutAction();
  };

  const menuItems = [
    {
      label: <Link href="/inicio/inventario">Inventario</Link>,
      icon: <ShopOutlined />,
      key: "/inventario",
    },
    {
      label: <Link href="/inicio/Dashboard">Dashboard</Link>,
      icon: <AppstoreOutlined />,
      key: "/Dashboard",
    },
    {
      label: <Link href="/inicio/Ventas">Ventas</Link>,
      icon: <ShoppingCartOutlined />,
      key: "/Ventas",
    },
    {
      label: <Link href="/inicio/Clientes">Clientes</Link>,
      icon: <UserOutlined />,
      key: "/Clientes",
    },
    {
      label: <Link href="/inicio/Ventas">Ventas</Link>,
      icon: <ShoppingCartOutlined />,
      key: "/sales",
    },
    {

    },
    {
      label: <span  onClick={handleSignOut}>Cerrar Sesión</span>,
      icon: <LogoutOutlined />,
      key: "/logout",
      className: "logoutItem", // Agregar clase para estilizar
    },
  ];

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        style={{ 
          width: 256,
          height: '100%', // Asegurar que el menú ocupe toda la altura
          display: 'flex',
          flexDirection: 'column',
          
        }}
        defaultSelectedKeys={['/inventario']}
        items={menuItems}
      />
    </div>
  );
}

export default SideMenu;