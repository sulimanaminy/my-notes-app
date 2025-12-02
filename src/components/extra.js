// import React, {useState} from 'react'
// import ReactDOM from 'react';
// // import Header from './Header';
// // import Footer from './Footer';
// // import Note from './Note';
// // import Notes from './notes';


// // import Contacts from './Contacts';
// // import Card from './Card';
// // import Avatar from './Avatar';


// // import Form from './Form';

// // import Login from './Login';

// // import cars from './practice'

// // function createNote(noteItem){
// //     return (
// //     <Note
// //    key={noteItem.key}
// //    title={noteItem.title}
// //    content={noteItem.content}
// // />
// //     ); 
// // }
// // var isRegetered='true'; 


// // const [honda,tesla ]=cars;
// // console.log(cars);
// // const {speedState:{topSpeed}}=honda;
// // const {speedState:{topSpeed:teslaTopSpeed}}=tesla;
// // const {colorByPopularity:[hondaTopColor]}=honda;
// // const {colorByPopularity:[teslaTopColor]}=tesla;

// // const [tesla, speedState{teslaTopSpeed}]


// function App(){

// const [fullName, setFullName]={
//      fName:"",
//      lName:""
// }
// // const [headingText, submitText]=useState("Hello");
// // const [isMouseOver, setMouseOver]=useState("false");
// // function clickHandle(){
// //      submitText("Submited");
// // }
// // function mouseOverHandling(){
// //    console.log("Mouse is over");
// //     setMouseOver("true");     
    
// // }

// // function mouseOutHandling(){
// //    setMouseOver("false"); 
    
// // }

// // function handleChange(event){
// //      console.log(event.target.value);
// //      setName(event.target.value);
   
   
// // }

// // function handleClick(event){
// //      setText(name);
// //      event.preventDefault();
// // }

//      // setInterval(updateTime,1000);

// //   const now=new Date().toLocaleTimeString();
     
// //      const [time, setTime]=useState(now);
// //      function updateTime(){
// //           const newTime=new Date().toLocaleTimeString();
// //       setTime(newTime);
// //      }

// //   const [count, setCount]=useState(12);
// //   function increase(){
// //      setCount(count+1)
// //   }
// //   function decrease(){
// //      setCount(count-1)
// //   }
   
//    function handleChange(event){
//      const [value, name]=event.target;
 
//      setFullName(previousValue=>{
//           if(name===fName)
//          {
//           return{
//                fName:value,
//                lName:previousValue
//            }
//          }
//           else if(name===lName){
//                return{

//                     fName:previousValue,
//                     lName:value
//                }
//           }
//      });
     


 
//     return (
//     <div>
   
//    <h1>Hello {fullName.value} {fullName.value}</h1>
//    <form>
    
//     <input 
//     type='text'
//     placeholder='what is your name?'
//     name='fName'
//     value={fName}
//     />
//     <input
//     type="text" 
//     placeholder='what is last name?'
//     name='lName'
//     value={lName}
//     />

//      <button type='submit'>Submit</button>

//      </form>
     
// </div>);












//     {/* <table>
//      <th>Brand</th>
//      <th>Top Speed</th>
//      <th>Top Color</th>
//      <tr>
//           <td>{tesla.model}</td>
//           <td>{teslaTopSpeed}</td>
//           <td>{teslaTopColor}</td>
//      </tr>
//      <tr>
//           <td>{honda.model}</td>
//           <td>{topSpeed}</td>
//           <td>{hondaTopColor}</td>
//      </tr>
//     </table> */}






//      {/* <h1>{time}</h1>
//      <button onClick={updateTime}>getTime</button> */}
//      {/* <h1>{count}</h1>
//      <button onClick={increase}>+</button>
//      <button onClick={decrease}>-</button> */}
        

//    {/* <Form
// isRegetered={isRegetered}
//    /> */}



//         {/* {isLoggedIn ?<Login/> : <h1>Why are you still working</h1>} */}
//         {/* {currentHour>12 &&<h1>why are still working?</h1>} */}

// {/* <Header/>

// {Notes.map(createNote)};


// <Footer/> */}


// {/*
//            <h1 className='heading'>Contacts me</h1>
//            {Contacts.map(contact=>(
//     <Card
//      id={contact.id}
//      key={contact.id}
//      name={contact.name}
//      imgUrl={contact.imgUrl}
//      email={contact.email}
//      phone={contact.phone}

// />
           
//            ))}; */}
     
   
  
// {/*            
//             <Avatar 
//             img={Avatar.img}
//             />

// <Card 
// name={Contacts[0].name}
// imgUrl={Contacts[0].imgUrl}
// email={Contacts[0].email}
// phone={Contacts[0].phone}
// />

//      <Card 
// name={Contacts[1].name}
// imgUrl={Contacts[1].imgUrl}
// email={Contacts[1].email}
// phone={Contacts[1].phone}
// />

// <Card 
// name={Contacts[2].name}
// imgUrl={Contacts[2].imgUrl}
// email={Contacts[2].email}
// phone={Contacts[2].phone}
// /> */}
  





// export default App;




// function App(){
     
  
//      const [fullContact, setContact]=useState({
//           fName:"",
//           lName:"",
//           email:""
//      });

//     function handleChange(event){
     
//      const {name, value,email}=event.target;
 
//        setContact(prevValue=>{
//           return ({
//                ...prevValue,
//                [name]:value
//           })
//        });

   
          
            
//     }
  
  

// return <div>

// <form>
//      <h1> Hello {fullContact.fName} {fullContact.lName} </h1>
//      <p>{fullContact.email}</p>

//      <input type="text"
//      name='fName'
//      placeholder='What is your first name?'
//      onChange={handleChange}
//      value={fullContact.fName}
//       />
//         <input type="text"
//      name='lName'
//      placeholder='What is your last name?'
//      onChange={handleChange}
//      value={fullContact.lName}
//       />
//           <input type="email"
//      name='email'
//      placeholder='What is your email?'
//      onChange={handleChange}
//      value={fullContact.email}
//       />

//       <input type="submit" />
// </form>

// </div>
// }



// function App(){

//      const [fullContact, setContact]=useState({
//           fName:"",
//           lName:"",
//           email:""

//      });

//     function handleChange(event){
     
//      const {name, value,email}=event.target;
 
//        setContact(prevValue=>{
   
//           return ({
//                ...prevValue,
//                [name]:value
//           })
//        });

   
          
            
//     }
  
  

// return <div>

// <form>
//      <h1> Hello {fullContact.fName} {fullContact.lName} </h1>
//      <p>{fullContact.email}</p>

//      <input type="text"
//      name='fName'
//      placeholder='What is your first name?'
//      onChange={handleChange}
//      value={fullContact.fName}
//       />
//         <input type="text"
//      name='lName'
//      placeholder='What is your last name?'
//      onChange={handleChange}
//      value={fullContact.lName}
//       />
//           <input type="email"
//      name='email'
//      placeholder='What is your email?'
//      onChange={handleChange}
//      value={fullContact.email}
//       />

//       <input type="submit" />
// </form>

// </div>
// }


// Add note 
// function App() {
  
//     const [inputText, setInputText]=useState("");
//     const [items, setItem]=useState([]);
       
//    function handleChange(event){
//     const newValue=event.target.value;
//     setInputText(newValue);
//     console.log(newValue);    
   
//    }

//     function addItem(){
       
//          setItem(prevItem=>{
//               return [...prevItem, inputText];
//          });
      
//     }
  
 
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
    
//             onChange={handleChange}             
//             placeholder="add item"
//             value={inputText}
//           />
//          <button onClick={addItem}>Add</button>
//         </form>
//         <div>
   
     

//           <ul>
                  
//             {items.map(todoItem => <toDoItem 
//          text={inputText}
//            /> )}
//           </ul>
//         </div>
//       </div>
//     );
//   }
















