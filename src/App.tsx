// Add imports in the top
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { User, UserContext } from './context/userCtx';
import { useEffect, useState } from 'react';

export default function App() {
  const [user, setUser] = useState<User>({ isLogged: false });

  useEffect(() => {
    setTimeout(
      () => setUser({ isLogged: true, name: 'laboratori', email: 'labo@c.com' }),
      2500
    );
  }, []);

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/video" element={<Layout />}>
            <Route path="{id}" element={<Profile />} />
            <Route path="*" element={<>Error video page</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
