import React from 'react'

export const Tabs = () => {
  return (
    <div role="tablist" className="tabs tabs-border">
    <a role="tab" className="tab tab-active">About Me</a>
    <a role="tab" className="tab">Education & Experience</a>
    <a role="tab" className="tab">Projects</a>
    <a role="tab" className="tab">Contact</a>
    </div>
  )
}
