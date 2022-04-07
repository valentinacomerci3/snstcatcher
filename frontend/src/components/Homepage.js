import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Map from './Map/Map'

import { useLoadScript } from "@react-google-maps/api";


const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

const Homepage = () =>  (
    <div>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home"><img src="https://images.vexels.com/media/users/3/245388/isolated/preview/4a014e570ee3a2da3cb00094866be67b-retro-sunset-circle-shape.png" className="App-icon" alt="logo" /></Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">App</Nav.Link>
            </Nav>
            </Container>
        </Navbar>


        <ButtonGroup className="btngrp btn btn-light" aria-label="Basic example">
            <Button variant="light">Rome</Button>
            <Button variant="light">Lisbon</Button>
            <Button variant="light">San Francisco</Button>
        </ButtonGroup>

        <Map location={location} zoomLevel={17} /> 
    </div>
  )


export default Homepage