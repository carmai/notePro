/**
 * Created by Carmine on 31.10.2016.
 */
class Controller {
    constructor() {
        this.name = "controller";

    }

    doSomething() {
        console.log("I'm " + this.name);
    }

    applyTemplate(){
        if (app.model.notes.length == 0) {
            app.view.templateZero();
        } else {
            app.view.templateDefault();
        }

    }

    applyCreateNoteTemplate(){
        app.view.createNoteTemplate();
    }

    applyEditTemplate(){
        app.view.editTemplate()
    }

    formValidate(){
        // TODO validation of data for new notes
        console.log("I am validating");

    }


    executeMakeNote(){
        // Gets the note data from view and starts model makenote
    }

    finishState(i){

        var noteNumber = document.getElementById("noteNumber" + i).value;
        //console.log("Notenumber is: " + noteNumber);
        var finishedCheck = document.getElementById("noteNumber" + i).checked;
        //console.log("finished is: " + finishedCheck);

        app.model.modifyFinishState(noteNumber, finishedCheck);

    }
}
