// protectRoutes.js
const admin = require('./firebaseAdmin');  // Import Firebase Admin SDK

// Middleware function to check if the user is authenticated
const checkAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const admin = require('./firebaseAdmin'); // Import initialized Firebase Admin SDK

  console.log('Authorization Header:', authHeader);

  // Middleware to check if the user is authenticated
  const checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('No Bearer token or invalid authorization header');
      return res.status(401).json({ message: 'Authorization header missing or invalid' });
    }
  
    const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'
    console.log('Token received:', token);
  
    admin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        console.log('Decoded Token:', decodedToken);
        req.user = decodedToken; // Attach the decoded token to the request object
        next();
      })
      .catch((error) => {
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
      });
  };
  
  // Middleware to check if the user is an admin
  const checkAdmin = (req, res, next) => {
    if (req.user?.isAdmin) {
      next(); // User is an admin, proceed to the route handler
    } else {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  };
  
  module.exports = { checkAuth, checkAdmin };
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or invalid' });
  }

  const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'

  admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      req.user = decodedToken; // Attach the decoded token to the request object
      next();
    })
    .catch((error) => {
      console.error('Error verifying token:', error);
      res.status(401).json({ message: 'Invalid or expired token' });
    });
};



// Middleware function to check if the user is an admin
const checkAdmin = (req, res, next) => {
  if (req.user?.claims?.isAdmin || req.user?.isAdmin) {
    next();  // User is an admin, proceed to the route handler
  } else {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

module.exports = { checkAuth, checkAdmin };

