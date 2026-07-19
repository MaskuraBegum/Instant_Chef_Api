const admin = require('firebase-admin');
const path = require('path');

let serviceAccount;

if (process.env.NODE_ENV === 'production') {
  serviceAccount = require('/etc/secrets/service-account-key.json');
} else {
  serviceAccount = require(path.join(__dirname, '..', 'config', 'service-account-key.json'));
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;