import formReducer from './formSlice'
import { configureStore } from '@reduxjs/toolkit'

 const  store=configureStore( {
reducer:{ 
    form:formReducer
}
})
export default store
