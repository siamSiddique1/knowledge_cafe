import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'
function App() {
const [bookmarks,setBookmarks] = useState([]);
const [readingTime,setReadingTime] = useState(0);


const handleAddToBookmark =blog =>{
const newBookmarks = [...bookmarks,blog];
setBookmarks(newBookmarks);
}
 
const handleMarkAsRead =(id,time) =>{
  const newReadingTime = readingTime+time;
  setReadingTime(newReadingTime); 
  // remove the read blog from bookmark
console.log('remove bookmark',id)
  
}


  return (
    <>
    <Header></Header> 
    <div className='md:flex max-w-7xl mx-auto border-4 border-red-500'>
    <Blogs handleAddToBookmark={handleAddToBookmark}  handleMarkAsRead={handleMarkAsRead} ></Blogs>
    <Bookmarks bookmarks ={bookmarks} readingTime={readingTime
    
    } ></Bookmarks>

    </div>
       </>
  )
}

export default App
