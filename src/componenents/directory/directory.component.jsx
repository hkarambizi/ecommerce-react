import React, { Component } from "react";
import { sections } from "./directory.data";
import { MenuItem } from "./../menu-item/menu-item.component";

export default class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, imageUrl, title, size }) => (
          <MenuItem key={id} title={title} image={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
