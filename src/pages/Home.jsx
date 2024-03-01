import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://wiigvnjincqbtiddqgdu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpaWd2bmppbmNxYnRpZGRxZ2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNDg0NjgsImV4cCI6MjAyMjgyNDQ2OH0.ZDfHvwRdAWxV5oKaphW4gPnfJUAmR2AGASCUt1wKiPw");
function Home(){
  const table= 'Links';
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  
  const dataToInsert=[
    {
      shorturl: inputValue2, mainurl: inputValue1
    }
  ]


    async function update(){
      const { data, error } = await supabase
    .from(table)
    .insert(dataToInsert);

  if (error!=null) {
    console.error('Error inserting data:', error);
  }else{
    alert('Saved')
  }
   
  console.log('Input value 1:', inputValue1);
  console.log('Input value 2:', inputValue2);
    return;
  }
  


  return(
    <>
      <div>
      
        <input
          type="text"
          value={inputValue1}
          onChange={handleInputChange1}
          placeholder="Enter the URL..."
        />
        <input
            type="text"
            value={inputValue2}
            onChange={handleInputChange2}
            placeholder="Enter short URL..."
          />
        <button onClick={()=>update()}>Save</button>
    </div>

</>

    )
  
    }

  
  
   
    

      


export default Home