import React from 'react';
import PropTypes from 'prop-types';

export default class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      hidden: props.hidden
    };
    this.handleParentClick = this.handleParentClick.bind(this);
  }

  handleParentClick(e) {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }

  render() {
    const { children, hidden } = this.props;

    let nodeClass = 'tree-node';
    if (hidden) {
      nodeClass = `${nodeClass}__hidden`;
    } else if (this.state.isExpanded) {
      nodeClass = `${nodeClass}__expanded`;
    }

    const hideChildren = hidden || !this.state.isExpanded;
    return (
      <div className="treeWrapper">
        <div className={nodeClass} onClick={this.handleParentClick}>
          {this.props.name}
        </div>
        {children &&
          children.map(child => (
            <TreeNode
              name={child.name}
              hidden={hideChildren}
              children={child.children ? child.children : []}
            />
          ))}
      </div>
    );
  }
}

TreeNode.propTypes = {
  name: PropTypes.string.isRequired
};

TreeNode.defaultProps = {
  hidden: false
};
