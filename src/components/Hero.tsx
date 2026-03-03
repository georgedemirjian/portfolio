import React from 'react'
import { GithubButton } from './GithubButton'
import { LinkedinButton } from './LinkedinButton'
import { HeroCanvas } from './HeroCanvas'

export const Hero = () => {
  return (
    <div id="hero" className="hero min-h-screen relative overflow-hidden" style={{ background: '#000' }}>
      <HeroCanvas />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      <div className="hero-content flex-col lg:flex-row relative z-10 px-4 sm:px-8 gap-8 lg:gap-12 py-12">
        {/* Photo, smaller on mobile, capped on desktop */}
        <img
          src="/gd-headshot-rescaled.jpg"
          className="w-48 sm:w-64 lg:w-80 xl:max-w-sm rounded-lg shadow-2xl flex-shrink-0"
          style={{
            boxShadow: '0 0 0 1px rgba(148,221,241,0.12), 0 25px 60px rgba(0,0,0,0.7)',
          }}
        />

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: '#fff' }}
          >
            Hi there! I'm George, a software engineer based in Los Angeles.
          </h1>
          <p
            className="py-5 text-sm sm:text-base lg:text-lg leading-relaxed"
            style={{ color: '#94ddf1', opacity: 0.85 }}
          >
            I like to use programming as a creative outlet, where I can build projects that combine
            software with my other interests. I'm particularly interested in developing scalable,
            well structured systems and continuously expanding my technical depth. To further broaden
            my experiences and skills, I plan to pursue a Master's in Computer Science in the near
            future. I am actively seeking entry-level software engineering opportunities and would
            love to connect.
          </p>
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            <LinkedinButton />
            <GithubButton />
          </div>
        </div>
      </div>
    </div>
  )
}