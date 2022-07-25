import { ADDNUM, INCREMENT } from "./Type"

export const increment =(dispatch)=>{
    return(
    dispatch({
        type:INCREMENT,
    })
    )
}
export const AddNum =(dispatch,numb)=>{
    return(
    dispatch({
        type:ADDNUM,
        data:numb,
    })
    )
}