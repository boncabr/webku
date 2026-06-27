import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiDiscord } from "react-icons/si";
import { Link } from "wouter";
import { Play, LogIn, LogOut, Smile, Square, ChevronRight } from "lucide-react";
import lunethLogo from "@assets/IMG_8111_1782564043283.png";
import bgVideo from "@assets/a_buat_logo_ini_terlih_1782564990682.mp4";

const commands = [
  { cmd: "?play", alt: "/play", args: "[song]", desc: "Play a song or add it to queue", icon: Play },
  { cmd: "?join", alt: null, args: "", desc: "Join your current voice channel", icon: LogIn },
  { cmd: "?leave", alt: null, args: "", desc: "Leave the voice channel", icon: LogOut },
  { cmd: "?emoji", alt: null, args: "", desc: "Spice up the chat with bot emoji reactions", icon: Smile },
  { cmd: "?stop", alt: null, args: "", desc: "Stop playback and clear the queue", icon: Square },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary selection:text-primary-foreground" ref={containerRef}>
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={bgVideo}
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-background/60" />
        {/* Liquid blobs on top for extra depth */}
        <div className="liquid-blob liquid-blob-1" style={{position:"absolute"}} />
        <div className="liquid-blob liquid-blob-2" style={{position:"absolute"}} />
        <div className="liquid-blob liquid-blob-3" style={{position:"absolute"}} />
      </div>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <img src={lunethLogo} alt=".Luneth" className="w-8 h-8 rounded-full object-cover" />
            <span>.Luneth</span>
          </div>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1507649904456241202&scope=bot+applications.commands&permissions=8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
          >
            Add to Server <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center min-h-[90vh]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full opacity-50" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[100px] rounded-full opacity-30" />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/30 text-white text-sm font-semibold mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Music without interruptions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            The beat of <br className="hidden md:block" /> your server.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            .Luneth is a sleek, powerful music bot that just works. Add it, play it, forget it. High-quality audio for your late-night coding sessions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="https://discord.com/oauth2/authorize?client_id=1507649904456241202&scope=bot+applications.commands&permissions=8"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(88,101,242,0.5)]"
            >
              <SiDiscord className="w-5 h-5" />
              Add to Discord
            </a>
            <a
              href="#commands"
              className="h-14 px-8 rounded-full bg-secondary/50 hover:bg-secondary border border-white/5 text-foreground font-semibold flex items-center justify-center transition-all hover:border-white/10"
            >
              View Commands
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="relative py-32 px-6 bg-secondary/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Command Arsenal</h2>
              <p className="text-muted-foreground text-lg max-w-xl">Everything you need to control the vibe. Simple, intuitive, and powerful.</p>
            </div>
            
            {/* Decorative Equalizer */}
            <div className="flex items-end gap-1 h-12 opacity-50">
              {[40, 70, 40, 90, 60, 80, 50, 30].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-primary rounded-t-sm"
                  animate={{ height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${h}%`] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commands.map((cmd, i) => {
              const Icon = cmd.icon;
              return (
                <motion.div
                  key={cmd.cmd}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative p-6 rounded-2xl glass-card overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span className="font-mono font-bold text-white">{cmd.cmd}</span>
                        {cmd.args && (
                          <span className="font-mono text-sm text-primary/70">{cmd.args}</span>
                        )}
                        {cmd.alt && (
                          <span className="font-mono text-xs text-muted-foreground border border-white/10 rounded px-1.5 py-0.5">{cmd.alt}</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{cmd.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Owner & Bug Report Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Developer
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">Owner Bot</h2>
              <p className="text-white mb-6 font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">Menemukan bug atau ada pertanyaan? Hubungi langsung owner bot .Luneth.</p>
            </div>
            <a
              href="https://discordapp.com/users/1470604389499797526"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl glass-card hover:scale-105 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <SiDiscord className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm">Laporkan Bug / Hubungi Owner</p>
                <p className="text-xs text-muted-foreground">Klik untuk buka profil Discord owner</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to tune in?</h2>
          <p className="text-lg text-muted-foreground mb-10">Join thousands of servers already using .Luneth for their audio needs.</p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1507649904456241202&scope=bot+applications.commands&permissions=8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(88,101,242,0.5)]"
          >
            <SiDiscord className="w-5 h-5" />
            Invite .Luneth
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} .Luneth Bot. Not affiliated with Discord.</p>
      </footer>
    </div>
  );
}
