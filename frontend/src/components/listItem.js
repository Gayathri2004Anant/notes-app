import {Link} from 'react-router-dom';

// const ListItem = ({note}) => {
//     return ( 
//         <Link to={"/note/"+note.id+"/"}>
//         <div className="note" key={note.id}>
//             <h3>{note.title}</h3>
//             <p>Last Updated: {note.updated}</p>
//         </div>
//         </Link>
//      );
// }

const ListItem = ({ note }) => {
  
  let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString();
  }
    return (
      <Link to={"/note/" + note.id + "/"}>
        <div className="note-link" key={note.id}>
          <h3>{note.title}</h3>
          <p>Last Updated: {getTime(note)}</p>
        </div>
      </Link>
    );
  };
  
 
export default ListItem;