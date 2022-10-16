/** @type {import('next').NextConfig} */


const withPlugins = require('next-compose-plugins');

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
};
