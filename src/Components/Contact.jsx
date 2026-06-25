import React, { useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    alert("Urakoze kuduha ubutumwa! Turakubaza mukanya.");
    e.target.reset();
  };

  return (
    <div className="contact-page-container">
      <div className="contact-main-content">
        
        {/* REFU RW'IBUMOSO: AMALURU YO KUGUSHAKAHI */}
        <div className="contact-info-section">
          <h1 className="me">CONTACT ME</h1>
          <h2 className="my-status">Let's Work Together</h2>
          <p className="hero-description">
            Feel free to reach out if you want to collaborate on a project, 
            have questions, or just want to connect!
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">imanirumvapacifique39@gmail.com</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">07886421456</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">WhatsApp:</span>
              <span className="detail-value">07834287653</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">GitHub:</span>
              <span className="detail-value">PACIFIQUE_VIBUCODER</span>
            </div>
          </div>
        </div>

        {/* RUHANDE RW'IBURYO: FORM YA START CONVERSATION */}
        <div className="contact-form-section">
          <div className="contact-form-card">
            <h2 className="tell-about" style={{ marginLeft: '0', textAlign: 'center', marginBottom: '3vh' }}>
              Start Conversation
            </h2>
            <form ref={form} onSubmit={handleSubmit} className="actual-form">
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Your Name" required className="contact-input" />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Your Email" required className="contact-input" />
              </div>
              <div className="form-group">
                <input type="tel" name="user_phone" placeholder="Your Phone Number" required className="contact-input" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message..." required rows="5" className="contact-input contact-textarea"></textarea>
              </div>
              <button type="submit" className="mycv-btn" style={{ width: '100%', marginTop: '2vh', fontSize: '2.5vh', height: '6vh' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* --- KAKA NYU (FOOTER) - SOCIAL MEDIA GUSA --- */}
      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-column" style={{ textAlign: 'center' }}>
            <h4>SOCIAL MEDIA</h4>
            <div className="social-links">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://wa.me/07834287653" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pacifique. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}