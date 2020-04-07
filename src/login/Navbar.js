import React, { Component } from 'react'
import '../style/login_page/nav.css'
import {Row, Col} from 'antd'

export default class Navbar extends Component {
    render() {
        return (
            <Row className="Navbar">
                <Col className="top">
                    <div>
                        <a href="#"> 
                        <i class="fb_logo img sp_Vgu5hh_52BR_1_5x sx_13437d"><u>Facebook</u></i>
                        </a>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td>อีเมลล์หรือโทรศัพท์</td>
                                <td>รหัสผ่าน</td>
                            </tr>
                            <tr>
                                <td><input type="text"/></td>
                                <td><input type="text"/></td>
                                <td><button>เข้าสู่ระบบ</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ลืมบัญชีใช่หรือไม่</td>
                            </tr>
                            

                        </table>
                        </div>
                </Col>
                
            </Row>
        )
    }
}
