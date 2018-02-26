import React from 'react';
import css from '../styles/Tree.css';

export default class Tree extends React.Component {
  constructor() {
    super();
    this.state = { parentExpanded: false };
    this.handleParentClick = this.handleParentClick.bind(this);
  }

  handleParentClick(e) {
    this.setState(prevState => ({ parentExpanded: !prevState.parentExpanded }));
  }

  render() {
    const treeParentClass = this.state.parentExpanded
      ? 'tree-parent__expanded'
      : 'tree-parent';
    const hideChildren = !this.state.parentExpanded;
    const treeChildClass = hideChildren ? 'tree-child__hidden' : 'tree-child';
    return (
      <div className={treeParentClass} onClick={this.handleParentClick}>
        Parent
        <div className={treeChildClass}>Child1</div>
        <div className={treeChildClass}>Child2</div>
        <div className={treeChildClass}>Child3</div>
      </div>
    );
  }
}
