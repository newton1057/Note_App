import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { MdCreate } from 'react-icons/md';
import { BsFillArchiveFill } from 'react-icons/bs'; 
import { AiFillDelete } from 'react-icons/ai'; 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MyNotes from './Components/MyNotes';
import ArchivedNotes from './Components/ArchivedNotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyNotes/>} />
        <Route path='/archived' element={<ArchivedNotes/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
