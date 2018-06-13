import React, { Component } from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class Date extends Component {
    constructor() {
        super()
        this.state = {
            date: '',
            dateString: ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(date, dateString) {
        this.setState({
            date: date,
            dateString: dateString
        });
    }
    render() {
        console.log(this.state.date)
        return (
            <div>
                <DatePicker onChange={this.onChangeHandler} />
                
            </div>
        )
    }
}