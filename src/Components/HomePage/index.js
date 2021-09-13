import React from 'react'

import './styles.css'
import { InputGroup, FormControl } from 'react-bootstrap'
import SearchLogo from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';





function index({ placeholder,data }) {
// const [filterdData,setFilteredData]=useState([]);
// const handelFilter = (event)=>{
//     const newFilter = data.filter((value)=>{
    
//     })

//     if(searchWord === ""){
//         setFilteredData([])
//     }else{
//         setFilteredData(newFilter)
//     }
// }
    return (
        <div>
            <div className="counter">
                <h1 className="h1">Country</h1>
            </div>
            <div className="Form">
                <InputGroup className='inputGroup'>
                    <FormControl
                        type="text"
                        placeholder={placeholder}

                    />
                    <div className="searchLogo">
                        {/* {filterData.length === 0 ?   : <CloseIcon />} */}
                        <SearchLogo  /> 
                    </div>

                </InputGroup>
            </div>
        </div>
    )
}

export default index

