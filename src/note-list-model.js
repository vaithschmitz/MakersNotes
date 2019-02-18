class NoteList {
    constructor(allNotes){
        this.allNotes = [];
    }

    getNotes(){
        return this.allNotes
    }

    createNote(text){
        this.allNotes.push((new Note(text)))
    }
}

