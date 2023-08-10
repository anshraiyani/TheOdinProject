import "./App.css";
import { useState } from "react";

// const user={
//   name:'Ansh',
//   imgUrl:'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=150'
// }

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hi, I'm {user.name}</h1>
//       <img className='avatar' src={user.imgUrl}/>
//       <MyButton/>
//     </div>
//   );
// }

// const products=[
//   {title: 'Cabbage', id: 1},
//   {title: 'Garlic', id: 2},
//   {title: 'Onions', id: 3}
// ]

// function App() {
//   const listItems=products.map(product=>
//     <li key={product.id}>
//       {product.title}
//     </li>
//   )

//   return (
//     <ul>{listItems}</ul>
//   )
// }

// function App() {
//   return (
//     <MyButton/>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  ) 
}

export default App;
