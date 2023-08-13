import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { MdCreate } from 'react-icons/md';
import { BsFillArchiveFill } from 'react-icons/bs'; 
import { AiFillDelete } from 'react-icons/ai'; 
import { useNavigate } from 'react-router-dom' 
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import Archived_Note from "./Notes/Archived_Note";

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
      <Archived_Note></Archived_Note>
    </div>
    </>
    
  )
}
export default ArchivedNotes