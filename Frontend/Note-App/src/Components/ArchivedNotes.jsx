import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { MdCreate } from 'react-icons/md';
import { BsFillArchiveFill } from 'react-icons/bs'; 
import { AiFillDelete } from 'react-icons/ai'; 
import { useNavigate } from 'react-router-dom' 
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";


function ArchivedNotes() {
  const navigate = useNavigate();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div className='Menu'>
      <h1>Archived notes</h1>
      
      <Button color="default" variant="bordered" onClick={() => navigate("/")} >
        Go back to unarchived notes
      </Button>
    </div>
    <div className='flex justify-between flex-wrap'>
      <Card className='Note'>
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
        
        <CardFooter className='justify-end gap-2'>
        <Button color="default" variant="bordered" >
          <BsFillArchiveFill />
        </Button>
        <Button color="default" variant="bordered" >
          <MdCreate />
        </Button>
        <Button color="default" variant="bordered" >
          <AiFillDelete />
        </Button>
        
        </CardFooter>
      </Card>
      <Card className='Note'>
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
        
        <CardFooter className='justify-end gap-2'>
        <Button color="default" variant="bordered" >
          <BsFillArchiveFill />
        </Button>
        <Button color="default" variant="bordered" >
          <MdCreate />
        </Button>
        <Button color="default" variant="bordered" >
          <AiFillDelete />
        </Button>
        
        </CardFooter>
      </Card>
      <Card className='Note'>
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
        
        <CardFooter className='justify-end gap-2'>
        <Button color="default" variant="bordered" >
          <BsFillArchiveFill />
        </Button>
        <Button color="default" variant="bordered" >
          <MdCreate />
        </Button>
        <Button color="default" variant="bordered" >
          <AiFillDelete />
        </Button>
        
        </CardFooter>
      </Card>
    </div>
    </>
    
  )
}
export default ArchivedNotes