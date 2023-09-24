import { useState } from "react";
import { NavLink } from "react-router-dom";
function FormEditUser({listUsers, onClickSave}) {
    const [formData, setFormData] = useState(listUsers);
const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value  });
        
      };
 
function handleAdd(e){
e.preventDefault();

onClickSave(formData)
alert('Changes Saved!')
}
function handleReset(e){
    e.preventDefault();
    onClickSave(false)
    }

return(
    <>
   
   <div className="col-sm-6 mb-2">
   <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">User name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleAdd}>Save changes</button>
      
    </form>
  </div>

    </>
)
}
export default FormEditUser;