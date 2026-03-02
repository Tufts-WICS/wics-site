
import Link from "next/link";

export default function Header() {
  const navItems = [
    { href: "/", src: "/about.svg", alt: "About" },
    { href: "/events", src: "/events.svg", alt: "Events" },
    { href: "/programs", src: "/programs.svg", alt: "Programs" },
    { href: "/eboard", src: "/eboard.svg", alt: "Eboard" },
    { href: "/get-connected", src: "/get_connected.svg", alt: "Get Connected" },
  ];

  return (
    <header>
      <nav className="headerPadding">
        <Link href="/"><img src="/WiCS.svg" alt="WiCS" /></Link>
        <div className="rightLink">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <img src={item.src} alt={item.alt} />
            </Link>
          ))}
        </div>

        <details className="mobileMenu">
          <summary aria-label="Open navigation menu">☰</summary>
          <div className="mobileMenuPanel">
            {navItems.map((item) => (
              <Link key={`mobile-${item.href}`} href={item.href}>
                <img src={item.src} alt={item.alt} />
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}