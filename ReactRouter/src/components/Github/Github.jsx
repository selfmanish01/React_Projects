import React, { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([]); 
    useEffect(() => {
         fetch('https://api.github.com/users/hiteshchaudhary')
          
             .then(response => response.json())
           
            .then(data => {
             
                 console.log(data);
                 
                })
        
                },[])
  
                 return (
                 
            <> 
            
        </>   
    )
}

export default Github