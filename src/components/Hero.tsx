import React from 'react'
import { GithubButton } from './GithubButton'
import { LinkedinButton } from './LinkedinButton'

export const Hero = () => {
  return (
    
    <div className="hero bg-base-200 min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="public/donowall.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
        <h1 className="text-5xl font-bold">Hi there! I'm George, a software engineer based in Los Angeles.</h1>
        <p className="py-6">
        I like to use programming is a creative outlet, where I can build projects that combine software with my other interests.
        I'm particularly interested in developing scalable, well structured systems and continuously expanding my technical depth.
        To further broaden my experiences and skills, I plan to pursue a Master's in Computer Science in the near future.
        I am actively seeking entry-level software engineering opportunities and would love to connect.
        </p>
        <LinkedinButton/>
        <GithubButton/>
    </div>
  </div>
</div>
  )
}
