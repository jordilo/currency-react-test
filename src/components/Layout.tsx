import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container fixed maxWidth="sm" disableGutters style={{ padding: '10px' }}>
        <Outlet />
      </Container>
    </>
  );
};
