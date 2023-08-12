import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import { MdCreate } from 'react-icons/md';
import { BsFillArchiveFill } from 'react-icons/bs'; 
import { AiFillDelete } from 'react-icons/ai'; 
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'      
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import Delete_Notes from "./Modals/Delete_Note";

function MyNotes() {
    const navigate = useNavigate();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    

  return (
    <>
    <div className='Menu'>
      <h1>My notes</h1>
      <Button color="default" onPress={onOpen}>
        Create note
      </Button>
      
      
      <Button color="default" variant="bordered" onClick={() => navigate("/archived")}>
        Archive notes
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
        
        <Delete_Notes></Delete_Notes>
        
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
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create/Edit note</ModalHeader>
              <ModalBody>
                
                <Input type="text" label="Title" />
                <Textarea
                    placeholder="Enter your content"
                    
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Cancel
                </Button>
                <Button color="success" variant="bordered" >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      
    </>
    
  )
}
export default MyNotes