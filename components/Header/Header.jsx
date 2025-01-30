"use client";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { useState } from "react";

function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const orders = [
    { title: 'Order 1' },
    { title: 'Order 2' },
    { title: 'Order 3' },
  ];

  const comments = [
    { title: 'Comment 1' },
    { title: 'Comment 2' },
    { title: 'Comment 3' },
  ];

  return (
    <div className="AppHeader">
     
      <Typography.Title>Inventario</Typography.Title>
      <Space>
        
        
      </Space>
      <Drawer
        title="Comments"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <List
          dataSource={comments}
          renderItem={item => <List.Item>{item.title}</List.Item>}
        />
      </Drawer>
    </div>
  );
}

export default Header;