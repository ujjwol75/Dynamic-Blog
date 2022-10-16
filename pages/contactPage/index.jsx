import Head from 'next/head';
import React from 'react';
import { toast } from 'react-toastify';
import ContactComponent from '../../src/common/components/Contact';
import Layout from '../../src/common/components/Layout/Layout';
import APIS from '../../src/common/constants/EndPoints';
import usePostHook from '../../src/common/customHooks/usePostHook';
import { getApiData } from '../../src/common/helpers/AxiosInstance';
const ContactPage = (props) => {
  const { mutate: createMutate, data: responseData } = usePostHook({
    queryKey: 'contactDetails',
  });

  const handleContactFormSubmit = async (values) => {
    const { status } = responseData;
    const url = APIS.contactUs;
    const formData = {
      full_name: values.full_name,
      email: values.email,
      phone_number: values.phone_number,
      message: values.message,
    };
    try {
      await createMutate({ url, formData });
    } catch (e) {
      console.log(e);
    }

    if (status === 201 || status === undefined) {
      toast.success('Thanks for contacting us!');
    } else {
      toast.error('Sorry please try again!');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Inside Crypto-Contact</title>
        <meta property="og:title" content={" Inside Crypto -Contact"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" Inside Crypto -Contact"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <ContactComponent
        handleContactFormSubmit={handleContactFormSubmit}
        navigationListData={props?.navigation}
      />
    </Layout>
  );
};

export default ContactPage;


export async function getServerSideProps({ params }) {
  const navigationResponse = await getApiData(APIS.navigation)
  return {
    props: {
      navigation: navigationResponse?.data
    }
  }
}