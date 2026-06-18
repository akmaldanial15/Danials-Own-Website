"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function DashboardMockup() {
  const { language } = useLanguage();
  const isMs = language === "ms";

  return (
    <div className="relative mt-16 max-w-5xl mx-auto rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.45)] hover:border-purple-500/20 group">
      {/* Subtle inner ambient grid light */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      
      {/* Window Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-900 bg-zinc-950/50">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-500/60" />
          <div className="w-3 h-3 rounded-full bg-amber-500/60" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
        </div>
        <div className="text-[10px] font-mono text-zinc-500 tracking-wider">
          DANIAL_WORKSPACE_CRM
        </div>
        <div className="w-12" />
      </div>

      <div className="flex h-[400px] overflow-hidden">
        {/* Sidebar Mockup */}
        <div className="hidden md:flex flex-col w-48 border-r border-zinc-900/85 bg-zinc-950/40 p-3.5 shrink-0 text-left">
          <div className="space-y-4">
            <div>
              <div className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase px-2 mb-2">Projects</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-900/60 text-purple-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Rasa Nusantara
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-zinc-400 text-xs hover:text-zinc-200 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  Admin Management
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-zinc-400 text-xs hover:text-zinc-200 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  Android Sync
                </div>
              </div>
            </div>

            <div>
              <div className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase px-2 mb-2">Workspace</div>
              <div className="space-y-1">
                <div className="flex items-center justify-between px-2.5 py-1.5 text-zinc-400 text-xs">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Task Board
                  </span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-1.5 text-zinc-400 text-xs">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Analytics
                  </span>
                </div>
                <div className="flex items-center justify-between px-2.5 py-1.5 text-zinc-400 text-xs">
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Inquiries
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-purple-950 text-[8px] font-bold text-purple-400 border border-purple-500/20">
                    NEW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main board */}
        <div className="flex-1 flex flex-col overflow-hidden text-left bg-zinc-950/20">
          {/* Header dashboard menu */}
          <div className="flex items-center justify-between gap-2 px-4 py-3.5 border-b border-zinc-900 bg-zinc-950/30">
            <div className="flex items-center gap-4">
              <div className="text-xs font-bold text-zinc-200">Active Board</div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400">Kanban</span>
                <span className="px-2 py-0.5 rounded text-zinc-600">List</span>
                <span className="px-2 py-0.5 rounded text-zinc-600">Timeline</span>
              </div>
            </div>

            {/* Team Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 border border-zinc-955 flex items-center justify-center text-[7px] font-extrabold text-white">D</div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border border-zinc-955 flex items-center justify-center text-[7px] font-extrabold text-white">A</div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 border border-zinc-955 flex items-center justify-center text-[7px] font-extrabold text-white">S</div>
                <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-955 flex items-center justify-center text-[7px] font-semibold text-zinc-400">+5</div>
              </div>
              <div className="px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 text-[9px] font-semibold">
                Filter
              </div>
            </div>
          </div>

          {/* Kanban Columns */}
          <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 overflow-y-auto">
            {/* Backlog */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-semibold mb-1 uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  Backlog
                </div>
                <span className="text-[9px] text-zinc-600 bg-zinc-900/60 px-1.5 rounded font-bold">2</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-850/60 space-y-2.5">
                <div>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-500/10 font-bold uppercase tracking-wider">
                    Template
                  </span>
                  <h4 className="text-xs font-bold text-zinc-200 mt-1.5">Rasa Nusantara Site</h4>
                  <p className="text-[9px] text-zinc-500 mt-1">Wireframe setup and domain integration completed.</p>
                </div>
                <div className="flex items-center justify-between text-[8px] text-zinc-500">
                  <span className="flex items-center gap-1">✓ Done: Blueprint</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-850/60 space-y-2">
                <div>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/20 font-bold uppercase">
                    Setup
                  </span>
                  <h4 className="text-xs font-bold text-zinc-200 mt-1.5">Postgres DB Sync</h4>
                  <p className="text-[9px] text-zinc-500 mt-1">Database setup on cloud instances.</p>
                </div>
              </div>
            </div>

            {/* To Do */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-semibold mb-1 uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  To Do
                </div>
                <span className="text-[9px] text-zinc-600 bg-zinc-900/60 px-1.5 rounded font-bold">2</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-850/60 space-y-2">
                <div>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-purple-950/40 text-purple-400 border border-purple-500/10 font-bold uppercase">
                    Feature
                  </span>
                  <h4 className="text-xs font-bold text-zinc-200 mt-1.5">Bento Grid Adaptations</h4>
                  <p className="text-[9px] text-zinc-500 mt-1">Refine service layout for smaller viewports.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-850/60 space-y-2">
                <div>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-indigo-950/40 text-indigo-400 border border-indigo-500/10 font-bold uppercase">
                    Systems
                  </span>
                  <h4 className="text-xs font-bold text-zinc-200 mt-1.5">Android app Sync</h4>
                  <p className="text-[9px] text-zinc-500 mt-1">Sync push notifications with DB updates.</p>
                </div>
              </div>
            </div>

            {/* In Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-semibold mb-1 uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  In Progress
                </div>
                <span className="text-[9px] text-purple-400 bg-purple-950/40 px-1.5 rounded font-bold">1</span>
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-tr from-purple-950/10 via-zinc-900/60 to-zinc-900/60 border border-purple-500/30 space-y-2.5 relative shadow-[0_0_20px_rgba(59,130,246,0.03)]">
                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 blur-xl pointer-events-none" />
                <div>
                  <span className="text-[8px] px-1.5 py-0.2 rounded bg-red-950/40 text-red-400 border border-red-500/10 font-bold uppercase">
                    AI Automation
                  </span>
                  <h4 className="text-xs font-bold text-zinc-200 mt-1.5">WhatsApp Webhook Sync</h4>
                  <p className="text-[9px] text-zinc-500 mt-1">Setup lead routing and auto reply responders.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[8px] text-zinc-500">
                    <span>Active Webhook</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1">
                    <div className="bg-purple-500 h-1 rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
