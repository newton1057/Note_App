import Delete_Notes from "../Modals/Delete_Note"

import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import { MdCreate } from 'react-icons/md';
import { BsFillArchiveFill } from 'react-icons/bs'; 
import { BiArchiveOut } from 'react-icons/bi'; 

import { AiFillDelete } from 'react-icons/ai'; 
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'      
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import { useState , useEffect} from "react";


function Archived_Note(props) {
    const [id_note, setID_Note] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    useEffect(() => {
        setID_Note(props.ID_Note);
        setTitle(props.Title);
        setContent(props.Content);
      },[])

      function Update_Note(){
        let Data_Note = {
            ID_Note: id_note,
          Title: title,
          Content: content
        }
            fetch('http://localhost:3001/API_NotesApp/v1/Note', {
          method: "PATCH",
          body: JSON.stringify(Data_Note),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
    
        alert("Note update");
        props.function();
        onOpenChange();
        //setTitle('');
        //setContent('');
      }

    function Desarchived_Note(){
        let Data_Note = {
            ID_Note: id_note,
            isArchived: false,
        }
            fetch('http://localhost:3001/API_NotesApp/v1/NoteArchived', {
          method: "PATCH",
          body: JSON.stringify(Data_Note),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
    
        alert("Note desarchived");
        props.function();
        //onOpenChange();
        //setTitle('');
        //setContent('');
      }
    return(
        <>
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
                    <p className="text-md">{props.Title}</p>
                    <p className="text-small text-default-500">Last edit: {props.Date}</p>
                </div>
            </CardHeader>
            <Divider/>
            
            <CardFooter className='justify-end gap-2'>
                <Button color="default" variant="bordered" onClick={Desarchived_Note}>
                <BiArchiveOut />
                </Button>
                <Button color="default" variant="bordered" onPress={onOpen}>
                <MdCreate />
                </Button>
                <Delete_Notes function={props.function} ID_Note={props.ID_Note}/>
            </CardFooter>
        </Card>
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
                <Button color="success" variant="bordered" onClick={Update_Note} >
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


export default Archived_Note