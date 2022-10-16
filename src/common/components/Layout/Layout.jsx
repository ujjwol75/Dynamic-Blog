import React from 'react';
import Header from '../Header/Header';
import ResposiveNabar from '../Nabbar/MobileNavBar/ResposiveNabar';
import Nabar from '../Nabbar/Nabar';
import MobileNabBar from '../Nabbar/MobileNavBar';
import Footer from '../Footer/Footer';
import useGetHook from '../../customHooks/useGetHook';
import APIS from '../../constants/EndPoints';
import Head from 'next/head';

const Layout = ({ children }) => {
  const { isLoading, data: navigationListData } = useGetHook({
    queryKey: 'navigationListData',
    url: APIS.navigation,
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <Nabar navigationListData={navigationListData} />
      <ResposiveNabar navigationListData={navigationListData} />
      <MobileNabBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
