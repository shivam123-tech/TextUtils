import React from "react";
import pic1 from '../components/shivam.jpeg'

function About(props) {
  let myStyle={
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'black':'white',
    border : '2px solid',
    borderColor : props.mode === 'dark'?'white':'black',
  }
  return (
    <>
      <div className="card my-3" style={myStyle}>
        <div className="card-body">
          Welcome to the section dedicated to textutil, a powerful command-line
          utility for macOS that allows you to manipulate and transform plain
          text files with ease. In this section, we will explore the various
          features and capabilities of textutil, and provide you with tips and
          tricks to help you get the most out of this versatile tool. Firstly,
          we will cover the basic usage of textutil, including how to convert
          between different file formats such as RTF, HTML, and plain text, and
          how to perform simple transformations like sorting and filtering text.
          We will also show you how to use textutil to concatenate multiple
          files into a single document, and how to extract specific sections of
          a file.
        </div>
        <img src={pic1} className="rounded mx-auto d-block" height="100" width="100" alt="Image Not reload"/>
        <h5 className="rounded mx-auto d-block">Creater</h5>
      </div>
    
    </>
  );
}

export default About;
