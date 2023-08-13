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
import Note from "./Notes/Note"
import { useState, useEffect } from 'react';

function MyNotes() {
    const navigate = useNavigate();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const getNotes = async () =>{
      const response = await fetch('http://localhost:3001/API_NotesApp/v1/Notes');
      const result = await response.json();
      setNotes(result.body);
    } 

  useEffect(() => {
    getNotes();
  }, []);

  function Created_Note(){
    let Data_Note = {
      Title: title,
      Content: content
    }
        fetch('http://localhost:3001/API_NotesApp/v1/Note', {
      method: "POST",
      body: JSON.stringify(Data_Note),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));

    alert("Note created");
    getNotes();
    onOpenChange();
    setTitle('');
    setContent('');
  }
    
  

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
    {notes.map(note => {
            return (
              <Note function={getNotes} ID_Note={note.ID_Note} Title={note.Title} Content={note.Content} Date={new Date(note.updatedAt).toLocaleString()}/>
            );
          })}
      
    </div>

    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create/Edit note</ModalHeader>
              <ModalBody>
                <Input type="text" label="Title" name="Content" value= {title} onChange={event => {setTitle (event.target.value);}}/>
                <Textarea
                    placeholder="Enter your content" name="Content" value={content} onChange={event => {setContent (event.target.value);}}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Cancel
                </Button>
                <Button color="success" variant="bordered" onClick={Created_Note}>
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