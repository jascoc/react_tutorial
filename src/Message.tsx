const Message = () => {
    let name
    // JSX: JavaScript XML
    let returnJSX = name != undefined 
                        ? <h1>Ciao {name}</h1> 
                        : <h1>Ciao Tizio</h1>;
    return returnJSX
}

export default Message;