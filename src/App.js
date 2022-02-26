import {useEffect,useState} from 'react'
import Header from './components/ui/Header';
import GridCharacters from './components/characters/GridCharacters';
import FilterData from './components/ui/FilterCharcter';
import './App.css';


const urlAPI = "https://breakingbadapi.com/api/characters?name="

function App() {

  const [characters,setCharacters] = useState([])

  const [search, setSeach] = useState("")
  
  useEffect(()=>{
    console.log("im feching")
    fechingTheAPI()

  },[search])

  const fechingTheAPI = async() => {
    try{

    const request = await fetch(urlAPI+search)
    const data = await request.json()

    setCharacters(data)
    }catch(err){
      console.log(err)
    }    
  }

  return (
    <div className="container">
      <Header/>

      <FilterData getData={(value)=> setSeach(value)}/>

      <GridCharacters characters = {characters}/>
    </div>
  );
}

export default App;
