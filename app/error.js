
"use client";
import { Button } from 'antd';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '72px' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, pero la página que buscas no existe.</p>
      <Link href="/">
        <Button type="primary">Volver a la página principal</Button>
      </Link>
    </div>
  );
};

export default Custom404;
