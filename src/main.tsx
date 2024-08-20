import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
<<<<<<< HEAD
import Registration from './component/signUp.tsx';
import LostPassword from './component/lostPassword.tsx';
import Layout from './component/Layout.tsx';
// import Dashboard from './components/dashboard.tsx';
import Login from './component/loginTest.tsx';
=======
import Registration from './components/signUp.tsx';
import LostPassword from './components/lostPassword.tsx';
import Layout from './components/Layout.tsx';
// import Dashboard from './components/dashboard.tsx';
import Login from './components/loginTest.tsx';
>>>>>>> origin/main

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/password" element={<LostPassword />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
)
