import Strapi from 'strapi-sdk-javascript';
import React from 'react';

export const API_URL = 'http://localhost:1337'; 

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const StrapiComponent = new Strapi(API_URL, {
  headers: {
    Authorization: API_TOKEN ? `Bearer ${API_TOKEN}` : undefined,
  },
});

export default StrapiComponent;
