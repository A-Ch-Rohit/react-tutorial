import {ReactNode} from 'react'
interface Props{
    //children:string -without html tags as children and only strings
    children:ReactNode //-with html tags as children and strings
}
function Alert({children}:Props){
    return(
        <div className="alert alert-primary">{children}</div>
    )
}

export default Alert;