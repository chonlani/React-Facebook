import React, { Component } from 'react'
import '../style/login_page/Left.css'
import {Row, Col} from 'antd'

export default class LeftBody extends Component {
    render() {
        return (
            <Col className="leftBody">

            <Row className="rowInleft">การเข้าสู่ระบบล่าสุด</Row>
            <Row className="rowInleft">คลิกรูปภาพหรือเพิ่มบัญชี</Row>

            <Row className="rowInleft">
                <Col>
                    <img src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-1/p480x480/90576238_3238364789524563_5549287940468768768_o.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=bEhaZPYbAXwAX--EvN8&_nc_ht=scontent.fbkk2-8.fna&_nc_tp=6&oh=0110a5e73737b3a02afd7ae24c0ba829&oe=5EB1BE38"></img>
                    <div>Jang</div>
                </Col>
            </Row>
                
            </Col>
            

        )
    }
}
