"use client"

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef, useEffect, type ReactNode } from "react"

interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function Parallax({ children, className = "", speed = 0.5 }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  const springY = useSpring(y, { damping: 30, stiffness: 100 })
  
  return (
    <motion.div ref={ref} className={className} style={{ y: springY }}>
      {children}
    </motion.div>
  )
}

interface CursorParallaxProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function CursorParallax({ 
  children, 
  className = "", 
  strength = 0.02 
}: CursorParallaxProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 50, stiffness: 100 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      x.set((e.clientX - centerX) * strength)
      y.set((e.clientY - centerY) * strength)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y, strength])
  
  return (
    <motion.div className={className} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  )
}

interface DepthLayerProps {
  children: ReactNode
  className?: string
  depth?: number // 0 = no movement, 1 = max movement
}

export function DepthLayer({ 
  children, 
  className = "", 
  depth = 0.5 
}: DepthLayerProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  
  const springConfig = { damping: 50, stiffness: 100 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      const moveX = (e.clientX - centerX) * depth * 0.03
      const moveY = (e.clientY - centerY) * depth * 0.03
      
      x.set(moveX)
      y.set(moveY)
      rotateX.set(-moveY * 0.5)
      rotateY.set(moveX * 0.5)
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y, rotateX, rotateY, depth])
  
  return (
    <motion.div 
      className={className} 
      style={{ 
        x: springX, 
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
      }}
    >
      {children}
    </motion.div>
  )
}
