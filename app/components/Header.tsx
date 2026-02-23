
export default function Header() {
  return (
    <header>
      <nav className="headerPadding">
        <button className="brand"><img src="wics.svg"/></button>
        <div className="rightButtons">
        <button>About</button> 
        {/* TODO-- ADD THE SVGS of this and functionalities */}
        <button>Events</button>
        <button>Programs</button>
        <button>E-Board</button>
        <button><img src="get_connected.svg"/></button>
        </div>
      </nav>
    </header>
  );
}