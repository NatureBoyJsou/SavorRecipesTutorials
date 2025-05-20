import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';  // Import axios for making the API request

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  // Fetch the latest commit from GitHub and set the Last Updated time
  useEffect(() => {
    const fetchLastUpdated = async () => {
      try {
        // Replace with your repository info
        const response = await axios.get('https://api.github.com/repos/natureboyjsou/SavorRecipesTutorials/commits');
        
        // Get the timestamp of the most recent commit
        const latestCommitDate = response.data[0].commit.author.date;
        
        // Set the timestamp in the state
        setLastUpdated(new Date(latestCommitDate).toLocaleString());
      } catch (error) {
        console.error('Error fetching GitHub commit data:', error);
      }
    };

    fetchLastUpdated();
  }, []);  // Empty array means it runs once after the initial render

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fawyvxv',     // 🔁 Replace with your EmailJS Service ID
      'template_48jffnk',    // 🔁 Replace with your Template ID
      form.current,
      'RMP7munKQgcKgynGS'    // 🔁 Replace with your EmailJS Public Key
    ).then(
      () => {
        setStatusMessage('✅ Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        setStatusMessage('❌ Failed to send message. Please try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <div
      className="full-width-box"
      style={{
        marginTop: "3rem",
        padding: "2rem",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderRadius: "12px",
        maxWidth: "600px",           
        width: "90%",                
        marginLeft: "auto",          
        marginRight: "auto"
      }}
    >
      <h2 style={{ color: "white", fontWeight: "100", fontFamily: "RubikDirt" }}>
        Have Feedback or Suggestions?
      </h2>
      <p style={{ color: "white", fontWeight: "100", fontSize: "1.2rem" }}>
        I'd love to hear from you!
      </p>

      <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          📧 Send Message
        </button>
      </form>

      {statusMessage && (
        <p style={{
          marginTop: "1rem",
          color: "#FFD700",
          fontFamily: "RubikDirt",
          fontWeight: "100",
          fontSize: "1rem"
        }}>
          {statusMessage}
        </p>
      )}

      {/* Last Updated Section below the Submit Button */}
      {lastUpdated && (
        <p style={{
          marginTop: "1.5rem", // Adjust this value to control the spacing
          fontSize: "3rem",
          color: "#ccc"
        }}>
          Website Last Updated:
          <br />
          <span style={{
            fontSize: "3rem", // Larger text for the date
            color: "#FFD700",
            fontFamily: "RubikDirt",
            fontWeight: "100"
          }}>
            {lastUpdated}
          </span>
        </p>
      )}
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  fontSize: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontFamily: "RubikDirt",
  fontWeight: "100"
};

const buttonStyle = {
  padding: "12px 24px",
  fontSize: "1rem",
  color: "#000",
  backgroundColor: "#FFD700",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontFamily: "RubikDirt",
  fontWeight: "100",
  marginTop: "1rem"
};

export default ContactForm;
