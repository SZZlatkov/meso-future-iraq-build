
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log("Form data submitted:", formData);
    
    // Send data to a real endpoint (you would replace this with your actual API endpoint)
    const response = await fetch("https://formsubmit.co/your-email@domain.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
        _subject: "New Contact Form Submission - MESO Capital"
      })
    });
    
    if (!response.ok) {
      throw new Error(`Form submission failed: ${response.status}`);
    }
    
    // Send confirmation email
    const emailSent = await sendConfirmationEmail(formData);
    return emailSent;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};

export const sendConfirmationEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // In a production environment, you would call your email API service here
    // This example uses EmailJS which is a simple email service for client-side apps
    
    const emailData = {
      service_id: "your_service_id", // Replace with your EmailJS service ID
      template_id: "your_template_id", // Replace with your EmailJS template ID
      user_id: "your_user_id", // Replace with your EmailJS user ID
      template_params: {
        to_name: formData.firstName,
        to_email: formData.email,
        message: `Thank you for your interest in MESO. We've received your message and our team will be in touch with you shortly.`,
        from_name: "MESO Capital"
      }
    };
    
    // For demonstration, log what would be sent
    console.log("Confirmation email would be sent with:", emailData);
    
    // In a real implementation, uncomment the following code and replace with your actual email service
    /*
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailData)
    });
    
    if (!response.ok) {
      throw new Error(`Email sending failed: ${response.status}`);
    }
    */
    
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return false;
  }
};

// Add this function to handle newsletter subscriptions
export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    console.log("Newsletter subscription for:", email);
    
    // In a real application, you would call your newsletter service API
    // For example, using MailChimp, ConvertKit, etc.
    
    // Example implementation with a generic form endpoint
    const response = await fetch("https://formsubmit.co/your-email@domain.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email,
        _subject: "New Newsletter Subscription - MESO Capital"
      })
    });
    
    if (!response.ok) {
      throw new Error(`Newsletter subscription failed: ${response.status}`);
    }
    
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true;
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return false;
  }
};
