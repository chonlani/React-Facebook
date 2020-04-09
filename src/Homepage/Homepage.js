import React, { Component } from 'react'
import {Row, Col} from 'antd'
import NavHome from './NavHome'
import Left from './BodyLeftHome'
import Center from './BodyCenterHome'
import Right from './BodyCenterHome'
import '../style/Homepage_style/Homepage.css'


export default class Homepage extends Component {
    render() {
        return (
            <Col>
                <Row span={24}><NavHome/></Row>
                <Row span={24}></Row>
                    <Col><Left/></Col>
                    <Col><Center/></Col>
                    <Col><Right/></Col>
                
            </Col>
        )
    }
}
