/*
 * Please don't make your own config changes to this file!
 * Copy local.sample.js to local.js and make your changes there. Thanks.
 *
 * Load order:
 * - default.js
 * - {development|production|test}.js
 * - local.js
 */

module.exports = {
  port: 3001,
  db: {
    uri:
      'mongodb://' +
      (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') +
      '/trustroots',
    options: {
      auth: {
        authMechanism: '',
      },
      // user: '',
      // pass: ''
    },
    // Mongoose debug mode
    debug: false,
    // Autoindex indexes
    // Mongoose calls createIndex on each Model's index when staring the app
    autoIndex: false,
    // Check for MongoDB version compatibility on start
    checkCompatibility: false,
  },
  supportEmail: 'support@openHospitality.network',
  mailer: {
    from: 'hello@openHospitality.network',
    options: {
      // for pooled connection https://nodemailer.com/smtp/pooled/
      // pool: true,
      // port: 465,
      // secure: true, // use TLS
      host: 'smtp.eu.sparkpostmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'SMTP_Injection',
        pass: process.env.SPARKPOST_API_KEY,
      },
    },
  },
};
