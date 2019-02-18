class Controller{
    constructor(list){
        this.list = NoteList

    }

    $(x) {return document.getElementById(x);}

    addContent() {
        $('app').innerHTML = list.display()
    }

}

