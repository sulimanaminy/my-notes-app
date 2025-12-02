import React, { useState } from "react";
// import ReactDOM from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import Notes from './notes';
import CreateArea from "./CreateArea";




function App() {
  const [notes, setNotes]=useState([]);
  
    function addNote(newNote){
      
      setNotes(prevNote=>{
        return[ ...prevNote,newNote];
      });
     
    }
    function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem, index)=>{
        return index !== id;
      })
    })
    }

    function editeNote(){
   
     
  

    }
     return (
       <div>
       <Header/>
       <CreateArea
       onAdd={addNote}/> 
       {notes.map((notesItem, index)=>{
        return<Note 
       id={index}
       key={index}
        title={notesItem.title}
        content={notesItem.content}
       onDelete={deleteNote}
       onEdite={editeNote}
        />;
       })} 
        <Footer/>
       </div>
     );
   }


export default App;
