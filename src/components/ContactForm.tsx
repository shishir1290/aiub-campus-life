import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.status === 200) {
      setStatus('Email sent successfully');
      setFormData({ name: '', id: '', email: '', message: '' });
    } else {
      setStatus('Error sending email');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="pt-20 h-screen">
        <div className="text-2xl text-blue-600 ml-96 mb-4 underline">
          <p className="p-4">Contact Us</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-slate-200 p-4 rounded-lg shadow-lg w-96">
            <p className="mt-2 text-center text-sky-600 font-bold pb-4">
              Contact Form
            </p>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-2 rounded-lg"
              />
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="ID"
                className="p-2 rounded-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 rounded-lg"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="p-2 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg"
              >
                Submit
              </button>
            </form>
            {status && (
              <p className="mt-4 text-center text-red-500 font-bold">{status}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
