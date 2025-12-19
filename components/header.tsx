import Link from "next/link"
import { Logo } from "./logo"

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <Link href="/">
          <Logo className="w-[120px] md:w-[140px]" />
        </Link>
      </header>
    </div>
  )
}
