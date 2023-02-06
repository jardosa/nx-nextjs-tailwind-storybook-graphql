
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Welcome to nextjs-with-tailwind-storybook!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}

export default CustomApp;
