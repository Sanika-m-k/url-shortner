import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route,useLocation } from 'react-router-dom';

import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://wiigvnjincqbtiddqgdu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpaWd2bmppbmNxYnRpZGRxZ2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNDg0NjgsImV4cCI6MjAyMjgyNDQ2OH0.ZDfHvwRdAWxV5oKaphW4gPnfJUAmR2AGASCUt1wKiPw");
function Redirect(){
    const table= 'Links';
    let currentPath = window.location.pathname;
  
      currentPath=currentPath.replace('/','')
      console.log(currentPath);
    const [msg,setMsg]=useState('Redirecting...')
async function fetchKeyInfo() {
    try {
      
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .eq('shorturl',currentPath );
      
      if (error) {
        throw error;
      }
      if(data.length==0){
        setMsg('Data does not exist')
      }
      else{
      console.log(data);
      console.log(data[0].mainurl);

      window.open(data[0].mainurl, '_self');}
    } catch (error) {
      console.error('Error fetching key info:', error.message);
    }
    
  }
 
  useEffect(() => {
    let iscancel = false;
    if(!iscancel){
      fetchKeyInfo()
    }    

    return () => {
      iscancel = true;
    }
  },[])
      
      

    return(
        <>
            
            <h3>{msg}</h3>

            

        </>
    )
}
export default Redirect