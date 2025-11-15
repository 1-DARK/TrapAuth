import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    throw new Error(`Error sending verification email:${error}`);
  }
};

export const sendWelcomeEmail = async (name, email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "fb4395e7-c7e9-4fe7-9313-34ba7b046962",
    });
    console.log("Welcome Email sent successfully", response);
  } catch (error) {
    throw new Error(`Error sending welcome email:${error}`);
  }
};
