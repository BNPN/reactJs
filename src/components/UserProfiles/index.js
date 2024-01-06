
const UserProfile=(props)=>{
    const {userDetails}=props
    const {img,name,role}=userDetails
    return (
        <div className="main-page"> 
            <div className="userCard">
                <img className="image" src={img} alt="image"></img>
                <div>
                    <h1>{name}</h1>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    )

}
 export default UserProfile