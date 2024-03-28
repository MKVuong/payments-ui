import { useContext } from "react"
import { UserContext, UserContextType } from "./context/UserContext"

const Footer = () : JSX.Element => {
    const u = useContext<UserContextType>(UserContext)

    return (
        <div>
            {u.user.name === "" && <p> No logged in user</p>}
            {u.user.name} 
            {u.user.role}
        </div>
    )
}

export default Footer