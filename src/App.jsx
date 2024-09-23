import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo , removeTodo , editTodo , updatedTodo } from './reduxConfig/reducers/todoSlice';

function App() {
  const todoValue = useRef();
  const dispatch = useDispatch()
  const selector = useSelector(state => state.todos.todo);
    console.log(selector);
  
  const addtodoinRedux = (event)=>{
    event.preventDefault();
    console.log(todoValue.current.value);

    if (todoValue.current.value === ``) {
      alert(`First Enter Todo`)
      return
    }

    dispatch(addTodo({
      content: todoValue.current.value
    }))


    todoValue.current.value = ``
  }


  const removetodoinRedux = (index)=>{

    dispatch(removeTodo({
      index
    }))


    todoValue.current.value = ``
  }

  const edittodoinRedux = (index)=>{

    dispatch(editTodo({
      index: index,
      content : updatedTodo
  
    }))


    todoValue.current.value = ``
  }


  return (
    <>
    <h1 className='text-center text-5xl font-bold my-10'>Redux Todo App</h1>
    <form className='flex justify-center gap-2'>
      <input className='input input-bordered' type="text" placeholder='Enter Todo' ref={todoValue}/>
      <button className='btn btn-outline' onClick={addtodoinRedux}>Add Todo</button>
    </form>
    <ul className='text-center mt-20 text-2xl font-bold'>
      {selector.length > 0 ? selector.map((item , index)=>{
        return <li className='mt-5' key={index}>{item.content}
        <button onClick={()=>removetodoinRedux(index)} className='btn btn-sm btn-error ms-3'>Delete</button>
        <button onClick={()=>edittodoinRedux(index)} className='btn btn-sm btn-success ms-3'>Edit</button>
        </li>
      }) : <h1>No data found!</h1>}
    </ul>
    </>
  )
}

export default App