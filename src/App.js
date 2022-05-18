
import React, { useState } from 'react';
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Icon from './component/icon'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let itemArray=new Array(9).fill("empty")

 const App=(props) => {
const [isCross,setIsCross]=useState(false);
const [winMessage,setWinMessage]=useState('')


const reloadGame = () => {
  setIsCross(false);
  setWinMessage("");
  itemArray.fill("empty", 0, 9);
};

const changeitem = itemindex => {
  if(winMessage){
    return toast.success(winMessage, {
      theme: "colored"
    })
  }

   

  const checkWinMess = () =>{
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }else if 
      (itemArray[0] !== "empty"&&
      itemArray[1] !== "empty"&&
      itemArray[2] !== "empty"&&
      itemArray[3] !== "empty"&&
      itemArray[4] !== "empty"&&
      itemArray[5] !== "empty"&&
      itemArray[6] !== "empty"&&
      itemArray[7] !== "empty"&&
      itemArray[8] !== "empty")
      
    {
      setWinMessage(`Match Draw`);
    }
  
  }


  if(itemArray[itemindex] == 'empty'){
    itemArray[itemindex]= isCross ? 'cross':'circle' ;
    setIsCross(!isCross);
  }else{
    return toast.error("Already Done", {
      theme: "colored"
    })
    ;
  }


  checkWinMess();
}



  return (
    <>
     <Container className='p-5 col-3 ' >
         <ToastContainer position="top-center" />
    
          <div className='grid'>
                        {
                          itemArray.map(( item, index) => 
                            <Card color='danger' onClick={() =>changeitem(index)}>
                              <CardBody className='box'>
                                <Icon name= {item} />
                              </CardBody>
                            </Card>
                          )
                        }
            </div>
          
          <Button color="success"  block onClick={reloadGame}>Reload the game</Button>
            
     </Container>

    </>
  );
};


export default App;