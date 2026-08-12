import { useLocation } from 'react-router'

export const About = () => {
  const { state } = useLocation()

  return (
    <main className="page">
      <div>
        <h1> About </h1>
        <p>Welcome to the About page!</p>
        <p> {state} </p>
      </div>
    </main>
  )
}
