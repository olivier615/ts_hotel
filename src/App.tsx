// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/all.scss'

import {
  IndexLayout,
  Room,
  Home,
  MemberLayout,
  BookingLayout,
  SignUpPage,
  SignUpPage2,
  LoginPage
} from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexLayout />}>
          <Route index element={<Home />} />
          <Route path="/room" element={<Room />} />
        </Route>
        <Route path="/member" element={<MemberLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/member/register" element={<SignUpPage />} />
          <Route path="/member/registerInfo" element={<SignUpPage2 />} />
        </Route>
        <Route path="/booking" element={<BookingLayout />} />
      </Routes>
    </>
  )
}

export default App
