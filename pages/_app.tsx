import { SessionProvider } from 'next-auth/react';
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      {/* <SessionProvider session={pageProps.session} basePath="http://localhost:3000/api/auth"> */}
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
