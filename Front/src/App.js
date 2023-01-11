import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from './views/home/home.jsx';
import LoginPage from 'views/loginPage/loginPage.jsx';
import ProfilePage from 'views/profilePage/profilePage.jsx';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme.js';

 
function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));


  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={isAuth ? <Home /> : <Navigate to='/' />} />
            <Route path='/profile/:userId' element={isAuth ? <ProfilePage /> : <Navigate to='/' />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
