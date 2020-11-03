import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

function MainLayout({ children }) {
    return(
        <main>
            <div>
                <SideNav />
            </div>
            <div>
                <Header />
                {children}
            </div>
        </main>
    )
}

export default MainLayout