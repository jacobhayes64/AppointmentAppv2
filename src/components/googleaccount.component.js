import { useEffect, useState, createContext, useContext } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../store/accountstore.slice';
import { deleteUser } from '../store/accountstore.slice';




function Login() {
    const dispatch = useDispatch();
    const test = useSelector((user) => user.jwt)
    const [user, setUser] = useState({});
    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token; " + response.credential)
        var userObject = jwt_decode(response.credential);
        var rawObject = response.credential
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;


        
			dispatch(
				loadUser({
					jwt : rawObject,
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
                jwt : null,
            })
        );
    } 
    var userState = useSelector((user) => user.jwt) 
    useEffect(() => {
        console.log('test1' + userState);
        if (userState ==! undefined) {
            handleCallbackResponse2(userState)
        } 
        else{
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
}, [user]);
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
