"use client"
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Providers(
  { children }
) {
  return (
    <>
    <ToastContainer />
    {children}
    </>
  )
}
