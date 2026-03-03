import { useEffect, useState } from 'react'

const tabs = [
  { label: 'About Me',               href: '#hero'      },
  { label: 'Education & Experience', href: '#education' },
  { label: 'Projects',               href: '#projects'  },
  { label: 'Skills',                 href: '#skills'    },
  { label: 'Contact',                href: '#contact'   },
]

export const Tabs = () => {
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const sections = tabs.map(t => document.querySelector(t.href)).filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }})
      },
      {rootMargin: '-20% 0px -60% 0px', threshold: 0,}
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div role="tablist" className="tabs tabs-border">
      {tabs.map(tab => (
        <a key={tab.href}href={tab.href}role="tab" className={`tab ${active === tab.href ? 'tab-active' : ''}`}>
          {tab.label}
        </a>
      ))}
    </div>
  )
}