import React from "react";


type Props =  {
    text?:string
}
export default function First(data:Props){

    return <p>{data.text}</p>

}