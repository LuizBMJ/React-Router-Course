import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

export const Redirect = () => {
  const [countdown, setCountdown] = useState(5)
  const setCountdownRef = useRef(0)
  const navigate = useNavigate()

  useEffect(() => {
    setCountdownRef.current = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(setCountdownRef.current)
          navigate('/', {
            state: 'This is the state: Redirected from /redirect',
          })
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      window.clearInterval(setCountdownRef.current)
    }
  }, [navigate])

  return (
    <>
      <div>
        <h1> Redirect </h1>
        <p>You are being redirected in {countdown} seconds...</p>
      </div>
    </>
  )
}
