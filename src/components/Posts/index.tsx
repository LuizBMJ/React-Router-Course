import { Outlet, useParams } from 'react-router'

export const Posts = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <main className="page">
      <div>
        <h1> Posts {id}</h1>
        <p>Welcome to the Posts page!</p>
      </div>

      <Outlet />
    </main>
  )
}
