import { MdBookmark } from "react-icons/md";
const Blog = ({blog,handleAddToBookmark, handleMarkAsRead}) => {
    console.log(blog)
    const {title,cover,reading_time,author_img,author,posted_date,hashtags,id}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picter of the title${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} all=''/>
                    <div className='ml-6'>
                    <h3 className='text-2xl' >{author} </h3>
                     <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button onClick={()=>handleAddToBookmark(blog) } className='ml-2'><MdBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p> 
                {
                  hashtags.map((hash,idx)=><span  key={idx} > <a href=''>#{hash}</a> </span>)
                }
            </p>
               <button onClick={()=>handleMarkAsRead (reading_time,id)} 
               className="text-purple-600 underline font-bold"
               >Mark As Read</button>
        </div>
    );
};

export default Blog;