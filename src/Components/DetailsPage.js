import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../Styles/DetailsPage.css';

function DetailsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  // useInView hook to detect scrolling into view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      ref={ref} 
      className="container"
      // initial={{ opacity: 0, y: 50 }}
      // animate={inView ? { opacity: 1, y: 0 } : {}} // Start animation when in view
      // transition={{ duration: 1, ease: 'easeOut' }}
    >
      {!submitted ? (
        <div className='inside-one'>
        <div className='form-container'>
          
        <motion.form
          id="subscribe"
          className="subscription-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Trigger on scroll
          transition={{ delay: 0.5, duration: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className="notify-btn">
            Subscribe
          </button>
        </motion.form>
        
        </div>
        </div>
      ) : (
        <motion.p
          className="thank-you-text"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}} // Trigger on scroll
          transition={{ duration: 1 }}
        >
          Thank you for subscribing! We'll keep you updated.
        </motion.p>
      )}
    </motion.div>
  );
}

export default DetailsPage;
