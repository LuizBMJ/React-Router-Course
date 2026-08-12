import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home/index.tsx'
import './styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { About } from './components/About/index.tsx'
import { Menu } from './components/Menu/index.tsx'
import { Posts } from './components/Posts/index.tsx'
import { Redirect } from './components/Redirect/index.tsx'
import { NotFound } from './components/404NotFound/index.tsx'
import { Post } from './components/Post/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
