import emailjs from "emailjs-com";

// Service and template IDs for admin and user emails
const SERVICE_ID = "service_le3gsdmv"; // Your service ID
const ADMIN_TEMPLATE_ID = "templsate_khgcmoe"; // Admin email template ID
const USER_TEMPLATE_ID = "temsdate_1fxcnew"; // Thank-you email template ID
const PUBLIC_KEY = "g6nJ18KZsdfZ1ErDTHk"; // Your public key

export const sendEmails = async ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => {
  try {
    // Sending email to admin
    const adminResponse = await emailjs.send(
      SERVICE_ID,
      ADMIN_TEMPLATE_ID,
      { firstName, lastName, email, phone, message },
      PUBLIC_KEY
    );
    console.log("Admin email sent successfully:", adminResponse);

    // Sending thank-you email to user
    const userResponse = await emailjs.send(
      SERVICE_ID,
      USER_TEMPLATE_ID,
      { email, firstName },
      PUBLIC_KEY
    );
    console.log("Thank-you email sent successfully:", userResponse);

    // Return success status
    return {
      success: true,
      message: "Emails sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send emails:", error);

    // Return error status
    return {
      success: false,
      message: `Failed to send emails: ${error.text}`,
    };
  }
};
