import { useState } from 'react';
import styles from './Contact.module.css';
import { contactInfo } from '../data/siteData.js';

const icons = {
  Email: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 3h10c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1z"
        stroke="#F57C00"
        strokeWidth="1.3"
      />
      <path d="M2 4l6 5 6-5" stroke="#F57C00" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Whatsapp: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 2h2.2l1 2.5L5.5 5.7a8 8 0 004.8 4.8l1.2-1.2 2.5 1V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5A1.5 1.5 0 013.5 2z"
        stroke="#F57C00"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="#F57C00" strokeWidth="1.3" />
      <path d="M5 7v4M5 5v.5M8 11V8c0-1.1.9-2 2-2h.5" stroke="#F57C00" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Location: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 2a4 4 0 000 8c2.2 0 4-1.8 4-4S10.2 2 8 2z" stroke="#F57C00" strokeWidth="1.3" />
      <path d="M4 10.5C2.8 11.4 2 12.6 2 14h12c0-1.4-.8-2.6-2-3.5" stroke="#F57C00" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }, 4000);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.split} footer-split`}>
          <div className={`${styles.left} contact-left`}>
            <p className={styles.eyebrow}>Let's talk</p>
            <h2 className={styles.heading}>Get in touch!</h2>
            <p className={styles.subtext}>
              Looking for a production partner for animation, VR, Unreal Engine, or WebGL projects?
            </p>
            <div className={styles.infoList}>
              {contactInfo.map((info) => (
                <div key={info.label} className={styles.infoRow}>
                  <div className={styles.infoIcon}>{icons[info.label]}</div>
                  <div>
                    <div className={styles.infoLabel}>{info.label}</div>
                    <div className={styles.infoValue}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.right} contact-right`}>
            {submitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5 9-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successText}>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                  <label className={styles.label}>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className={styles.input}
                  />
                </div>
                <div>
                  <label className={styles.label}>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className={styles.input}
                    style={{ marginBottom: 12 }}
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="phone number"
                    required
                    className={styles.input}
                  />
                </div>
                <div>
                  <label className={styles.label}>Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className={styles.textarea}
                  />
                </div>
                <button type="submit" className={`${styles.submitButton} btn-orange`}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
