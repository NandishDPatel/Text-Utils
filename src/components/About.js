import React, { useState } from "react";
import './../index.css';

export default function About(props) {
  
    const [mode,setMode] = useState("Dark Mode");
    // const [myStyle,setMyStyle] = useState({
    //     backgroundColor : 'white',
    //     color : 'black',
        
    // });

    let myStyle = {
      color: props.mode === 'dark' ? 'white' : 'black',
      backgroundColor : props.mode === 'dark' ? '#234542' : 'white',
      border: '1px solid',
      borderColor : props.mode === 'dark' ? '#234542' : 'white', 
    }

    // const handleMode = () => {
    //     if(mode==="Dark Mode"){
    //         setMode("White Mode");
    //         setMyStyle({
    //             backgroundColor : 'black',
    //             color : 'white',
    //             border: '1px solid white'
    //         })

    //     } else{
    //         setMode("Dark Mode");
    //         setMyStyle({
    //             backgroundColor : 'white',
    //             color : 'black',
    //         })
    //     }
                
    // }
  
    return (
    <>
      <div className="container py-2" style={myStyle}>
       
        <div className="accordion" id="accordionExample">
        <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>About Us</h1>
          <div className="accordion-item" >
            <h2 className="accordion-header">
              <button
                className="accordion-button" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3 pb-3">
        <button className="btn btn-primary" onClick={handleMode}>{mode}</button>
        </div> */}
        
      </div>
    </>
  );
}
