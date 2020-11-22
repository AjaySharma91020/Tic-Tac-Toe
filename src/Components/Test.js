import React from 'react'

export default function Test(ajayProps) {
    console.log(ajayProps)
    
    return (
        <div onClick={ajayProps.clickKarneKeBaadKyaHogaFunction.bind(this,ajayProps.number)}>
            Test  {ajayProps.number}
        </div>
    )
}
