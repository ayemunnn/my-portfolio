"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent 💜!");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div id="contact" className="px-4 sm:px-8 md:px-14 mt-12">
      <div className="grid text-wrap">
        <h1 className="text-black dark:text-white font-bold text-3xl">Get in touch</h1>

        <p className="prose dark:prose-invert mt-2 text-gray-600 dark:text-gray-400">
          Whether it&apos;s a freelance gig, a collaboration, or a full-time
          opportunity, or want to say hi? I&apos;m always excited to connect
          with people who love building meaningful things. Drop a message, and
          I&apos;ll get back to you as soon as I can!
        </p>
      </div>

      <div className="py-2">
        <div className="mt-8">
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full sm:w-auto border dark:border-gray-800 py-4 px-6 rounded-xl bg-[#F2F2F2] dark:bg-gray-800 focus:outline-black dark:focus:outline-white dark:text-white"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full sm:w-auto border dark:border-gray-800 py-4 px-8 rounded-xl bg-[#F2F2F2] dark:bg-gray-800 focus:outline-black dark:focus:outline-white dark:text-white"
                required
              />
            </div>

            <div className="mt-2">
              <textarea
                placeholder="Hi, Stephen are you up for this role:"
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="inline-flex w-full resize-none h-40 px-4 py-3 bg-[#F2F2F2] dark:bg-gray-800 rounded-xl focus:outline-black dark:focus:outline-white mt-2 border dark:border-gray-800 dark:text-white"
              ></textarea>
            </div>

            <div className="mt-4">
              <Button
                className="border dark:border-gray-800 text-center py-6 inline-flex w-full cursor-pointer bg-black/90 dark:bg-white dark:text-black text-white text-base hover:!bg-black/80 dark:hover:!bg-white/90"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending.." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
