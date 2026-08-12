import { Link } from 'react-router'

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about" state="This is the state: About page">
              About
            </Link>
            <Link to="/posts">Posts</Link>
            <Link to="/posts/10">Post 10</Link>
            <Link to="/redirect">Redirect</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
