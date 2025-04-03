
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log("Form data submitted:", formData);
    
    // In a real application, this would be an API call to your backend
    // For demonstration, we'll simulate a successful submission
    
    // Simulate sending the email
    const emailSent = await sendConfirmationEmail(formData);
    return emailSent;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};

export const sendConfirmationEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // In a real application, this would call your email sending service API
    // For demonstration, we'll log the email content and simulate success
    
    const emailSubject = "Thank You for Reaching Out to MESO";
    
    const emailBody = `
Hi ${formData.firstName},

Thank you for your interest in MESO. We've received your message and our team will be in touch with you shortly.

In the meantime, feel free to explore more about our mission and vision at www.mesocap.com.

Best regards,
The MESO Team
info@mesocap.com
www.mesocap.com
    `;
    
    console.log("Email would be sent with:", {
      to: formData.email,
      subject: emailSubject,
      body: emailBody
    });
    
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
};
