import React from 'react'
import { CustomHoverCard } from "./HoverCard"
import styled from 'styled-components'

function GeneralCard({ img, subtitle, details, featured, cstStyle="" }) {
    return (
        <>
            <CustomHoverCard className={` rounded-t-[0.625rem] ${cstStyle}`}>
                <div className=' cardDetails'>
                    <div className='relative'>
                        {featured && (
                            <Featured>
                                <div className='feat'>
                                    FEATURED
                                </div>
                            </Featured>

                        )}
                        <img src={img} className='w-full' />
                        <div className='fira text-left px-[1.875rem] py-[1.25rem]'>
                            <div className='font-[300] mb-[0.625rem]' style={{ color: `${ColorList.lighttext}` }}>
                                {subtitle}
                            </div>
                            <div className='fira lgS:text-[1.5em] mob:text-[1.125em] font-[700]' style={{ color: `${ColorList.black}` }}>
                                {details}
                            </div>
                        </div>
                    </div>
                </div>
            </CustomHoverCard>
        </>
    )
}

export default GeneralCard

const Featured = styled.div`
position: absolute;
top:1.875rem;
.feat{
    /* padding-left: 1.6875rem;
    padding-right: 1.6875rem; */
    width: 120px;
    padding-top:5px;
    padding-bottom:5px;
    color:white;
    background-image: linear-gradient(45deg, #e9a17b, #ff7cb0);
    font-size: 0.875em;
    font-weight: 600;
    text-transform: uppercase;
    z-index: 3;
}
.feat::before{
    content: " ";
    position: absolute;
    top: 0;
    left:120px;
    display: block;
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 15px solid transparent;
    border-top: 16px solid #ff7cb0;
}
.feat::before{
    content: " ";
    position: absolute;
    top: 0;
    left:120px;
    display: block;
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #ff7cb0;
}
`