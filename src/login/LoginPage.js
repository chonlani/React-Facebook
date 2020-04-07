import React, { Component } from 'react'
import Navbar from './Navbar'
import LeftBody from './LeftBody'
import RightBody from './RightBody'
import Footer from'./Footer'
import '../style/login_page/login.css'
export default class LoginPage extends Component {
    render() {
        return (
            <div className="fullBody">
                <Navbar />
                <div className="mainBody">
                <LeftBody />
                <RightBody />
                </div>
                <Footer />
            </div>
        )
    }
}
