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
    <div className="bg-[#F8F6F0] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DFD5] pb-6">
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                  activeCategory === cat
                    ? "border-[#111111] bg-[#111111] text-white shadow-xs"
                    : "border-[#E2DFD5] bg-white text-[#4B515D] hover:border-[#111111] hover:text-[#111111]",
                )}
              >
                {cat === "All" ? "All Engagements" : cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-[#4B515D]">
            Showing <strong className="text-[#111111]">{filteredProjects.length}</strong> verified engagements
          </p>
        </div>

        {/* Case Studies List */}
        <div className="mt-12 space-y-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#E2DFD5] bg-white p-7 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#CBC6B9] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] lg:grid-cols-12 lg:gap-12"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#EAE7DF] bg-[#F1EFE8] lg:col-span-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 font-serif text-xs font-medium text-[#111111] shadow-xs backdrop-blur-xs">
                  {project.category}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif text-sm font-semibold text-[#111111]">
                      {project.id}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#636875]">
                      {project.clientType}
                    </span>
                  </div>

                  <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-normal text-[#111111] group-hover:text-black">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-pretty text-base leading-relaxed text-[#4B515D]">
                    {project.description}
                  </p>

                  {/* Scope bullets */}
                  <div className="mt-6 border-t border-[#EAE7DF] pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#636875] mb-2.5">
                      Key Deliverables:
                    </p>
                    <ul className="grid grid-cols-1 gap-2.5 text-sm text-[#374151] sm:grid-cols-2">
                      {project.scope.map((s) => (
                        <li key={s} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Metric & Link */}
                <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-[#EAE7DF] pt-5">
                  <div>
                    <span className="font-serif text-4xl font-normal text-[#111111]">
                      {project.metric}
                    </span>
                    <span className="ml-2 text-sm text-[#636875]">
                      {project.metricLabel}
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#2A2A2A] cursor-pointer"
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
        <div className="mt-20 rounded-2xl border border-[#E2DFD5] bg-white p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="font-serif text-4xl font-normal text-[#111111]">500+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#636875]">Professionals Placed</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-normal text-[#111111]">10,000+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#636875]">Corporate Gifts Delivered</p>
            </div>
            <div>
              <p className="font-serif text-4xl font-normal text-[#111111]">100%</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#636875]">On-Time Project Handover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
