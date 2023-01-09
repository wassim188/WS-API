import React,{useEffect,useState} from 'react'
import "./style.css";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import UsersItem from './UsersItem';
import {useDispatch} from "react-redux";
import {getUsers} from "../redux/actions";
import {useSelector} from "react-redux";

function Users() {
  const users = useSelector((store) => store.AppReducer.users);
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getUsers())
  }, [])
  
  return (
    <div className='users-container'>
    <div id='users'>{
      users ? 
      users?.map((user,index) => (
    <UsersItem key={index} {...user} />
    ))
    : <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }
    </div>
    </div>
  )
}

export default Users