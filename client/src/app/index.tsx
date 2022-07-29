/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage/Loadable';
import { ProductListPage } from './pages/ProductListPage/Loadable';
import { ProductPage } from './pages/ProductPage/Loadable';
import { PublishPage } from './pages/PublishPage/Loadable'
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { UserProvider } from './context/User'

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publish" element={<PublishPage />} />
          <Route path="/c/:category" element={<ProductListPage />} />
          <Route path=":id" element={<ProductPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </UserProvider>
      <GlobalStyle />

    </BrowserRouter>
  );
}
