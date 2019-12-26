const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

const path = require('path');

module.exports = withCSS(withSass({
    webpack: (config, options) => {
        config.resolve.alias['src'] = path.join(__dirname, 'src');
        return config;
    }
}));

