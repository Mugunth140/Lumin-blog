import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout';
import Home from './pages/Home'
import PostDetailes from './pages/PostDetailes'
import Register from './pages/Register'
import Login from './pages/Login';
import Profile from './pages/Profile'
import Create from './pages/Create'
import Category from './pages/Category'
import Author from './pages/Author'
import AuthorPost from './pages/AuthorPost'
import Dashboard from './pages/Dashboard'
import Edit from './pages/Edit'
import Logout from './pages/Logout'

const router = createBrowserRouter([
  { path: '/', 
    element: <Layout />,
    errorElement: <ErrorPage />,    
    children: [
      { index: true, element: <Home />},
      { path: 'post/:id', element: <PostDetailes/> },
      { path:'register', element: <Register />},
      { path:'login', element: <Login />},
      { path:'profile/:id', element: <Profile />},
      { path:'create', element: <Create />},
      { path:'post/categories/:category', element: <Category />},
      { path:'author', element: <Author />},
      { path:'post/users/:id', element: <AuthorPost />},
      { path:'mypost/:id', element: <Dashboard />},
      { path:'post/:id/edit', element: <Edit />},
      { path:'logout', element: <Logout />},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router} />
  </React.StrictMode>,
)
