import { useRecoilState,RecoilRoot } from "recoil"
import { countAtom } from "./atom"


function App() {
  

  return (
    <>
     <RecoilRoot>
      <Appbar/>
     </RecoilRoot>
    </>
  )
}

function Appbar() {
  const [count,setCount] = useRecoilState(countAtom);

  return (
    <>
     <h1>Count{count}</h1>
      <button onClick={() =>{
        setCount(count+1)
      }}>Increment</button> 
      <button onClick={() =>{
        setCount(count-1)
      }}>Decrement</button>
      <button onClick={() =>{
       if(count >=1 || count<=-1){
        setCount(0)
       }
      }}>Clear</button>
      
    </>
  )
}
//setcount(count = 0) doesnt work here because in react ts expected of us to use setcount to update values
// but when you do count=0 youre assigning value to count
// you cannot mutate count like count+1 adds new value

export default App
