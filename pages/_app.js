import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SSRProvider } from 'react-bootstrap';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
        <ToastContainer autoClose={1500} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp
