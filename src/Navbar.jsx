// <a>
// 1. create a function with jsx as a return
const Navbar = () => {
  return (
    <header className="nav">
      <nav className="flex light-bg justify-space">
        <div className="logo white">
          <a href="/">Skander Blaiti</a>
        </div>
        <ul className="flex white">
          <li className="green">
            <a href="/">{"< Home />"}</a>
          </li>
          <li>
            <a href="/#about">About Me.</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// 2. export it
export default Navbar;
