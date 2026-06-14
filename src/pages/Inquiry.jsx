import React, { useState } from 'react';

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    venue: '',
    guests: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry. Please try again.');
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        venue: '',
        guests: '',
        budget: '',
        message: ''
      });

      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  return (
    <main className="relative z-10 pt-32 pb-section-gap max-w-container-max mx-auto px-gutter min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Side: Cinematic Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-40">
          <div className="space-y-8">
            <h1 className="font-display-lg text-headline-lg lg:text-display-lg text-primary leading-tight">
              Let's Create <br />Something <br />Beautiful
            </h1>
            <div className="w-16 h-[2px] bg-primary/40"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Every frame is a legacy. Share your vision with us, and let's craft a cinematic narrative of your most cherished moments.
            </p>
            <div className="flex gap-8 pt-6">
              <a className="group flex items-center gap-3" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span className="w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    photo_camera
                  </span>
                </span>
                <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                  Instagram
                </span>
              </a>
              <a className="group flex items-center gap-3" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <span className="w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    videocam
                  </span>
                </span>
                <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest/50 p-8 md:p-12 border border-outline-variant/20 gold-border-glow">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* Name */}
              <div className="relative">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface pt-6 pb-2 transition-all placeholder-transparent peer"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-body-md peer-focus:top-0 peer-focus:text-label-md peer-focus:text-primary"
                >
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface pt-6 pb-2 transition-all placeholder-transparent peer"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-0 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-body-md peer-focus:top-0 peer-focus:text-label-md peer-focus:text-primary"
                >
                  Email Address
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface pt-6 pb-2 transition-all placeholder-transparent peer"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-0 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-body-md peer-focus:top-0 peer-focus:text-label-md peer-focus:text-primary"
                >
                  Phone Number
                </label>
              </div>

              {/* Wedding Date */}
              <div className="relative">
                <input
                  required
                  type="text"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Event Date"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface pt-6 pb-2 transition-all placeholder-transparent peer"
                />
                <label
                  htmlFor="date"
                  className="absolute left-0 top-0 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-body-md peer-focus:top-0 peer-focus:text-label-md peer-focus:text-primary"
                >
                  Event Date
                </label>
              </div>

              {/* Venue */}
              <div className="relative md:col-span-2">
                <input
                  required
                  type="text"
                  name="venue"
                  id="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="Venue Location"
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface pt-6 pb-2 transition-all placeholder-transparent peer"
                />
                <label
                  htmlFor="venue"
                  className="absolute left-0 top-0 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-body-md peer-focus:top-0 peer-focus:text-label-md peer-focus:text-primary"
                >
                  Venue Location
                </label>
              </div>

              {/* Guest Count */}
              <div className="relative">
                <select
                  required
                  name="guests"
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface pt-6 pb-2 transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-background" value="" disabled>Estimated Guests</option>
                  <option className="bg-background" value="100-300">100 - 300</option>
                  <option className="bg-background" value="300-600">300 - 600</option>
                  <option className="bg-background" value="600-1000">600 - 1000</option>
                  <option className="bg-background" value="1000+">1000+</option>
                </select>
                <label
                  htmlFor="guests"
                  className="absolute left-0 top-0 font-label-md text-label-md uppercase tracking-widest text-primary"
                >
                  Guest Count
                </label>
              </div>

              {/* Budget Range */}
              <div className="relative">
                <select
                  required
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface pt-6 pb-2 transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-background" value="" disabled>Budget Range</option>
                  <option className="bg-background" value="₹10L - ₹25L">₹10L - ₹25L</option>
                  <option className="bg-background" value="₹25L - ₹50L">₹25L - ₹50L</option>
                  <option className="bg-background" value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                  <option className="bg-background" value="₹1Cr+">₹1Cr+</option>
                </select>
                <label
                  htmlFor="budget"
                  className="absolute left-0 top-0 font-label-md text-label-md uppercase tracking-widest text-primary"
                >
                  Budget Range
                </label>
              </div>
            </div>

            {/* Additional Details */}
            <div className="relative pt-6">
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your story..."
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface pt-6 pb-2 transition-all placeholder-transparent peer resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-6 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant transition-all peer-placeholder-shown:top-12 peer-placeholder-shown:text-body-md peer-focus:top-6 peer-focus:text-label-md peer-focus:text-primary"
              >
                Tell us about your story...
              </label>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full md:w-auto px-16 py-4 font-label-md text-label-md uppercase tracking-widest font-bold transition-all duration-300 transform active:scale-95 shadow-lg ${
                  status.success
                    ? 'bg-green-600 text-white'
                    : 'bg-primary text-background hover:bg-primary-container shadow-primary/10'
                }`}
              >
                {status.submitting ? 'Sending...' : status.success ? 'Sent Successfully' : 'Send Inquiry'}
              </button>
            </div>

            {status.error && (
              <p className="text-red-500 font-label-md uppercase tracking-widest text-xs mt-4">
                {status.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
