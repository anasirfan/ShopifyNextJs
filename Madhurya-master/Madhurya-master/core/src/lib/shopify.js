import { ApolloClient, InMemoryCache } from '@uy/client';

const client = new ApolloClient({
  uri: 'https://d15726.myshopify.com/api/2023-04/graphql.json',

  
  headers: {
    'X-Shopify-Storefront-Access-Token': '8503c260523c96f85c4d35d761097195',
  },
  cache: new InMemoryCache(),
});

export default client;
