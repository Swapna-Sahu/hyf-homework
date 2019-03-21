// NOnoN0nOYes (Note taking app)

var notes = [];

// Save a note
function addNote (content,id) {
var newText = new Object;
newText.content = content;
newText.id = id; 
notes.push(newText);
}

// Get a note
function getNoteFromId(id) {
var referenceId = id;
var notesLength = notes.length;
if(isNaN(referenceId))
    { console.log("Id is not a number.")}
else{
    for (i=0; i<notesLength;i++)
    {
        if (notes[i].id === referenceId)
        {
    	 position = i;
	     console.log(notes[i]);
 	     return position;
    	 break;
        }
    }
    return ;
    }
}

// Log out notes
function logOutNotesFormatted() {
for(var i=0; i<notes.length;i++)
{
console.log("This note with id : " +notes[i].id+ ", has the following note text : \"" +notes[i].content+  "\".");
}
}

// deleting the notes by Id
function deleteNoteById(id) {
    for(var i=0;i<notes.length; i++)
    {
        if(notes[i].id==id)
        {
            notes.splice(i,1);
        }
    }
}


console.log("Created and added notes to the notes array");
addNote ("Hello Everyone",1);
addNote ("How you guys doing?",2);
addNote ("Enjoy coding!",3);
addNote ("See you soon. bye bye.",4);
console.log(notes);

console.log("I want to know what I wrote in id = 3 ");
getNoteFromId(3);

console.log("These are the notes : ")
logOutNotesFormatted();

console.log("I want to delete 4th line");
deleteNoteById(4);
