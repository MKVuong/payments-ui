import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserContextType } from "./context/UserContext";


const Menu = () : JSX.Element => {
    const userContext = useContext<UserContextType>(UserContext)
    const login = () => {
        userContext.login({name: "Pikachu", role : "Rat"})
    }

    return (
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><Link to="/add">New transaction</Link></li>
            {userContext.user.name === "" && <li><button onClick={login}>Log in</button></li>}
            {userContext.user.name !== "" && <li><button onClick={userContext.logout}>Log out</button></li>}
        </ul>

    );
}

export default Menu;
