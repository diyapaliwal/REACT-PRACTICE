import './App.css'

function App() {
  function handleClick(){
    alert('You are logged in')
  }

  function handleMouseOver(){
    alert('Mouse is on the text')
  }

  function handleInputChange(event){
    // console.log("input value got changed")
    console.log("value till now: ", event.target.value);
  }

function handleSubmit(event){
  event.preventDefault();
  // I am writting my custom logic here
  alert('want to submit the form?');
}

  return (
      <div>
        <button onClick={()=> alert("button clicked!")}>Click me</button>

        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInputChange} />
          <button type='submit'>Submit</button>
        </form>
        {/* <p onMouseOver={handleMouseOver} style={{border:'1px solid black'}}>
          I am paragraph
        </p>
       <button onClick={handleClick}>
            login
       </button> */}
      </div>
  )
}

export default App