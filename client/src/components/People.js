import React from 'react';
import useSWR from "swr";

function People() {
   const {data, error, isLoading} = useSWR("/users");

   if (error) return <div>Failed</div>
   if (isLoading) return <div>laoding...</div>
   console.log(data.success, data.message);
  return (
    <div>
        {
            data.message.map ((user, index) => {
                return <div key ={index}>{user.lastname}</div>
            })
        }
    </div>
  )
}

export default People