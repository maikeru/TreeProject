import React from 'react';
import css from '../styles/Tree.css';
import TreeNode from './TreeNode';

export default class Tree extends React.Component {
  render() {
    const children = [
      {name: 'child1', children: [
        {name: 'grandchild1'},
        {name: 'grandchild2'},
      ]},
      {name: 'child2'},
      {name: 'child3'},
    ];
    return (
      <div className="treeContainer">
        <TreeNode name='parent' children={children} hidden={false} />
      </div>
    );
  }
}
