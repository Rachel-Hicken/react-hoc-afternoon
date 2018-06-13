import React, { Component } from 'react';

export default class Collapse extends Component {
    constructor() {
        super()
        this.state = {
            collapse: true,
            open_style: {
                maxHeight: '100px',
                opacity: 1,
                transition: '0.3s all ease-out',
                visibility: 'visible'
            },
            closed_style: {
                maxHeight: 0,
                opacity: 0,
                transition: '0.3s all ease-out',
                visibility: 'hidden'
            }
        }
        this.collapseHandler = this.collapseHandler.bind(this);
    }

    collapseHandler() {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.name}
                    <button onClick={this.collapseHandler}>{this.state.collapse ? 'More' : 'Less'}</button>
                </div>
                <div>
                    {this.props.children(this.state.collapse ? this.state.closed_style : this.state.open_style)}
                </div>

            </div>
        )
    }
}