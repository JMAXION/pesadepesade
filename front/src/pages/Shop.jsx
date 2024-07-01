import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";



export default function Shop() {
  const [status, setStatus] = useState({
    all : true,
    parfum : false
  })
  
  
  function handleChange(e){
    if(e === 'all'){
      setStatus({all : !status.all})
      setStatus({parfum : !status.parfum})
    }
    if(e === 'parfum'){
      setStatus({parfum : !status.parfum})
      setStatus({all : !status.all})
     
    }

 

    console.log(status.all);
    console.log(status.parfum);
  }
  return (
  <div>
    { status.all &&
    <div onClick={(e)=>handleChange("all")}>
       <Product name="all"/> 
    </div>
    }

    { status.parfum &&
    <div onClick={(e)=>handleChange("parfum")}>
            <Product name="parfum"/> 
    </div>
    }

  </div>
  );
}
