import { useState } from "react"
import {debounce} from 'lodash'

const FilterData = ({getData}) =>{

    const [query, setQuery] = useState("")
    const handlerEvent = debounce((value) =>{

        setQuery(value)

        getData(value)
    },500)

    return(
        <div className="search"> 
        <input type="text"  onChange={(e)=> handlerEvent(e.target.value)}/>
        </div>
    )
}

export default FilterData