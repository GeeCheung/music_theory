import _ from "lodash";
import { NOTES2 } from "../../global/constants";
import { Key2 } from "./key_2";

const Pianotokey = ({ noteArray }) => {
  const keys = _.map(NOTES2, (note, index) => {
    return <Key2 key={index} note={note} noteArray={noteArray} />;
  });

  return (
    <div>
      <div className="piano">{keys}</div>
    </div>
  );
};

export default Pianotokey;
