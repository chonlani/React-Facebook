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
               <Col>
                   <Row className="firstinput inputRight one">
                       <input type="text" placeholder="ชื่อ"/>
                    </Row>
                   <Row className="firstinput">
                       <input type="text" placeholder="นามสกุล"/>
                    </Row>
               </Col>
               <Col span={24} className="inputRight"><input type="text" placeholder="หมายเลขโทรศัพท์มือถือหรืออีเมลล์"/></Col>
               <Col span={24} className="inputRight"><input type="text" placeholder="รหัสผ่านใหม่"/></Col>
               <Col span={24} className="inputRight"></Col>
            </Row>
                
            </Col>
            
        )
    }
}
