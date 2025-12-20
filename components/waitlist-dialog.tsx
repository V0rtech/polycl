"use client"

import type React from "react"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

interface WaitlistDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        // Handle error (optional: add error state)
        const data = await response.json()
        console.error(data.error)
      }
    } catch (error) {
      console.error('Failed to submit:', error)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after dialog closes
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 200)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md border border-border bg-background p-8">
          <Dialog.Title className="text-2xl font-sentient mb-2">
            {submitted ? "You're on the list" : "Join the Waitlist"}
          </Dialog.Title>
          <Dialog.Description className="text-foreground/60 font-mono text-sm mb-6">
            {submitted
              ? "We'll notify you when PolyClicks launches."
              : "Be the first to access institutional-grade prediction market analytics."}
          </Dialog.Description>

          {submitted ? (
            <Button onClick={handleClose} className="w-full">
              [Close]
            </Button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
              />
              <Button type="submit" className="w-full">
                [Join Waitlist]
              </Button>
            </form>
          )}

          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
