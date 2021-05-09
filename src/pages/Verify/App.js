import React, { useState, useEffect } from "react";
import "./verify.css";
import "./App.css";
import api from '../../utils/api'; // import api function which contains "GET","POST","DELETE","PATCH" methods

function App(){
    const [code,setCode] = useState(0)

    function verify(){
        const verify = localStorage.getItem('verify');
        console.log(verify)
        if(code == verify){ //verified, correct code
            alert("verified success")
        }
        else{ 
            alert("wrong code")
        }
    }
    

    return(
        <div className="container">
            <div className="login-register-wrapper">
                <div className="cover">
                    <div className="verify">
                        <div className="letterSize">獲取驗證碼<br/></div>
                        <br/>已發送4位數驗證碼至您的信箱: 
                        <form>
                        <input type="text" name="欄位名稱" onChange={(e)=>{setCode(e.target.value)}}/>
                        </form>
                        <div className="verifySubmit" onClick={()=>verify()}>確定</div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default App