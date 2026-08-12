import { NavLink } from 'react-router'

export const Menu = () => {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <ul className="nav-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" state="This is the state: About page">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/posts/10">Post 10</NavLink>
          </li>
          <li>
            <NavLink to="/redirect">Redirect</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
