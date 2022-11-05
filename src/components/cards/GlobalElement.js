import React from 'react'

export const GlobalElement = ({ heading, details }) => {
    return (
        <>
            <div className=' text-[3em] text-center mb-[1.3125rem] font-[900]' style={{color:`#000`}}>
                {heading}
            </div>
            <div className=' text-[1.5em] text-center font-[300] mb-[2.375rem]' style={{color:`grey`}}>
                {details}
            </div>
        </>
    )
}
