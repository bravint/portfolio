import { useState } from 'react';

import '../styles/contact.css';

export const Contact = () => {
    const initialForm = {
        name: '',
        email: '',
        message: '',
    };

    const [form, setForm] = useState(initialForm);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setForm({ ...form, [id]: value });
    };

    const handleSubmit = () => {
        console.log(form);
        // setForm(initialForm);
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-form-container">
            <p className="contact-title">Get in <br />touch.</p>     
            <form className="contact-form">
                <div className="form-left">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email Address:</label>
                    <input
                        id="email"
                        type="text"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    
                </div>
                <div className="form-right">
                <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
            <p className="form-btn" onClick={handleSubmit}>Submit</p>
            </div>
        </section>
    );
};
