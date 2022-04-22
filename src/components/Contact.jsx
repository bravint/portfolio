import { useState } from 'react';

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

    return (
        <form>
            <label labelFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
            />
            <label labelFor="email">Email Address:</label>
            <input
                id="email"
                type="text"
                value={form.email}
                onChange={handleChange}
                required
            />
            <label labelFor="message">Message:</label>
            <input
                id="email"
                type="text"
                value={form.message}
                onChange={handleChange}
                required
            />
        </form>
    );
};
