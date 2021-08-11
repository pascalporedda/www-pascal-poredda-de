const siteConfig = require('./site.config');
const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
module.exports = {
  siteUrl: isDev ? 'http://localhost:3000' : `https://${siteConfig.domain}`,
  generateRobotsTxt: true,
};
