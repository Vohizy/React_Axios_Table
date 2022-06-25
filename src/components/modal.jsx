import axios from "axios";
import React, { useRef, useState } from "react";
import "./List/style.css"

export default function Modal() {
    const Refer = useRef(null);
    const Name = useRef(null);
    const UserName = useRef(null);
    const Email = useRef(null);
    const Phone = useRef(null);
    const Address = useRef(null);
    const Company = useRef(null);
    const Website = useRef(null);
    function display() {
        Refer.current.style.display = "block";
    }
    function close() {
        Refer.current.style.display = "none";
    }
    function Information(e) {
        e.Default();
        Refer.current.style.display="none";
        const json = axios.post("https://jsonplaceholder.typicode.com/users", {
            name : Name.current.value,
            username : UserName.current.value,
            email : Email.current.value,
            address : {
                street : Address.current.value,
                city : "",
                zipcode :"",
                geo : {
                    lat : "",
                    lng : "",
                }
            },
            phone :Phone.current.value,
            website :Website.current.value,
            company :{
                name : Company.current.value,
                catchPhrase : "",
                bs : ""
            }
        })
        json.then((respon)=>{
            console.log(respon)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return(
        <>
            <div className="container1 modal" Refer={Refer} >
                <div className="animation">
                    <form>
                        <span onClick={close} class="close" title="Close Modal">&times;</span>
                        <div className="form-group">
                            <label htmlFor="">Name :</label>
                            <input type="text" name="" id="" Refer={Name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Username :</label>
                            <input type="text" name="" id="" Refer={UserName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email :</label>
                            <input type="text" name="" id="" Refer={Email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone :</label>
                            <input type="text" name="" id="" Refer={Phone}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Website :</label>
                            <input type="text" name="" id="" Refer={Website}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Address :</label>
                            <input type="text" name="" id="" Refer={Address}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Company :</label>
                            <input type="text" name="" id="" Refer={Company}/>
                        </div>
                        <button type="submit" onClick={Information} id="close">Add User</button>
                    </form>
                </div>
            </div>
            <button className="add-content" onClick={display}>Update</button>
        </>
    )
}