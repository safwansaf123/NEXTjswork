<<<<<<< HEAD
import React from "react";


const Student = ({params} : { params : { studentlist : string} }) => {
    
    console.log(params);
    
    return (

        <div>
<h1>STUDENT DETAILS</h1>
<h3>Name: {params.studentlist}</h3>

        </div>
    )
}

=======
import React from "react";


const Student = ({params} : { params : { studentlist : string} }) => {
    
    console.log(params);
    
    return (

        <div>
<h1>STUDENT DETAILS</h1>
<h3>Name: {params.studentlist}</h3>

        </div>
    )
}

>>>>>>> ebfbd85637782349cfb9bf658b403c372dc2d5c1
export default Student