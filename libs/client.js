// libs/client.js
// TODO SDKをTS化する
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN_NAME,
  apiKey: process.env.MICROCMS_API_KEY,
});