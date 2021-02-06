
import React, { useState } from "react";
import Icon from "./components/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


const App = () => {
  const [isCross,
    setIsCross] = useState(false)
  const [winMessage,
    setWinMessage] = useState('')
  
    const [itemArray,setItemArray] = useState(new Array(9).fill('')) 

  //To reload the Game
  const reloadGame = () => {
    setIsCross(false)
    setWinMessage('')
    itemArray.fill('',0,9)
  }

  //To check winner
  const checkWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== ""
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  }

  const changeIcon = (itemNumber) => {
    if(winMessage)
      return toast(winMessage,{type:"success"}) 

    if(itemArray[itemNumber] === ''){
      let tempArray = itemArray
      tempArray[itemNumber]  = isCross ? "cross":"circle"
      setItemArray(tempArray)
      setIsCross(!isCross)
    }else{
      return toast("Already Filled",{type:"error"})
    }
    checkWinner()

  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
             <h1 className="text-success text-uppercase text-center">
               {winMessage}
             </h1>
             <Button color="success" block onClick={reloadGame}>Reload The Games</Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross?"Cross":"Circle"}'s turn
            </h1> 
          )}
          <div className="grid">
            {itemArray.map((item, index) =>(
                <Card key={index} onClick={ () => (changeIcon(index)) } color="warning">
                  <CardBody className="box">
                    <Icon name={item}/>
                  </CardBody>
                </Card>
              ))}
          </div>
        </Col>
      </Row>
    </Container>

  );
};

export default App;
