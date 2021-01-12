import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { DatePicker, Space } from 'antd';
import './RangePicker.scss';

const { RangePicker } = DatePicker;

ReactDOM.render(
  <Space direction="vertical" size={12}>
    <RangePicker />
    {/* <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="year" /> */}
  </Space>,
  document.getElementById('container'),
);