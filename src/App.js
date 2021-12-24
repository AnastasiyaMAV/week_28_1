import React from 'react'
import './App.css';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import CardTariff from './components/CardTariff'

let masTariffJSON = [{
  "title":"Безлимитный 300",
  "price":"300 руб/мес",
  "colorBg":"unlimited_300",
  "speed":"до 10 Мбит/сек",
  "details":"Объем включенного трафика не ограничен",
  "isSelected":false
},{
  "title":"Безлимитный 450",
  "price":"450 руб/мес",
  "colorBg":"unlimited_450",
  "speed":"до 50 Мбит/сек",
  "details":"Объем включенного трафика не ограничен",
  "isSelected":false
},{
  "title":"Безлимитный 550",
  "price":"550 руб/мес",
  "colorBg":"unlimited_550",
  "speed":"до 100 Мбит/сек",
  "details":"Объем включенного трафика не ограничен",
  "isSelected":true
},{
  "title":"Безлимитный 1000",
  "price":"1000 руб/мес",
  "colorBg":"unlimited_1000",
  "speed":"до 200 Мбит/сек",
  "details":"Объем включенного трафика не ограничен",
  "isSelected":false
}]

function CardList() {
  return (
    <React.Fragment>
        <div className="site-card-wrapper">
          <Row>
            {
              masTariffJSON.map((masTariff) => 
              <CardTariff title={masTariff.title} price={masTariff.price} colorBg={masTariff.colorBg}
              speed={masTariff.speed} details={masTariff.details} isSelected={masTariff.isSelected} />)
            }
          </Row>
        </div>
    </React.Fragment>
  );
}

export default CardList;
