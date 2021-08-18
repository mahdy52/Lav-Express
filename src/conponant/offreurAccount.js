import { Nav,Card,Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../action/user";

function Offer() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducerStore.datas);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log(user, "did we ?");

  return (
    <div>
     
       

      
 <div className="sidenav">
  <a href="javascript:void(0)">
    <i className="fa fa-user-tie"></i>
    <span>Administration</span>
  </a>

</div>  





      {user.map((user) => (<div className="Card">
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/13/10/16/mobile-home-156914__340.png" />
        <Card.Body>
        <Card.Title><h2>{user.description_Service}</h2></Card.Title>
          <p>{user.date}</p>
          <h3>{user.adress}</h3>
          <h4>{user.car_description}</h4>
          <h5>{user.phone}</h5>
          <i className="fa fa-delete"></i>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>

        </div>
        

      ))}
    </div>
  );
}
export default Offer;
