const admin = require('./firebaseAdmin');

// Function to set admin claim
const setAdminClaim = async (email) => {
  try {
    // Get user by email
    const user = await admin.auth().getUserByEmail(email);

    // Assign the isAdmin custom claim
    await admin.auth().setCustomUserClaims(user.uid, { isAdmin: true });

    console.log(`Admin claim set for user: ${email}`);
  } catch (error) {
    console.error('Error setting admin claim:', error);
  }
};

// Replace with the email of the admin
setAdminClaim('admin.chef15@gmail.com');
