"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export type RegionOption = {
  countryCode: string
  label: string
  currency: string
}

type Props = {
  options: RegionOption[]
}

const RegionSwitcherClient = ({ options }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentCountryCode = pathname.split("/")[1]?.toLowerCase()
  const currentOption =
    options.find((o) => o.countryCode === currentCountryCode) ?? options[0]

  useEffect(() => {
    if (!isOpen) return
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [isOpen])

  const switchTo = (countryCode: string) => {
    if (!countryCode || countryCode === currentCountryCode) {
      setIsOpen(false)
      return
    }
    const segments = pathname.split("/")
    segments[1] = countryCode
    router.push(segments.join("/") || `/${countryCode}`)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-1 px-2 py-1 rounded-full hover:bg-neutral-100 text-xs font-medium text-zinc-700"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{currentOption?.label ?? "ARS"}</span>
        <svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 py-1"
        >
          {options.map((opt) => (
            <li key={opt.countryCode}>
              <button
                type="button"
                onClick={() => switchTo(opt.countryCode)}
                className={`w-full text-left px-3 py-2 text-xs hover:bg-neutral-100 flex items-center justify-between ${
                  opt.countryCode === currentCountryCode
                    ? "font-semibold text-blue-700"
                    : "text-zinc-700"
                }`}
              >
                <span>{opt.currency}</span>
                <span className="text-neutral-500">{opt.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default RegionSwitcherClient
