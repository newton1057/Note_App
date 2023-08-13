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
import { useState , useEffect} from "react";

function Delete_Notes(props) {
    const [id_note, setID_Note] = useState('');
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    useEffect(() => {
      setID_Note(props.ID_Note);
    },[])

    function Delete_Note(){
      let Data_Note = {
          ID_Note: id_note,
      }
          fetch('http://localhost:3001/API_NotesApp/v1/Note', {
        method: "DELETE",
        body: JSON.stringify(Data_Note),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json));
  
      alert("Note delete");

      props.function();
      onOpenChange();
      //setTitle('');
      //setContent('');
    }
  return (
    <>
    
        <Button color="default" variant="bordered" onPress={onOpen} >
          <AiFillDelete />
        </Button>
        
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete note</ModalHeader>
              <ModalBody>
                
              <p>Are you sure you want to delete this note?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  No
                </Button>
                <Button color="success" variant="bordered" onClick={Delete_Note}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    
  )
}
export default Delete_Notes