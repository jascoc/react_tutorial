import { Dispatch, useState } from "react";
import { MouseEvent } from "react";
import Alert from "./Alert";
import Button from "./Button";

// defines the attribute/property for this component
interface Props {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
  // useState that tells that those variable are going to change so be prepared to update the DOM whenever an event that affect them occurs
  // the first element is the variable that is going to change the second one is the name of the function that set the new value
  // useState(initial value)
  let [selectedIndex, setSelectedIndex] = useState(-1);
  let [showAlert, setShowAlert] = useState(false);
  let liElement =
    items.length > 0 ? (
      items.map((capi, index) => (
        <li
          className={
            selectedIndex == index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={capi}
          onClick={(event) => {
            setSelectedIndex(index);
            handleClick(event);
          }}
        >
          {capi}
          <Button
            label="good"
            buttonType="success"
            onClick={() => {
              setShowAlert(!showAlert);
              onButtonClick;
            }}
          ></Button>
        </li>
      ))
    ) : (
      <p>no items</p>
    );
  return listGroupJSX(liElement, heading, showAlert, setShowAlert);
};

const listGroupJSX = (capiLi: any, heading: string, showAlert: Boolean, setShowAlert: Dispatch<React.SetStateAction<boolean>>) => {
  return (
    <>
      <Alert isShown={showAlert}>crazy</Alert>
      <h1>{heading + " alert"}</h1>
      <ul className="list-group">{capiLi}</ul>
    </>
  );
};

//event handler
const handleClick = (event: MouseEvent) => {
  console.log("you are clicking on ");
  console.log(event.target);
};

const onButtonClick = () => {
  console.log("ciao ");
};

export default ListGroup;
