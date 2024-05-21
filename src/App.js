import { RouterProvider } from 'react-router-dom';
import Rotas from "./Rotas";
import { PrimeReactProvider } from 'primereact/api';

export default function App({ Component, pageProps }) {
  return (
    <>
        <RouterProvider router={Rotas} />
    </>
  );
}