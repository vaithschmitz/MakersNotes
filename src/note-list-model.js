class NoteList {
    constructor(){
        this.allNotes = [];
    }

    getNotes(){
        return this.allNotes
    }

    createNote(text){
        this.allNotes.push((new Note(text)))
    }
}

