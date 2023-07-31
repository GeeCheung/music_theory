import "../../components/Key.css";

const Key2 = ({ note, noteArray }) => {
  let keyClassName = "key";

  const noteIsFlat = (note) => {
    return note.length > 1;
  };

  const isFlat = noteIsFlat(note);

  if (isFlat) {
    keyClassName += " flat";
  }

  if (noteArray.includes(note)) {
    keyClassName += " pressed";
  }

  let keyElement;
  if (isFlat) {
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

/// Change all this logic///
