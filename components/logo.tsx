import type React from "react"
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 140 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="0" y="18" fill="white" fontFamily="monospace" fontSize="18" fontWeight="600" letterSpacing="-0.5">
        POLYCLICKS
      </text>
    </svg>
  )
}
