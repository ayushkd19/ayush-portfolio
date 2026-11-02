import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#2547f4', '#d9482b', '#1a1c23'],
        });
      } catch (err) {}

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <div id="contact" className="scroll-mt-20">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 lg:px-8">
        <span className="inline-block bg-ink px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-paper -rotate-2">
          Open line
        </span>
        <div className="mt-5 flex items-baseline gap-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-ink">
            Start a <span className="marker whitespace-nowrap">conversation</span>
          </h2>
          <span
            aria-hidden="true"
            className="hidden flex-1 border-t-2 border-dashed border-ink/20 sm:block"
          />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Inquiries & Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Email Copy Card */}
            <div className="border-2 border-ink bg-paper p-5 sm:p-6 shadow-print-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 border-2 border-ink bg-blue text-paper">
                  <Mail className="w-5 h-5" />
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 border-2 border-ink bg-paper font-mono text-xs font-bold uppercase tracking-wider text-ink hover:bg-ink hover:text-paper shadow-print-sm transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-blue" />
                      <span className="text-blue">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-1">
                Direct Contact
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-mono text-base sm:text-lg font-bold text-ink hover:text-blue transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-ink bg-paper p-3.5 shadow-print-sm hover:shadow-print hover:translate-x-[2px] hover:translate-y-[-2px] transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Github className="w-4 h-4 text-ink group-hover:text-blue transition-colors" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-blue transition-transform" />
                </div>
                <h4 className="font-display text-xs font-bold text-ink">GitHub</h4>
                <p className="font-mono text-[10px] text-muted truncate">@ayushkd19</p>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-ink bg-paper p-3.5 shadow-print-sm hover:shadow-print hover:translate-x-[2px] hover:translate-y-[-2px] transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Linkedin className="w-4 h-4 text-ink group-hover:text-blue transition-colors" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-blue transition-transform" />
                </div>
                <h4 className="font-display text-xs font-bold text-ink">LinkedIn</h4>
                <p className="font-mono text-[10px] text-muted truncate">/ayushkd19</p>
              </a>

              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-ink bg-paper p-3.5 shadow-print-sm hover:shadow-print hover:translate-x-[2px] hover:translate-y-[-2px] transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-black text-ink group-hover:text-blue">𝕏</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-blue transition-transform" />
                </div>
                <h4 className="font-display text-xs font-bold text-ink">X / Twitter</h4>
                <p className="font-mono text-[10px] text-muted truncate">@ayushkd19</p>
              </a>
            </div>

            {/* Timezone / Status Card */}
            <div className="border-2 border-ink bg-paper p-5 shadow-print-sm space-y-2 font-mono text-xs text-muted">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red shrink-0" />
                <span>JIIT Noida / India · UTC+05:30</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue shrink-0" />
                <span>Typical response: within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Paper Form */}
          <div className="lg:col-span-7">
            <div className="border-2 border-ink bg-paper p-5 sm:p-8 shadow-print">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3 font-mono">
                  <div className="w-12 h-12 border-2 border-ink bg-blue text-paper flex items-center justify-center font-bold text-xl mb-2">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Message Dispatched!
                  </h3>
                  <p className="text-xs text-muted max-w-sm">
                    Thank you for reaching out, Ayush will get back to you promptly at {formData.email || 'your email'}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 border-2 border-ink bg-paper text-ink font-bold text-xs uppercase hover:bg-ink hover:text-paper transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-1"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Sharma"
                        className="w-full px-4 py-2.5 font-mono text-xs border-2 border-ink bg-paper text-ink placeholder-muted/50 focus:outline-none focus:border-blue shadow-print-sm transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-1"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 font-mono text-xs border-2 border-ink bg-paper text-ink placeholder-muted/50 focus:outline-none focus:border-blue shadow-print-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship / BlindBook JIIT / Collaboration"
                      className="w-full px-4 py-2.5 font-mono text-xs border-2 border-ink bg-paper text-ink placeholder-muted/50 focus:outline-none focus:border-blue shadow-print-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-1"
                    >
                      Your Note
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Ayush, saw your Arduino Optical Meter & MATRIX local AI project..."
                      className="w-full px-4 py-2.5 font-mono text-xs border-2 border-ink bg-paper text-ink placeholder-muted/50 focus:outline-none focus:border-blue shadow-print-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 border-2 border-ink bg-blue py-3.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-paper shadow-print hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Message →</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
