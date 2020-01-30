import React, { useState, useEffect } from 'react';

const DescriptionProduct = (props) =>{
    const [description, setDescription] = useState(props.description)
    return (
      <>
        <div className="fillDescription" dangerouslySetInnerHTML={{__html: description.substr(0,300) }}></div>
      </>
    )

  }

  export default DescriptionProduct;
