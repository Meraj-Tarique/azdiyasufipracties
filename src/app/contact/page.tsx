'use client';
import { FormEvent, useState, ChangeEvent } from 'react';

const INITIAL_VALUES = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData(INITIAL_VALUES);
      } else {
        setStatus('error');
        console.error('Failed to send:', result.error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 pt-32 md:pt-36 pb-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Full name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-[#C5A059] px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-[#b38f4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A059] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === 'error' && (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                Sorry, something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
