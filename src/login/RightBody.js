import React, { Component } from 'react'
import '../style/login_page/Right.css'
import {Row, Col} from 'antd'

export default class RightBody extends Component {
    render() {
        return (
            <Col className="RightBody">

            <Row className="rowInright">สร้างบัญชีใหม่</Row>

            <Row className="rowInright">ง่ายและเร็ว</Row>

            <Row className="rowInright">
               <Col span={24} className="firstinput">
                   <Row span={12}><input type="text" placeholder="ชื่อ"/></Row>
                   <Row span={12}><input type="text" placeholder="นามสกุล"/></Row>
               </Col>
               <Col span={24}><input type="text" placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมลล์"/></Col>
               <Col span={24}><input type="text" placeholder="รหัสผ่านใหม่"/></Col>
               <Col span={24}></Col>
            </Row>
                
            </Col>
            
        )
    }
}
