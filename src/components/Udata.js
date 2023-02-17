import { useSelect } from '@mui/base'
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProdoctdata, loadMore } from '../redux/actions/action'

function Udata() {

const dispatch = useDispatch()
const data = useSelector((state) => state.productReducer.product)
const page = useSelector((state) => state.productReducer.loadMore)
console.log(page,"page");

console.log(data);
// const loadMore = () => {
// setPageCount(pageCount + 1)
// handleResponse() 
// }

const handleResponse = () => {
    axios.get(`https://www.anemon.io/api/product-management/products/filter?code&description&brandId&warrantyDuration&warrantyDurationTypeId&supplierCompanyId&productCategoryId&pageIndex=${page}&pageCount=10`,
    {
        headers: { Accept: "application/json", Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1bmlrd29ya3N5c3RlbXNAZ21haWwuY29tIiwiaWF0IjoxNjc0NTM4OTk3LCJleHAiOjE2NzUxNDM3OTcsInVzZXJJZCI6MywibmFtZSI6IlVuaWt3b3JrICIsInN1cm5hbWUiOiJzeXN0ZW1zIiwiY29tcGFueUlkIjoyLCJjb21wYW55TmFtZSI6IlVuaWt3b3JrIFN5c3RlbXMiLCJjb3VudHJ5IjoiVFIiLCJsYW5ndWFnZSI6ImVuIiwiaW1hZ2UiOiJlZjQwOTk3Mi04NDdjLTQ2MjItYmY0ZS02MTlmNTJlNjRhNzMifQ.14ezyrV118wOy2dSWWcseKP2lhqsqDZ9-d8OWVW_As4" }
    })
.then((res) => {
    console.log(res)
    dispatch(getProdoctdata(res.data))
    
   
})
}

const handleReload = () => {
    dispatch(loadMore())
    handleResponse()
}


useEffect(() => {
handleResponse()
},[])

  return (
    <div>
{
    data.map((item) => {
        return(
            <>
          <div style={{margin:"10px", padding:"10px", backgroundColor:"pink"}}> {item.description}</div> 
     
            </>
        )
    })
}

<button style={{backgroundColor:"white"}} onClick={() => handleReload()}>Loadmore</button>
    </div>
  )
}

export default Udata