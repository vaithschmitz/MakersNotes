const assert = {
  isTrue: (assertionToCheck) => {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log('test passed')
    }
  }

};
function noteHasText(){
  note = new Note('Hello');
  assert.isTrue(note.text === "Hello");
};

function noteListStoring(){
  list = new NoteList();
  list.createNote('hey');
  assert.isTrue(list.getNotes().length === 1)
}

function noteListShowAll(){
  list = new NoteList();
  list.createNote('hey');
  list.createNote('bye');
  list.createNote('sup');
  assert.isTrue(list.getNotes().length === 3)
}


noteHasText();
noteListStoring();
noteListShowAll();