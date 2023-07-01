import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/modules/footer';
import Header from './components/modules/header';
import City from './components/pages/City';
import Main from './components/pages/Main';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

const ApplicationProviders = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                  <Header />
                    <Routes>
                        <Route path="" element={<Main />} />
                        <Route path={'/:city'} element={<City />} />
                    </Routes>
                  <Footer />
            </BrowserRouter>
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default ApplicationProviders;