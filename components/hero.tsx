"use client"

import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"
import { WaitlistDialog } from "./waitlist-dialog"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="flex flex-col h-svh">
      <GL hovering={hovering} />

      <div className="pt-32 md:pt-44 pb-16 text-center relative">
        <Pill>COMING SOON</Pill>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient mt-6">
          Polymarket edge, <br />
          <i className="font-light">quantified.</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[480px] mx-auto">
          Institutional-grade analytics for prediction markets.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button
            className="max-sm:hidden"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => setDialogOpen(true)}
          >
            [Join Waitlist]
          </Button>
          <Button
            size="sm"
            className="sm:hidden"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => setDialogOpen(true)}
          >
            [Join Waitlist]
          </Button>
        </div>
      </div>

      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  )
}
