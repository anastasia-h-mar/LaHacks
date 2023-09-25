import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from 'next/image'
import { faClipboardList, faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'LAHS Hacks Dashboard',
  description: 'A demonstration app of my efforts to learn NodeJS/NextJS/TailwindCSS and hopefully GOOG Firebase',
}

type NavItemProps = {
  title: string
  url: string 
  isSelected: boolean
}

function NavItem(props: NavItemProps) {
  const {title, url, isSelected} = props
  console.log(props)
  return (
    <li>
      <a className={`card-contents text-2xl hover:text-teal-500 ${props.isSelected ? "text-red-500" : ""}`} href={props.url}>{props.title}</a>
    </li> 
  )
}

type NavbarProps = {
  pageId: string
  segment: string
}

function Navbar(props:NavbarProps) {
  // console.log(props)
  return (
    <div className="card">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <NavItem title={"Home"} url={"/"} />
          <NavItem title={"About Me"} url={"/aboutme"} />
          <NavItem title={"Projects"} url={"/projects"}  />
          <NavItem title={"Essays"} url={"/essays"} />
          <NavItem title={"Dashboard"} url={"/dashboard"} isSelected={props.segment=="dashboard"} />
          <NavItem title={"Temp"} url={"/temp"} />
        </ul>
      </nav>
    </div>
  )
}

type LHBarProps = {
  title: string
  faIconName:string
  url: string 
}

function LHBarItem(props: LHBarProps) {
  const {title, faIconName, url} = props
  // console.log(props)
  return (
    <li>
      <Link className="flex items-center gap-3 py-2" href={url}>
        <span className=" h-5 w-5">
          <FontAwesomeIcon icon={faIconName} />
        </span>
        <span>{title}</span>
    </Link>
  </li>
  )
}

  /* <Navbar pageId={children.props.pageId} segment={children.props.childProp.segment} /> */

export default function Layout({ children }: any) {

  return (
    <>
    <div className="h-screen w-full flex flex-col lg:flex-row" data-id="1">

      <nav className="h-screen w-full lg:w-64 bg-gray-800 text-white p-5 fixed" data-id="2">
        <h1 className="text-2xl mb-5" data-id="3">
          <Link className="flex items-center gap-3 py-2" href="/">
          <Image
            src="/HacksLogo-removebg-preview.png"
            width={300}
            height={200}
            alt="LAHS Hackathon Dashboard 2024"
          />
          </Link>
        </h1>
        <ul className="space-y-2" data-id="4">

          <LHBarItem title={"Home"} faIconName={faHome} url={"/"} />
          <LHBarItem title={"Schedule"} faIconName={faClipboardList} url={"/schedule"} />
          <LHBarItem title={"Map"} faIconName={faMap} url={"/map"} />
          <LHBarItem title={"Prizes"} faIconName={faAward} url={"/prizes"} />
          <LHBarItem title={"Registration"} faIconName={faAddressCard} url={"/registration"} />
          <LHBarItem title={"Teams"} faIconName={faUsers} url={"/teams"} />

        </ul>
      </nav>

      <main className="flex-1 p-5">{children}
      </main>
    </div>
    </>
  )
}
