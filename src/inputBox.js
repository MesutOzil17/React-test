import react from "react";
import React, { Component } from "react";
import { getSuggestions } from "./helper";

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            dropdown: []
        }
    }

    handleChange = async (e) => {
        let result = await getSuggestions(e.target.value)
        this.setState({
            dropdown: result
        })
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.handleChange} />
                {this.state.dropdown.length > 0 && this.state.dropdown.map((i, j) => {
                    return (
                        <div key={j}>
                            <select id="serch-result">
                                <option vlaue={i}>{i}</option>
                            </select>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default InputBox;
