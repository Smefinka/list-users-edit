
function Contacts({listUsers, onClickDelete}){
function clickButton(id){
    onClickDelete(id);
}
return(
    <>
    
      <div className="col-sm-6 mb-2">
    <div className="card" >
  
  <div className="card-body" >
  <p>Name: {listUsers.name}</p>
  <p>User name: {listUsers.username}</p>
  <p>Email: {listUsers.email}</p>
  <button id={listUsers.id} type="button" className="btn btn-danger" onClick={(e)=> clickButton(e.target.id) }>DELETE</button>
  </div>
</div>
</div>



    </>
)
}
export default Contacts;