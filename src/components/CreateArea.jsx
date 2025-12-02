import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";

function CreateArea(props){

    const [isExpanded, setExpanded]=useState();
     const [note, setNotes]=useState(
        {
            title:"",
            content:""
        }
     );
     
     function handleChange(event){
        const {name, value}=event.target;
        setNotes(preValue=>{
            return{
                ...preValue,
                [name]:value
            };
        });

     }
  function submitNote(event){

    props.onAdd(note);
    setNotes({
        title:"",
        content:""
    })
    event.preventDefault();
  }
  function expand(){
    setExpanded(true);
  }
    return(
        <div>
            <form className="create-note">
               {isExpanded&&( <input class="title"type="text" 
                name="title" 
                placeholder="Title"
                value={note.title} 
                onChange={handleChange}                
                />)}
                <textarea class="content" 
                name="content" 
                placeholder="Take a note" 
                rows={isExpanded? 3:1}
                value={note.content}
                onChange={handleChange}
                onClick={expand}
                 ></textarea>
                 <Zoom in={isExpanded}>
            <Fab class="add" 
            onClick={submitNote}><AddIcon/></Fab>
            </Zoom>
            </form>
        </div>
    )
}
export default  CreateArea;