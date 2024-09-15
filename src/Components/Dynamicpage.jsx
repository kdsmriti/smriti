import React from 'react';
import { useParams } from 'react-router-dom';
function DynamicPage(){
    const{id}=useParams()
    return(
   <div>
    <h1 className='text-5xl text-center'>This is dynamic</h1>
    </div>
    )
}
export default DynamicPage