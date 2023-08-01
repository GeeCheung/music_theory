import "../../components/Key.css";

const Key2 = ({ note, noteArray }) => {
  let keyClassName = "key";

  const noteIsFlatOrSharp = (note) => {
    return note.length > 1;
  };

  const isFlatOrSharp = noteIsFlatOrSharp(note);

  if (isFlatOrSharp) {
    keyClassName += " flat";
  }

  /// add some new  logic here///

  if (noteArray.includes(note)) {
    keyClassName += " pressed";
  }

  let keyElement;
  if (isFlatOrSharp) {
    keyElement = <div className={keyClassName}></div>;
  } else {
    keyElement = (
      <div className={keyClassName}>
        <div className="key-text">{note.toUpperCase()}</div>
      </div>
    );
  }

  return keyElement;
};

export { Key2 };
