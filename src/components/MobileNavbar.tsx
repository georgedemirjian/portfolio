import React, { useState } from 'react'

const mobileLinks = [
  { label: 'About Me',               href: '#hero'      },
  { label: 'Education & Experience', href: '#education' },
  { label: 'Projects',               href: '#projects'  },
  { label: 'Skills',                 href: '#skills'    },
  { label: 'Contact',                href: '#contact'   },
]

export const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-black sticky top-0 z-50 shadow-md lg:hidden">
      <div className="navbar bg-black px-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">George Demirjian</a>
        </div>
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="btn btn-ghost text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-black border-t border-white/10 px-4 pb-4 flex flex-col gap-1">
          {mobileLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}