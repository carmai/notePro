/**
 * Created by Carmine on 01.11.2016.
 */
class Model {
    constructor() {
        this.name = "model";
        this.notes = [];

    }

    doSomething() {
        console.log("I'm " + this.name + " notes are: " + this.notes +
            " my array length is: " + this.notes.length);
    }

    makeNote(title, content, importance, dueDate){

        this.notes.push(new Note(title, content, importance, dueDate));
        this.saveData();
    }

    removeNote(){

    }

    modifyFinishState(noteNumber, finishedCheck){
        if (finishedCheck == true){
            console.log("set finished code 1");
            this.notes[noteNumber].done = 1;
            console.log("Note number: " + noteNumber + " Code has been set to " + this.notes[noteNumber].done);
            } else {
            console.log("set not finished code 0");
            this.notes[noteNumber].done = 0;
            console.log("Note number: " + noteNumber + " Code has been set to " + this.notes[noteNumber].done);
        }
    }

    saveData(){
        // TODO call services to save data
    }
}