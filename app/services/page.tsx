import React from 'react'
import Topbanner from '../components/Topbanner'
import Services from '../components/Services'

function page() {
    return (
        <>
            <Topbanner sectionName='Services' />
            <Services />
        </>

    )
}

export default page