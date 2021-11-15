import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';

export default function App() {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState).length === 0;

  console.log(isEmpty);

  return (
    <>
      {!isEmpty ? (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={Home} />
              <Route path="/checkout" element={Checkout} />
              <Route element={NotFound} />
            </Routes>
          </Layout>
        </BrowserRouter>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
