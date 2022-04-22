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
    };

    return (
        <section className="contact">
            <p>Get in touch</p>
            <form className="contact-form" onSubmit={handleSubmit}>
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
                <label htmlFor="message">Message:</label>
                <input
                    id="email"
                    type="text"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <button
                    className="btn-submit"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Send
                </button>
            </form>
        </section>
    );
};
