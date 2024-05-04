import React, { ReactNode } from 'react'

interface Ichid {
    children: ReactNode
}
const Container: React.FC<Ichid> = ({ children }) => {
    return (
        <div className='px-2 sm:px-8 md:px-5 lg:px-24 xl:px-36'>
            {children}
        </div>
    )
}

export default Container