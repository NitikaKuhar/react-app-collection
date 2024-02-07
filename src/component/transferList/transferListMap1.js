import React, { useState, useId } from 'react';
import './style.css';

const DEFAULT_ITEMS_LEFT = [
    'HTML',
    'JavaScript',
    'CSS',
    'TypeScript',
];
const DEFAULT_ITEMS_RIGHT = [
    'React',
    'Angular',
    'Vue',
    'Svelte',
];

// Convert the default array of items into a map with the item
// name as a key and the value as a boolean.
function generateItemsMap(items) {
    return new Map(items.map((label) => [label, false]));
}
// Determine if the list has no selected items.
function hasNoSelectedItems(items) {
    return (
        Array.from(items.values()).filter((val) => Boolean(val))
            .length === 0
    );
}

function CheckboxItem({ onChange, label, checked }) {
    const id = useId();
    return (
        <div className="transfer-list__section__items__item">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                id={id}

            ></input>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

function ItemList({ items, setItems }) {
    return (
        <div className="transfer-list__section">
            <ul className="transfer-list__section__items">
                {
                    Array.from(items.entries()).map(
                        ([label, checked]) => (
                            <li key={label}>
                                <CheckboxItem
                                    label={label}
                                    checked={checked}
                                    onChange={() => {
                                        const newItems = new Map(items);
                                        newItems.set(label, !items.get(label));
                                        setItems(newItems);
                                    }}

                                />
                            </li>
                        ),
                    )}
            </ul>
        </div>
    )
}

const TransferList = () => {

    const [leftItems, setLeftItems] = useState(generateItemsMap(DEFAULT_ITEMS_LEFT),);
    const [rightItems, setRightItems] = useState(generateItemsMap(DEFAULT_ITEMS_RIGHT),);

    const transferAllItems = (itemsSrc, setItemsSrc, itemsDest, setItemsDest) => {
        setItemsDest(new Map([...itemsDest, ...itemsSrc]));
        setItemsSrc(new Map());
    }

    const transferSelectedItems = (itemsSrc, setItemsSrc, itemsDest, setItemsDest) => {
        const newItemsSrc = new Map(itemsSrc);
        const newItemsDest = new Map(itemsDest);

        //remove selected item fromsource list and add to the destination list
        itemsSrc.forEach((val, key) => {
            if (!val) return;

            newItemsDest.set(key, val);
            newItemsSrc.delete(key);
        });

        setItemsSrc(newItemsSrc);
        setItemsDest(newItemsDest);
    }

    return (
        <div className="transfer-list">
            <ItemList items={leftItems} setItems={setLeftItems}></ItemList>
            <div className="transfer-list__actions">
                <button
                    disabled={rightItems.size === 0}
                    onClick={() => {
                        transferAllItems(
                            rightItems,
                            setRightItems,
                            leftItems,
                            setLeftItems
                        )
                    }

                    }

                >
                    <span aria-hidden={true}>&lt;&lt;</span>
                </button>

                <button
                    disabled={hasNoSelectedItems(rightItems)}
                    onClick={() => {
                        transferSelectedItems(
                            rightItems,
                            setRightItems,
                            leftItems,
                            setLeftItems
                        )
                    }
                    }

                >
                    <span aria-hidden={true}>&lt;</span>
                </button>

                <button
                    disabled={hasNoSelectedItems(leftItems)}
                    onClick={() => {
                        transferSelectedItems(
                            leftItems,
                            setLeftItems,
                            rightItems,
                            setRightItems
                        )
                    }
                    }

                >
                    <span aria-hidden={true}>&gt;</span>
                </button>

                <button
                    disabled={leftItems.size === 0}
                    onClick={() => {
                        transferAllItems(
                            leftItems,
                            setLeftItems,
                            rightItems,
                            setRightItems
                        )
                    }
                    }
                >
                    <span aria-hidden={true}>&gt;&gt;</span>
                </button>

            </div>
            <ItemList items={rightItems} setItems={setRightItems}/>
        </div>
    );

}

export default TransferList;