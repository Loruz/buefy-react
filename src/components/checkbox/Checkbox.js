
import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.labelRef = React.createRef()
        this.onKeyDown = this.onKeyDown.bind(this)
        this.setCheckboxRef = this.setCheckboxRef.bind(this)
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.labelRef.current.click()
        }
    }

    setCheckboxRef(checkbox) {
        if (checkbox) {
            checkbox.indeterminate = this.props.indeterminate
        }
    }

    render() {
        const classes = classNames('b-checkbox', 'checkbox',
            this.props.size, this.props.disabled && 'is-disabled')
        return (
            <label
                className={classes}
                ref={this.labelRef}
                disabled={this.props.disabled}
                onKeyDown={this.onKeyDown}>
                <input
                    ref={this.setCheckboxRef}
                    indeterminate={this.props.indeterminate}
                    type="checkbox"
                    onChange={this.props.onChange}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    name={this.props.name}
                    value={this.props.value} />
                <span className={classNames('check', this.props.type)} />
                <span className="control-label">{this.props.children}</span>
            </label>
        )
    }
}

Checkbox.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string | PropTypes.number,
    indeterminate: PropTypes.bool,
    children: PropTypes.any,
    onChange: PropTypes.func
}
