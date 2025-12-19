import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white text-gray-900">
      {/* HERO */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold mb-4">Ujjwal Jagtap</h1>
          <p className="text-xl text-purple-600 mb-6">
            Software Developer • Data Scientist • Cloud Enthusiast
          </p>
          <p className="text-gray-600 mb-6">
            I build intelligent software, conversational AI, and data-driven applications that solve real-world problems.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="/resume.pdf" download>Download Resume</a>
            </Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-purple-500 flex items-center justify-center text-white text-3xl font-bold">
            UJ
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-700 max-w-3xl">
          I am a Software Developer with experience in Dialogflow CX, data analytics, and cloud technologies.
          I enjoy designing scalable systems, AI-powered chatbots, and analytical dashboards.
        </p>
      </section>

      {/* SKILLS */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-6 space-y-3">
            <h3 className="font-bold">Geofencing Discount App</h3>
            <p className="text-sm text-gray-600">Flutter, Firebase, Python, Google Maps API</p>
            <div className="flex gap-3">
              <a href="https://github.com/USERNAME/geofencing-discount-app" target="_blank" className="text-purple-600 font-medium">GitHub</a>
              <a href="https://demo-link.com/geofencing" target="_blank" className="text-purple-600 font-medium">Live Demo</a>
            </div>
          </CardContent></Card>

          <Card><CardContent className="p-6 space-y-3">
            <h3 className="font-bold">Flight Booking Agent</h3>
            <p className="text-sm text-gray-600">Dialogflow CX, Node.js, Firebase</p>
            <div className="flex gap-3">
              <a href="https://github.com/USERNAME/flight-booking-agent" target="_blank" className="text-purple-600 font-medium">GitHub</a>
              <a href="https://demo-link.com/flight-agent" target="_blank" className="text-purple-600 font-medium">Live Demo</a>
            </div>
          </CardContent></Card>

          <Card><CardContent className="p-6 space-y-3">
            <h3 className="font-bold">IMDB Analytics</h3>
            <p className="text-sm text-gray-600">Python, Pandas, Power BI</p>
            <div className="flex gap-3">
              <a href="https://github.com/USERNAME/imdb-analytics" target="_blank" className="text-purple-600 font-medium">GitHub</a>
              <a href="https://demo-link.com/imdb" target="_blank" className="text-purple-600 font-medium">Dashboard</a>
            </div>
          </CardContent></Card>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card><CardContent className="p-6">
            <h3 className="font-bold">Geofencing Discount App</h3>
            <p className="text-sm text-gray-600">Flutter, Firebase, Python</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <h3 className="font-bold">Flight Booking Agent</h3>
            <p className="text-sm text-gray-600">Dialogflow CX, Node.js</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <h3 className="font-bold">IMDB Analytics</h3>
            <p className="text-sm text-gray-600">Python, Power BI</p>
          </CardContent></Card>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="space-y-3">
          <p className="flex items-center gap-2"><Mail size={18}/> ujjwaljagtap7@gmail.com</p>
          <p className="flex items-center gap-2"><MapPin size={18} /> Nashik, Maharashtra, India</p>
        </div>
        <div className="flex gap-4 mt-6">
          <a href="https://github.com" target="_blank"><Github /></a>
          <a href="https://linkedin.com/in/ujjwal-jagtap" target="_blank"><Linkedin /></a>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Ujjwal Jagtap. All rights reserved.
      </footer>
    </div>
  );
}
