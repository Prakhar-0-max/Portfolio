import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Contact = ({ isDark }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trigger confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setFormSubmitted(true);

    // Open default mail client with pre-filled content
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-4">
              Contact <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Available for full-time MERN Stack & Java Developer roles. Let's build something great together!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase">Email Me</h3>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl group">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase">Call / WhatsApp</h3>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl group">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase">Location</h3>
                  <p className="text-sm font-bold text-white">
                    {personalInfo.location}
                  </p>
                  <p className="text-[11px] text-cyan-400 mt-0.5 font-mono">
                    {personalInfo.relocation}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 shadow-xl space-y-3">
              <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase mb-3">
                Social Profiles
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">Send Me a Message</h3>
                  <p className="text-xs font-mono text-slate-400">Directly opens pre-filled email client</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white font-heading">Message Sent!</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    Thank you for reaching out! Opening your default email client...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Job Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Hello Prakhar, I came across your portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-xl shadow-cyan-500/20 hover:scale-[1.01] transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message (mailto)</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
