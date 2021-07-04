import React from 'react'
import PropTypes from 'prop-types'




const Data = props => {
    const showName = () =>{alert("ok")}
    const getStyle = {background: "black", color: "white", alignItems:"center", textAlign:"center", marginTop:"100PX", height:"400px"}
    const hrObject = { width: "300px", color:"white"}
const btnStyle = {width:"100px", height: "50px", color: "white", background:"green", outline:"none", borderLine:"none" }

    return (
        <div className="contain" style={getStyle}>
            <div >
              {props.children} 
            </div>
            <hr style={hrObject}></hr>
            <div><h1 >FullName: {props.FullName}</h1></div>
            <div><h1>Bio: {props.Bio}</h1></div>
            <div><h1>Profession: {props.Profession}</h1></div>
            <button className="btn" onClick={showName} style={btnStyle}>Click Me</button>
        </div>
    )
}

Data.propTypes = {
FullName: PropTypes.string,
Bio: PropTypes.string,
Profession: PropTypes.string
}

Data.defaultProps={
    FullName: "Lawal omolola",
    Bio: "The Bulb Trainee",
    Profession: "Software Engineer"
}

export default Data


