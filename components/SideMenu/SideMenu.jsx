import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Menu } from 'antd';
  import Link from 'next/link';
  
  function SideMenu() {
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          style={{ width: 256 }}
          defaultSelectedKeys={['/inventario']}
          
          items={[

            {
                label: <Link href="/Inventario">Inventario</Link>,
                icon: <ShopOutlined />,
                key: "/inventario",
              },
            {
              label: <Link href="/Dashboard">Dashboard</Link>,
              icon: <AppstoreOutlined />,
              key: "/Dashboard",
            },
           ,
            {
              label: <Link href="/orders">Orders</Link>,
              icon: <ShoppingCartOutlined />,
              key: "/orders",
            },
            {
              label: <Link href="/customers">Customers</Link>,
              icon: <UserOutlined />,
              key: "/customers",
            },
            {
              label: <Link href="/Ventas">Ventas</Link>,
              icon: <ShoppingCartOutlined />,
              key: "/sales",
            },
          ]}
        />
      </div>
    );
  }
  
  export default SideMenu;
  