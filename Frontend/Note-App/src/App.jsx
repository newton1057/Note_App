import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";


function App() {
  return (
    <>
    <h1>My notes</h1>
    <Button color="default">
      Create note
    </Button>
    <Button color="default" variant="bordered" >
        Archive notes
      </Button>
      <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Important information</p>
          <p className="text-small text-default-500">Last edit: 10/Jan/2021</p>
        </div>
      </CardHeader>
      <Divider/>
      
      <CardFooter>
      <Button color="default" variant="bordered" >
        Archive notes
      </Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default App
