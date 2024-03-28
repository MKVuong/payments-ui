import { ChangeEvent, useEffect, useRef, useState } from "react";

const Search = () : JSX.Element => {

    const firstInput = useRef<HTMLInputElement | null>(null)
    const [orderId, setOrderId] = useState<string>("")

    useEffect( () => {
        firstInput.current?.focus()
    }, [])

    const handleOrderIdChange = (e : ChangeEvent<HTMLInputElement>) => {
        setOrderId(e.target.value) //updates orderId live as you type it

    }

    return (
        <div className="searchBox">
            <label htmlFor="orderId">Order Id:</label>
            <input onChange={handleOrderIdChange} value={orderId} id="orderId" type="text" ref={firstInput}/>
            <button onClick={ () => console.log("searching for " + orderId)}>Search</button>
        </div>
    );
}

export default Search