import { useState } from "react";
import React from "react";

// create a typescript interface to dynamically pass the data instead of harcoding
// by creating Props interface, it's like making a contract between parent component and ListGroup component that parent should provide props
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // takes a string parameter and doesn't return a value
}

// pass the ListGroup component properties of Props interface using object destructuring
function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0; this variable is local to this component, so react is not aware of it

  // useState hook is a special function used to tell react that this component can have state
  // state represents data that can change overtime, useState informs react that this component can have a state
  // useState hook always return an array of two elements, in this case, we used array destructuring to catch these guys
  const [selectedIndex, setSelectedIndex] = useState(-1); // initial value of the state selectedIndex is set to -1

  // conditional rendering
  const message = items.length === 0 && <p>No items found.</p>; // && operator evaluates the right side of the code if the left side is true

  // render a ul list from bootstrap docs
  // a component cannot return more than one independent elements
  return (
    // <> is the easier and shorter way to wrap markup and it is a shortcut to tell react that we're wrapping with Fragment
    // dynamically tranform data from the array into jsx markup
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index); // update the state using second element of the useState hook
              onSelectItem(item); // when clicked, will log out item elements using third type of interface
            }} // dynamically change the selectedIndex to current index in order to update the classes
          >
            {item}
          </li> // each element must have a unique key property in react
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
