"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  staggerChildren?: number
}

export function TextReveal({ 
  children, 
  className = "", 
  delay = 0,
  staggerChildren = 0.03 
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  
  const words = children.split(" ")
  
  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { 
                y: "100%",
                opacity: 0,
              },
              visible: { 
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 30,
                  stiffness: 200,
                }
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  )
}

interface LetterRevealProps {
  children: string
  className?: string
  delay?: number
}

export function LetterReveal({ children, className = "", delay = 0 }: LetterRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  
  const letters = children.split("")
  
  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.02,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { 
              y: "100%",
              opacity: 0,
            },
            visible: { 
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
              }
            },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}
