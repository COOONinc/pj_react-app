import React,{useContext} from "react";
import { Link } from "react-router-dom";

import firebase from "firebase/compat/app";
import { AuthContext } from "../../AuthService";

export const Header =()=>{
    const user = useContext(AuthContext);
    return(
        <header>
            <h1 className="title">React-app</h1>
            <div className="menu-item">
                <Link 
                    className="ChatPageBtn"
                    to={'/chat'}>Chat Page</Link>
                <a
                    className="LogoutBtn"
                    onClick={
                        ()=>{
                            firebase.auth().signOut()
                        }
                    }
                    >Logout
                </a>
                <p>ようこそ {user.displayName} さん</p>
            </div>
        </header>
    )
}
