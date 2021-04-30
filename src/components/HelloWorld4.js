import React, {useState} from 'react';
const HelloWorld4 = (props)  => {
    const [name, setName] = useState(props.name);
    const [count, setCount] = useState(0);

    const changeNameToGreet = (event) => {
        setName(event.target.value);
    } 

    return (
      <div>
          <p>Hello {name}. Greetings from React.</p>
          <p>
              <input type="text" placeholder="write a name here..."name="name_to_greet"
onInput={changeNameToGreet}/>
          </p>

          <p>you clicked {count} times</p>
          <p>
              <button onClick={() => setCount(count+1)}>
                  click me
              </button>
          </p>
      
      </div>
    )
}
HelloWorld4.defaultProps = {
name: "Charity"
}
export default HelloWorld4;
