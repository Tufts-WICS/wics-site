
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="headerPadding">
        <Link href = "/" className="brand"><img src="wics.svg"/></Link>
        <div className="rightLink">
        <Link href = "/"><img src="about.svg"/></Link> 
        <Link href = "/events"><img src="events.svg"/></Link>
        <Link href = "/programs"><img src="programs.svg"/></Link>
        <Link href = "/eboard"><img src="eboard.svg"/></Link>
        <Link href = "/get-connected"><img src="get_connected.svg"/></Link>
        </div>
      </nav>
    </header>
  );
}