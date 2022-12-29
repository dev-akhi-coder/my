import React, { useEffect, useState } from 'react'
import "./todo.css"
import { AiFillDelete,AiFillEdit} from 'react-icons/ai';
import { getDatabase,ref, set,push,onValue, remove, update  } from "firebase/database";
const Todo = () => {
    

    const db = getDatabase();
    const[todo,setTodo] = useState ("")
    const[todoshow,setTodoshow] = useState ([])
    const[todoerr,setTodoerr] = useState ("")
    const[updatetext,setUpdatetext] = useState (false)
    const[editid,setEditid] = useState ("")
    const[editvalue,setEditvalue] = useState ("")
    let handleInput = (e) => {
        setTodo(e.target.value);
    }
    
    let handleSubmit = (e) => {
        e.preventDefault()
        if(todo){
            set(push(ref(db, 'todo')), {
               todo:todo
                
              });
              setTodoerr("Successfully Submitted")
              setTodo("")
        }else{
            setTodoerr("Please Enter Your Value")
        }
    }
    useEffect(() =>{
        
        const starCountRef = ref(db, 'todo');
            onValue(starCountRef, (snapshot) => {
                let todoarr = []
                snapshot.forEach((item) =>{
                    todoarr.push({...item.val(), key:item.key});
                })     
                setTodoshow(todoarr)
        });
    },[db])

    let handleDelete = (id)=>{
      remove (ref(db,"todo/" +id))
    }

    let handleEdit = (id, value)=>{
      setUpdatetext(!updatetext)
      setEditid(id);
      setEditvalue(value);
      
    }

    let handleUpload = (e)=>{
      setEditvalue(e.target.value)
    }
    
    let handlefinalUpload = (id,value)=>{
      update (ref(db,"todo/" +id),{
        todo:value
      }).then(()=>{
        setUpdatetext(false)
      })
    }


  return (
    <div className='container py-5'>
       <h2 style={{textAlign:"center",paddingTop:"20px"}}>Todo Page</h2>
        <div className='text-center'>
            <form>
                <input type="text" placeholder='Add Tasks' onChange={handleInput} 
                className='inputtodo' value={todo}/>
               <br/> 
               {todoerr} 
               <br/>
                <button type='submit' className='todobtn' onClick={handleSubmit}>Add</button>
            </form>  

            <div className='show-data'>
                  <ul>
                    {todoshow.map((showdata,i) =>(
                      <li key={i} className='onee'>
                        {showdata.todo}<AiFillDelete onClick={()=>handleDelete(showdata.key)} className='icon-del'/>
                        <AiFillEdit onClick={()=>handleEdit(showdata.key,showdata.todo)} className='edite'/>
                      </li>
                    ))}                 
                  </ul>
                  {updatetext ? <div className='mt-5'>
                     <input className='inputtodo' onChange={handleUpload}/>
                     <br/>
                     <button className='todobtn btncng' onClick={() => handlefinalUpload(editid,editvalue)}>Update</button>
                  </div>: ""}
                  


            </div>
        </div>      
      
    </div>
  )
}

export default Todo