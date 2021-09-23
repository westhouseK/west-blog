// libs/client.js
// TODO SDKをTS化する
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'westhouse',
  apiKey: process.env.MICROCMS_API_KEY,
});