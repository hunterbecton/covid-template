import React from "react"
import { TwitterPicker } from "react-color"

export class ColorController extends React.Component {
  state = {
    background: "#fff",
  }

  onChange = color => {
    this.setState({ background: color.hex })
  }

  render() {
    return (
      <div style={{ margin: "1rem" }}>
        <TwitterPicker
          color={this.state.background}
          onChangeComplete={this.onChange}
        />
      </div>
    )
  }
}
