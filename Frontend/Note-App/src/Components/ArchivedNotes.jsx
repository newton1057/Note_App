import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { MdCreate } from 'react-icons/md';
import { BsFillArchiveFill } from 'react-icons/bs'; 
import { AiFillDelete } from 'react-icons/ai'; 
import { useNavigate } from 'react-router-dom' 
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import Archived_Note from "./Notes/Archived_Note";
import { useState, useEffect } from 'react';

function ArchivedNotes() {
  const navigate = useNavigate();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const getNotes = async () =>{
      const response = await fetch('http://localhost:3001/API_NotesApp/v1/NotesArchived');
      const result = await response.json();
      setNotes(result.body);
    } 

    useEffect(() => {
      getNotes();
    }, []);
  return (
    <>
    <div className='Menu'>
      <h1>Archived notes</h1>
      
      <Button color="default" variant="bordered" onClick={() => navigate("/")} >
        Go back to unarchived notes
      </Button>
    </div>
    <div className='flex justify-between flex-wrap'>
    {notes.map(note => {
            return (
              <Archived_Note function={getNotes} ID_Note={note.ID_Note} Content={note.Content} Title={note.Title} Date={new Date(note.updatedAt).toLocaleString()}/>
            );
          })}
    </div>
    </>
    
  )
}
export default ArchivedNotes