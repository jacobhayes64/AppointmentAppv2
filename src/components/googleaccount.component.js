import { useEffect, useState, createContext, useContext } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector, createSelectorHook } from 'react-redux';
import { loadUser } from '../store/accountstore.slice';
import { deleteUser } from '../store/accountstore.slice';
import axios from 'axios';




function Login() {
    const dispatch = useDispatch();
    var userState = useSelector((user) => user.user[0]);
    const [user, setUser] = useState({});


 axios.get('http://localhost:5000/appointments')
   .then(response => console.log(response.data))
   .catch(error => console.log(error));
    
    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token; " + response.credential)
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;


        
			dispatch(
				loadUser({
                    iss : userObject.iss,
                    nbf : userObject.nbf,
                    aud : userObject.aud,
                    sub : userObject.sub,
                    email : userObject.email,
                    email_verified : userObject.email_verified,
                    azp : userObject.azp,
                    name : userObject.name,
                    picture : userObject.picture,
                    given_name: userObject.given_name,
                    family_name : userObject.family_name,
                    iat : userObject.iat,
                    exp : userObject.exp,
                    jti : userObject.jti,
				})
			);
		
    }

    function handleCallbackResponse2(jwt) {
        var userObject = jwt_decode(jwt);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(response) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
        
        dispatch(
            deleteUser({
                user : undefined
            })
        );
        window.location.reload()
    } 


    useEffect(() => {
        if(userState == undefined){
            /* global google */
            google.accounts.id.initialize({
                client_id: "827952640626-lhue8bgosjm7d7f88h5od3j2qpa6dnl9.apps.googleusercontent.com",
                callback: handleCallbackResponse
            });
    
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "extralarge"}
            );
                
            google.accounts.id.prompt();
        }
        else{
            setUser(userState)
        }
        

        
}, []); 
    //if no user, show sing in
    //iff have a user show logout
    return (
        <div>
           <div id="signInDiv"></div>
           { user &&
            <div id="userdiv">
                <img src={user.picture}></img>
                <h3>{user.name}</h3>
                { Object.keys(user).length !== 0 && //if length of user is not 0 then return <> else return undefined
                <button onClick={ (e)  => handleSignOut(e)}>Sign Out</button>
                 }
                { Object.keys(user).length !== 0 && //if length of user is not 0 then return <> else return undefined
                    <div id="userappsdiv">
                        <label>Booked Appointments</label>
                            <ul id="appointmentlist">
                                <li>appointment1, date/time, desc</li>
                        </ul>
                        <label>Requested Appointments</label>
                            <ul id="unconfirmedappointmentlist">
                                <li>appointment2, date/time, desc</li>
                        </ul>
                    </div>
                 }

            </div>
            }
        </div>
    );
    }
export default Login;
