import Note from "./Note";
import notes from "../notes";

 
function Body() {
    return <div className="body">
        {notes.map(noteItem => <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
        />
        )}
    </div>
}

export default Body;