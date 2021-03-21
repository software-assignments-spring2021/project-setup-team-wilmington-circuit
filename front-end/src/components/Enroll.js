import AddClass from "./AddClass";

const Enroll = (props) => {
  return (
    <>
      {props.classElements.map((classElement) => {
        return <AddClass {...classElement}></AddClass>;
      })}
    </>
  );
};
