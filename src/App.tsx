// Add imports in the top
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";


export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<>Error page</>} />
      </Route>
    </Routes>
  </BrowserRouter>
    ;
}