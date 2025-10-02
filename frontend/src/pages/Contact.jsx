import React, { useState, useRef } from 'react';
import WaveDivider from '../components/WaveDivider.jsx';
import client from '../api/client';

const initial = {
  name: '', email: '', mobile: '',
  company: '', subject: '', designation: '',
  requirement: ''
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState('');
  const alertRef = useRef(null);

  const validate = () => {
    const e = {};
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const digits = /^\d{7,15}$/;
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!emailRx.test(form.email)) e.email = 'Enter a valid email address.';
    if (!digits.test(form.mobile.replace(/\D/g,''))) e.mobile = 'Mobile must be 7–15 digits.';
    ['company','subject','designation','requirement'].forEach(k=>{
      if (!form[k].trim()) e[k] = 'This field is required.';
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      alertRef.current?.focus();
      return;
    }
    try {
      setBusy(true);
      setToast('');
      const payload = { ...form, mobile: form.mobile.replace(/\D/g,'') };
      const res = await client.post('/api/contact', payload);
      if (res.data?.success) {
        setForm(initial);
        setErrors({});
        setToast('Thank you—your request has been received.');
      } else {
        setToast('Unexpected response. Please try again.');
      }
    } catch (err) {
      setToast('There was an error submitting the form. Please try again.');
    } finally {
      setBusy(false);
      setTimeout(()=> setToast(''), 5000);
    }
  };

  return (
    <>
      <section className="section" aria-labelledby="contact-title">
        <div className="container">
          <h1 id="contact-title" className="section-title">Get a Quote</h1>
          <p className="section-sub">Tell us about your requirement and a surveyor will respond promptly.</p>

          <div className="twocol">
            <form className="card" onSubmit={onSubmit} noValidate id="form" aria-describedby="form-desc">
              <p id="form-desc" className="muted" style={{ marginTop: 0 }}>
                All fields are required. We respect your privacy and never share your details.
              </p>

              {Object.keys(errors).length > 0 && (
                <div
                  className="card"
                  style={{ background: '#fff5f5', borderColor: '#ffd9d9' }}
                  role="alert"
                  aria-live="assertive"
                  tabIndex={-1}
                  ref={alertRef}
                >
                  Please correct the errors highlighted below.
                </div>
              )}

              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={onChange} required />
                {errors.name && <div className="inline-error">{errors.name}</div>}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={onChange} required />
                {errors.email && <div className="inline-error">{errors.email}</div>}
              </div>

              <div className="field">
                <label htmlFor="mobile">Mobile No.</label>
                <input id="mobile" name="mobile" inputMode="numeric" value={form.mobile} onChange={onChange} required placeholder="Digits only" />
                {errors.mobile && <div className="inline-error">{errors.mobile}</div>}
              </div>

              <div className="field">
                <label htmlFor="company">Company Name</label>
                <input id="company" name="company" value={form.company} onChange={onChange} required />
                {errors.company && <div className="inline-error">{errors.company}</div>}
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" value={form.subject} onChange={onChange} required />
                {errors.subject && <div className="inline-error">{errors.subject}</div>}
              </div>

              <div className="field">
                <label htmlFor="designation">Designation</label>
                <input id="designation" name="designation" value={form.designation} onChange={onChange} required />
                {errors.designation && <div className="inline-error">{errors.designation}</div>}
              </div>

              <div className="field">
                <label htmlFor="requirement">Requirement / Description</label>
                <textarea id="requirement" name="requirement" rows="5" value={form.requirement} onChange={onChange} required />
                {errors.requirement && <div className="inline-error">{errors.requirement}</div>}
              </div>

              <button className="btn primary" type="submit" disabled={busy} aria-busy={busy}>
                {busy ? 'Sending…' : 'Submit Request'}
              </button>

              {toast && (
                <div
                  className="card"
                  role="status"
                  aria-live="polite"
                  style={{ marginTop: 12, background: '#f3fff6', borderColor: '#c8efdb' }}
                >
                  {toast}
                </div>
              )}
            </form>

            <aside>
              <div className="card">
                <h3 style={{ marginTop: 0 }}>Contact Details</h3>
                <p>
                  Applaud 38, Mukadam Compound, New Link Road<br />
                  Goregaon, Mumbai Maharashtra 400063, India
                </p>
                <p>
                  <a href="tel:+912233445566">+912235648539</a><br />
                  <a href="mailto:info@ssasmarine.com">info@ssasmarine.com</a>
                </p>
                <p className="muted" style={{ marginBottom: 0 }}>
                  By submitting this form, you consent to us contacting you regarding your enquiry.
                </p>
              </div>
              <div className="card" style={{ marginTop: 16 }}>
                <h4 style={{ marginTop: 0 }}>Map</h4>
                <img
                  src="/assets/ships/ship2.jpg"
                  alt="Map placeholder of office location"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', borderRadius: 10 }}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

    </>
  );
}
