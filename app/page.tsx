"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    highSchool: "",
    major: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Registration submitted!");
    // Here you can send data to your API
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="student@example.com"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="+251 900 000 000"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">High School Name</label>
            <input
              type="text"
              name="highSchool"
              value={form.highSchool}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Addis Ababa High School"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Intended Major</label>
            <input
              type="text"
              name="major"
              value={form.major}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Computer Science"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Choose a secure password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
