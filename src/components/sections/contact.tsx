"use client";

import { useState } from "react";
import { getPortfolio, getSectionConfig } from "@/lib/portfolio";
import { AnimatedSection, FadeUp } from "@/lib/animations";

export function Contact() {
  const { contact } = getPortfolio();
  const section = getSectionConfig("contact");
  const heading = section?.heading ?? {
    label: "Contact",
    title: "Let's Work Together!",
    subtitle: "Saya terbuka untuk peluang baru dan kolaborasi menarik. Mari wujudkan ide kreatif Anda bersama!",
  };

  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate mail sending
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Helper to render contact icons
  const getContactIcon = (id: string) => {
    switch (id) {
      case "email":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        );
      case "whatsapp":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.472 5.358 1.473 5.432 0 9.851-4.388 9.854-9.782.002-2.614-1.013-5.074-2.859-6.923C17.097 2.073 14.65 1.053 12.01 1.052c-5.437 0-9.857 4.388-9.86 9.783-.001 2.014.529 3.985 1.536 5.69l-.994 3.633 3.73-.974.225.133zm11.96-7.147c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        );
      case "instagram":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        );
      default: // LinkedIn
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
        );
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="section-padding section-glow border-t border-border/20"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">

          {/* Left Column: Let's Work Together Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeUp>
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                {heading.label}
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-glow sm:text-4xl">
                Let&apos;s <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Work</span> Together!
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {heading.subtitle}
              </p>
            </FadeUp>

            {/* Social channels */}
            <div className="mt-8 space-y-4">
              {contact.channels.map((channel, index) => {
                // Determine user values based on original links
                let labelText = channel.label;
                let valueText = channel.description;
                let linkHref = channel.id === "email" ? "mailto:andretririzky123@gmail.com" : "#";

                if (channel.id === "email") {
                  valueText = "andretririzky123@gmail.com";
                } else if (channel.id === "whatsapp" || channel.label.toLowerCase() === "whatsapp") {
                  labelText = "WhatsApp";
                  valueText = "+62 812-3456-7890";
                  linkHref = "https://wa.me/6287789235490";
                } else if (channel.id === "instagram") {
                  valueText = "@andretraa";
                  linkHref = "https://instagram.com/_andretraa";
                } else if (channel.id === "linkedin") {
                  valueText = "andre-tri-rizky-ariyanto";
                  linkHref = "https://www.linkedin.com/in/andre-tri-rizky-ariyanto-872203262/";
                }

                return (
                  <FadeUp key={channel.id} delay={0.1 + index * 0.08}>
                    <a
                      href={linkHref}
                      target={channel.id === "email" ? undefined : "_blank"}
                      rel={channel.id === "email" ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-surface/30 p-3.5 hover:border-primary/20 hover:bg-surface/50 transition-all"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        {getContactIcon(channel.id)}
                      </div>
                      <div>
                        <p className="font-heading text-xs font-semibold text-text-muted leading-none">
                          {labelText}
                        </p>
                        <p className="mt-1.5 font-heading text-xs font-bold text-text-primary group-hover:text-primary transition-colors leading-none">
                          {valueText}
                        </p>
                      </div>
                    </a>
                  </FadeUp>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.15}>
              <div className="relative rounded-3xl border border-border/80 bg-surface/50 p-6 backdrop-blur-sm shadow-xl md:p-8">

                {/* Visual Envelope background element */}
                <div className="absolute right-4 top-4 opacity-5 hidden sm:block pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-28 w-28 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block font-heading text-xs font-semibold text-text-secondary">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-xs text-text-primary placeholder-text-muted/50 focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-heading text-xs font-semibold text-text-secondary">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. email@example.com"
                        className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-xs text-text-primary placeholder-text-muted/50 focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-heading text-xs font-semibold text-text-secondary">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Partnership Proposal"
                      className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-xs text-text-primary placeholder-text-muted/50 focus:border-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-heading text-xs font-semibold text-text-secondary">Your Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your creative ideas..."
                      className="mt-2 w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-xs text-text-primary placeholder-text-muted/50 focus:border-primary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 font-heading text-xs font-bold text-white shadow-lg shadow-primary/20 hover:scale-101 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : submitted ? (
                        <span>Sent Successfully! ✓</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3.5 w-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
