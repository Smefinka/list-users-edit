import { useState } from "react";
import { NavLink } from "react-router-dom";
function FormAddUser({onClickAdd, id}) {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
      });
const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData,['id']:id+""+1, [name]: value  });
      };
 
function handleAdd(e){
e.preventDefault();
onClickAdd(formData)
}
function handleReset(e){
    e.preventDefault();
    onClickAdd(false)
    }

return(
    <>
   
   <div className="container mt-5">
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
      <button type="submit" className="btn btn-primary" onClick={handleAdd}><NavLink className="nav-link" to="/" >Add user/Save</NavLink></button>
      <button type="submit" className="btn btn-primary" onClick={handleReset}><NavLink className="nav-link" to="/" >Reset</NavLink></button>
    </form>
    </div>

    </>
)
}
export default FormAddUser;