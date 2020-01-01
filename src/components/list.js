import React from 'react';

export default class List extends React.Component {
  render() {
    const { items, itemElement: Item } = this.props;

    return(
      <div>
        {items.map(item =>
          <Item 
            {...item}
            key={item.id}
          />
        )}
      </div>
    );
  }
}