import axios from "axios";
import React, { useRef, useState } from "react";
import "./style.css"
export function Table(props){
    let {id, name, username , email, phone, address,website, company}= props;
    const ref = useRef(null);
    const [Name, setName] = useState(name);
    const [UserName, setUsername] = useState(username);
    const [Email, setEmail] = useState(email);
    const [Phone, setPhone] = useState(phone);
    const [Company, setCompany] = useState(company);
    const [Website, setWebsite] = useState(website);
    const [Address, setAddress] = useState(address);
    function Display() {
        ref.current.style.display = "block";
    }
    function close() {
        ref.current.style.display = "none";
    }
    function ModifieName(e) {
        setName(e.target.value)
    }
    function UserNam(e) {
        setUsername(e.target.value)
    }
    function ModiEmail(e) {
        setEmail(e.t.value)
    }
    function PhoneNumber(e) {
        setPhone(e.target.value)
    }
    function Websit(e) {
        setWebsite(e.target.value)
    }
    function Companie(e) {
        setCompany(e.target.value)
    }
    function AddressUser(e) {
        setAddress(e.target.value)
    }
    function UpDate(e) {
        e.Default();
        ref.current.style.display = "none";
        const jsonplaceholder = axios.patch("https://jsonplaceholder.typicode.com/users/1", {
            name : Name,
            username : UserName,
            email : Email,
            address : {
                street : Address,
                city : "",
                zipcode :"",
                geo : {
                    lat : "",
                    lng : "",
                }
            },
            phone : Phone,
            website : Website,
            company : {
                name : Company,
                catchPhrase : "",
                bs : ""
            }
        })

        jsonplaceholder.then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
            <tr onClick={Display}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{website}</td>
                <td>{company}</td>
            </tr>
            <div className="container2 modal" ref={ref}>
                <div className="animation">
                    <form>
                        <span onClick={close} class="close" title="Close Modal">&times;</span>
                        <div className="form-group">
                            <label htmlFor="">identifiant :</label>
                            <input type="text" name="" id="" value={id}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name :</label>
                            <input type="text" name="" id="" value={Name} onChange={ModifieName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Username :</label>
                            <input type="text" name="" id="" value={UserName} onChange={UserNam}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email :</label>
                            <input type="text" name="" id="" value={Email} onChange={ModiEmail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone :</label>
                            <input type="text" name="" id="" value={Phone} onChange={PhoneNumber}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Address :</label>
                            <input type="text" name="" id="" value={Address} onChange={AddressUser}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Website :</label>
                            <input type="text" name="" id="" value={Website} onChange={Websit}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Company :</label>
                            <input type="text" name="" id="" value={Company} onChange={Companie}/>
                        </div>
                        <button type="submit" id="close" onClick={UpDate}>Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}