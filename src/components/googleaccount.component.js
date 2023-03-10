import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useSelector } from 'react-redux';
function Login() {
    const birds = useSelector(state => state.birds);
    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token; " + response.credential)
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(response) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
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
}, []);
    //if no user, show sing in
    //iff have a user show logout
    return (
        <div>
           <div id="signInDiv"></div>
           { Object.keys(user).length != 0 &&
                <button onClick={ (e)  => handleSignOut(e)}>Sign Out</button>
           }

           { user &&
            <div>
                <img src={user.picture}></img>
                <h3>{user.name}</h3>
            </div>
            }
        </div>
    );
    }
export default Login;