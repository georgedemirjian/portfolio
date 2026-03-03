import React, { useEffect, useRef } from 'react'

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0, h = 0

    // Particles
    const PARTICLE_COUNT = 300
    type Particle = { x: number; y: number; r: number; vx: number; vy: number; alpha: number }
    const particles: Particle[] = []

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 4.4 + 0.3,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          alpha: Math.random() * 0.5 + 0.15,
        })
      }
    }

    // Aurora blobs animated with sine waves
    type Blob = { x: number; y: number; rx: number; ry: number; color: string; speed: number; offset: number }
    const blobs: Blob[] = [
      { x: 0.15, y: 0.35, rx: 0.45, ry: 0.30, color: '#0369a1', speed: 0.0007, offset: 0 },
      { x: 0.75, y: 0.55, rx: 0.40, ry: 0.28, color: '#075985', speed: 0.0005, offset: 2 },
      { x: 0.45, y: 0.75, rx: 0.50, ry: 0.22, color: '#164e63', speed: 0.0009, offset: 4 },
      { x: 0.55, y: 0.15, rx: 0.35, ry: 0.25, color: '#0c4a6e', speed: 0.0006, offset: 1 },
    ]

    let t = 0

    const draw = () => {
      t++

      // Black base
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, w, h)

      // blobs
      for (const b of blobs) {
        const px = (b.x + Math.sin(t * b.speed + b.offset) * 0.08) * w
        const py = (b.y + Math.cos(t * b.speed * 1.3 + b.offset) * 0.06) * h
        const grad = ctx.createRadialGradient(px, py, 0, px, py, b.rx * w)
        grad.addColorStop(0, b.color + 'cc')
        grad.addColorStop(0.5, b.color + '44')
        grad.addColorStop(1, 'transparent')
        ctx.save()
        ctx.scale(1, b.ry / b.rx)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(px, py * (b.rx / b.ry), b.rx * w, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // horizontal shimmer at top
      const shimmer = ctx.createLinearGradient(0, 0, 0, h * 0.5)
      shimmer.addColorStop(0, 'rgba(148,221,241,0.03)')
      shimmer.addColorStop(0.4, 'transparent')
      ctx.fillStyle = shimmer
      ctx.fillRect(0, 0, w, h)

      // Particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148,221,241,${p.alpha})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => {
      resize()
      initParticles()
    })
    ro.observe(canvas)
    resize()
    initParticles()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}