import { useLocation } from 'react-router'

export const Home = () => {
  const { state } = useLocation() as { state: string }

  return (
    <>
      <div>
        <h1> Home </h1>
        <p>Welcome to the Home page!</p>
        <p> {state}</p>
      </div>
    </>
  )
}
