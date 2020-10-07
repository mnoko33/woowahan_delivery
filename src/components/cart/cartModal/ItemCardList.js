import React from 'react';
import ItemCard from './ItemCard';

function ItemCardList({ items, updateItem, removeItem }) {
  return (
    <>
      { items.map(item => 
              <ItemCard
                key={item.id}
                item={item}
                updateItem={({ itemId, itemCnt }) => updateItem({ itemId, itemCnt })}
                removeItem={id => removeItem(id)}
              />)
            }
    </>
  )
}

export default ItemCardList