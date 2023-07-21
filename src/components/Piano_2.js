import _ from 'lodash';
import { NOTES2 } from '../global/constants';
import './Piano.css';
import { Key2 } from './key_2';

const Piano2 = ({ noteArray }) => {

  const keys = _.map(NOTES2, (note, index) => {
    return (
      <Key2
        key={index}
        note={note}
        noteArray = {noteArray}
      />
    );
  });

  return (
    <div>
      <div className="piano">
        {keys} 
      </div>
    </div>
  );
};

export { Piano2 };

