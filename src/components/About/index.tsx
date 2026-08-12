import { useLocation } from 'react-router'

export const About = () => {
  const { state } = useLocation()

  return (
    <>
      <div>
        <h1> About </h1>
        <p>Welcome to the About page!</p>
        <p> {state} </p>
      </div>
    </>
  )
}
