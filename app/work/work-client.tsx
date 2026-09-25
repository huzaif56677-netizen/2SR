"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const categories = ["All", "People", "Experiences", "Infrastructure"]

export function WorkClient() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.pillar.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6">
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                  activeCategory === cat
                    ? "border-[#0052CC] bg-[#0052CC] text-white shadow-xs"
                    : "border-[#CBD5E1] bg-white text-[#334155] hover:border-[#0052CC] hover:text-[#0052CC]",
                )}
              >
                {cat === "All" ? "All Engagements" : cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-[#475569]">
            Showing <strong className="text-[#0A1128]">{filteredProjects.length}</strong> verified engagements
          </p>
        </div>

        {/* Case Studies List */}
        <div className="mt-12 space-y-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="newgen-card group grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#CBD5E1] bg-white p-7 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] lg:grid-cols-12 lg:gap-12 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F1F5F9] lg:col-span-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 font-serif text-xs font-semibold text-[#0052CC] shadow-xs backdrop-blur-xs">
                  {project.category}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif text-sm font-semibold text-[#0052CC]">
                      {project.id}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      {project.clientType}
                    </span>
                  </div>

                  <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-normal text-[#0A1128] group-hover:text-[#0052CC] transition-colors">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-pretty text-base leading-relaxed text-[#475569]">
                    {project.description}
                  </p>

                  {/* Scope bullets */}
                  <div className="mt-6 border-t border-[#F1F5F9] pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2.5">
                      Key Deliverables:
                    </p>
                    <ul className="grid grid-cols-1 gap-2.5 text-sm text-[#334155] sm:grid-cols-2">
                      {project.scope.map((s) => (
                        <li key={s} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Metric & Link */}
                <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-[#F1F5F9] pt-5">
                  <div>
                    <span className="font-serif text-4xl font-normal text-[#0052CC]">
                      {project.metric}
                    </span>
                    <span className="ml-2 text-sm text-[#64748B]">
                      {project.metricLabel}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0052CC] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-[#0043A8] cursor-pointer"
                  >
                    <span>Discuss Requirement</span>
                    <span className="text-sm">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Aggregate Metrics Bar */}
        <div className="mt-20 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl font-normal text-[#0052CC]">500+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]">Professionals Placed</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-normal text-[#0052CC]">10,000+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]">Corporate Gifts Delivered</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-normal text-[#0052CC]">100%</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]">On-Time Project Handover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
