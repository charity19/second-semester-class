import React, {useState} from 'react'
const HelloWorld3 = (props)  => {
    const [name, setName] =useState(props.name);

    const changeNameToGreet =(event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <p>Hello {name}. Greetings from React.</p>
            <p>
                <input type="text" placeholder="write a name here..."
name="name_to_greet" onInput={changeNameToGreet}/>
            </p>
        </div>
    )
}

HelloWorld3.defaultProps = {
    name: "Charity"
}
export default HelloWorld3;