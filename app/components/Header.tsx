
export default function Header() {
  return (
    <header>
      <nav className="headerPadding">
        <button className="brand"><img src="wics.svg"/></button>
        <div className="rightButtons">
        <button><img src="about.svg"/></button> 
        {/* TODO-- add link functionalities */}
        <button><img src="events.svg"/></button>
        <button><img src="programs.svg"/></button>
        <button><img src="eboard.svg"/></button>
        <button><img src="get_connected.svg"/></button>
        </div>
      </nav>
    </header>
  );
}