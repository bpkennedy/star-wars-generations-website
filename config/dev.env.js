'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  COSMIC_BUCKET: `"${process.env.COSMIC_BUCKET || 'star-wars-generations-website'}"`,
  COSMIC_READ_KEY: `"${process.env.COSMIC_READ_KEY}"`,
  COSMIC_WRITE_KEY: `"${process.env.COSMIC_WRITE_KEY}"`,
  BLOG_TITLE: `"${process.env.BLOG_TITLE || 'Star Wars Generations'}"`,
})
