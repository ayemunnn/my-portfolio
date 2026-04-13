"use client";

import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { profile } from "../../_data/data";
import { Button } from "./ui/button";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      setLoading(false);

      if (res.ok) {
        toast.success("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
        return;
      }

      toast.error(data?.error || "Something went wrong. Please try again.");
    } catch {
      setLoading(false);
      toast.error("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_24px_50px_rgba(15,23,42,0.18)] dark:border-white/10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Let&apos;s talk about analytics, reporting, or automation work
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            I&apos;m open to full-time opportunities, internships, freelance
            analytics work, and collaborative projects where data needs to be
            cleaner, faster, and more actionable.
          </p>

          <div className="mt-6 grid gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <Mail className="size-4" />
                {profile.email}
              </span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 text-sm text-slate-200 transition hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <Phone className="size-4" />
                {profile.phone}
              </span>
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-slate-950/45 dark:text-white"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-slate-950/45 dark:text-white"
                required
              />
            </div>

            <textarea
              placeholder="Tell me a little about the role, team, or project."
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="min-h-44 w-full resize-none rounded-[1.6rem] border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-slate-950/45 dark:text-white"
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="h-12 rounded-full bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
