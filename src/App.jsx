import { useState, useEffect } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Contacts from './pages/Contacts'
import Navbar from './components/Navbar'
import FormAddUser from './pages/FormAddUser'
import FormEditUser from './pages/FormEditUser';
import Root from './pages/Root';
function App() {

  const [usersFetch, setUsersFetch] = useState('https://jsonplaceholder.typicode.com/users');
  const [bio, setBio] = useState(null);
  const [count, setCount] = useState(0)
  useEffect(() => {
    
    async function startFetching() {
      console.log('fetch')
      setBio(null);
      const result = await fetch(usersFetch);
      let users = await result.json();
      if (!ignore) {
        console.log(users)
        setBio(users);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, [usersFetch]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  function handleDelete(user) {
    console.log('user id')
    console.log(user);
    let newBio = bio.filter((item) => item.id != user);
    setBio(newBio);
    alert('Delete succefully!')
    console.log(newBio);
  }

function handleAddUser(user){
console.log('show add');
setCount(count+1)
if(user){
  setBio([...bio,user]);
}
}
function handleEditUser(user){
 
let newBio= bio.map((item) => {
  if(item.id == user.id){
    return item = {...item, ...user}
}else{
 return item
}
});
console.log(newBio)
setBio(newBio);
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
         path:'/',
        element:<div className="row">
         {bio && bio.map((item,index) => <Contacts listUsers={item} key={item.id + '' + index} onClickDelete={handleDelete} />)}</div>
       },
        {
         path: '/contact-add',
         element: <div> <h1>Add users</h1> <FormAddUser id={count}  onClickAdd={handleAddUser}  /></div>
         },
         {
          path: '/contact-edit',
          element: <div className="container mt-5">  <h1>Edit users</h1> <div className='row'> {bio && bio.map((item,index) => <FormEditUser listUsers={item} key={item.id + '' + index}  onClickSave={handleEditUser}  />)}</div> <button  className="btn btn-success" ><NavLink to="/">Return to home</NavLink></button></div>
          } 
    ]
  }
])

  return (
    <>
     
       <RouterProvider router={router} />
     

    </>
  )
}

export default App
