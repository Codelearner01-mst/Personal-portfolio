import { useState, useRef } from "react";
import { MapPin, Mail, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import emailJsData from "../../data/emailJS";

emailjs.init(emailJsData.options);
export default function Contact() {
  const [sentStatus, setSentStatus] = useState("Send Message")
  const sending = sentStatus === "Sending..."
  console.log("IS sending", sending)
  const formRef = useRef(null)

  const submit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      const lastSent = localStorage.getItem("lastEmailSentAt");
      const now = Date.now();
      const throttleMs = 30000; // 30 seconds

      // Manual rate limiting check
      if (lastSent && now - parseInt(lastSent) < throttleMs) {
        setSentStatus("Please wait 30s before sending again.");
        setTimeout(() => setSentStatus("Send Message"), 3000);
        return;
      }

      setSentStatus("Sending...")
      emailjs.sendForm(emailJsData.serviceID, emailJsData.templateID, formRef.current, emailJsData.options)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          console.log(response)
          localStorage.setItem("lastEmailSentAt", Date.now().toString());
          setSentStatus("Message sent ✓")
          setTimeout(() => setSentStatus("Send Message"), 3000);
        })
        .catch((err) => {
          console.log('FAILED...', err);
          setSentStatus("Failed to send form! Try again later.")
          setTimeout(() => setSentStatus("Send Message"), 3000);
        })
    }
  };

  return (
    <section id="contact" className="py-20 px-10 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="relative inline-block pt-6">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[82px] leading-none text-ink/[0.04] tracking-widest select-none whitespace-nowrap">
              04
            </span>
            <h2 className="font-heading text-4xl font-extrabold relative">Get In Touch</h2>
          </div>
          <p className="text-muted text-[17px] mt-3">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — info */}
          <div className="flex flex-col gap-6">
            <p className="text-muted text-[16px] leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question, a project idea,
              or just want to say hi — my inbox is always open.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[15px]">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-muted/60 font-heading font-bold mb-0.5">Email</p>
                  <p className="font-medium">kwabenap603@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[15px]">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-muted/60 font-heading font-bold mb-0.5">Location</p>
                  <p className="font-medium">Ghana, Accra</p>
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-ink text-accent text-[12px] font-medium tracking-[2px] uppercase px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Right — form */}
          <form ref={formRef} onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-heading text-[12px] font-bold tracking-widest uppercase text-muted">Name</label>
              <input
                name="name"
                required
                placeholder="John Doe"
                className="border border-border bg-paper px-4 py-3 text-[15px] outline-none focus:border-ink transition-colors duration-200 rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-[12px] font-bold tracking-widest uppercase text-muted">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="border border-border bg-paper px-4 py-3 text-[15px] outline-none focus:border-ink transition-colors duration-200 rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-[12px] font-bold tracking-widest uppercase text-muted">Subject</label>
              <textarea
                name="subject"
                required
                rows={4}
                placeholder="I need your service..."
                className="border border-border bg-paper px-4 py-3 text-[15px] outline-none focus:border-ink transition-colors duration-200 rounded-sm resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-[12px] font-bold tracking-widest uppercase text-muted">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="border border-border bg-paper px-4 py-3 text-[15px] outline-none focus:border-ink transition-colors duration-200 rounded-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 font-heading text-[13px] font-bold tracking-widest uppercase py-3 bg-ink text-paper border-2 border-ink hover:bg-accent hover:text-ink hover:border-accent transition-all duration-200"
              disabled={sending}
            >
              {sentStatus}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
