import { Card, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';

export default function CardTariff(props) {
    let classBg = props.colorBg;
    let checkSelected = props.isSelected;
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    };
    
    return(
    <Col span={6}>
        <Card hoverable bodyStyle={{background:pressed ?"rgb(180, 216, 245)" : checkSelected}} className='cardStyle'>
            <div className={classBg}>
                <h1 className='cardTitle'>{props.title}</h1>
                <hr/>
                <div className='cardPrice'>{props.price}</div>
            </div>

            <div className='cardSpeed'>{props.speed}</div>
            <div className='cardDetails'>{props.details}</div>
            <Button {...props} className='cardButton' onClick={handleChange}>{pressed ? "Выбрано" : "Выбрать"}</Button>
        </Card>
    </Col>);
}