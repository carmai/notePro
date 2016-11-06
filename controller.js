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

    applyEditNoteTemplate(){
        app.view.editNoteTemplate();
    }

    applyEditTemplate(i){
        console.log("i in applyedittemplate ist gleich: " + i);
        app.view.editTemplate(i)
    }

    formValidate(){
        // Validation of data for new notes
        console.log("I am validating");

        var d = new Date();
        var dDay = d.getDay();
        var dMonth = d.getMonth();
        var dYear = d.getFullYear();

        var title = document.getElementById("title").value;
        console.log(title);

        var content = document.getElementById("inhalt").value;
        console.log(content);

        var importance = document.getElementById("importance").value;
        console.log(importance);

        var dueDateString = document.getElementById("dueDate").value;
        console.log(dueDateString);



        if (title == "") {
            alert("Invalid data\nTitle must be filled out");
        } else if (content == "") {
            alert("Invalid data\nContent must be filled out");
        } else if (dueDateString == "") {
            alert("Invalid data\nDue date must be provided");
        }  else if ((new Date(dueDateString).getDay()) == dDay && (new Date(dueDateString).getMonth()) == dMonth &&
            (new Date(dueDateString).getFullYear()) == dYear) {
            alert("Invalid data\nIf your note expires today. The due date is tomorrow at 00:00 am");
        }   else if ((new Date(dueDateString)) < d) {
            alert("Invalid data\nYou cannot provide a date in the past");
        } else {

            var dueDate = new Date(dueDateString);

            //app.model.makeNote(title, content, importance, dueDate);
            this.executeMakeNote(title, content, importance, dueDate);
            app.ctrl.applyTemplate();
        }
    }


    executeMakeNote(title, content, importance, dueDate){
        app.model.makeNote(title, content, importance, dueDate);
    }


    editFormValidate(i){
        // Validation of data for new notes
        console.log("I am validating");



        var d = new Date();
        var dDay = d.getDay();
        var dMonth = d.getMonth();
        var dYear = d.getFullYear();

        var title = document.getElementById("title").value;
        console.log(title);

        var content = document.getElementById("inhalt").value;
        console.log(content);

        var importance = document.getElementById("importance").value;
        console.log(importance);

        var dueDateString = document.getElementById("dueDate").value;
        console.log(dueDateString);



        if (title == "") {
            alert("Invalid data\nTitle must be filled out");
        } else if (content == "") {
            alert("Invalid data\nContent must be filled out");
        } else if (dueDateString == "") {
            alert("Invalid data\nDue date must be provided");
        }  else if ((new Date(dueDateString).getDay()) == dDay && (new Date(dueDateString).getMonth()) == dMonth &&
            (new Date(dueDateString).getFullYear()) == dYear) {
            alert("Invalid data\nIf your note expires today. The due date is tomorrow at 00:00 am");
        }   else if ((new Date(dueDateString)) < d) {
            alert("Invalid data\nYou cannot provide a date in the past");
        } else {

            var dueDate = new Date(dueDateString);

            //app.model.makeNote(title, content, importance, dueDate);
            this.executeEditNote(i, title, content, importance, dueDate);
            app.ctrl.applyTemplate();
        }
    }

    executeEditNote(i, title, content, importance, dueDate){
        // calls function in model to edit the note
        console.log("I am sending the request to the model to edit the note");
        app.model.editNote(i, title, content, importance, dueDate);

    }

    executeDeleteNote(i){
        // TODO call removeNote() in model
        console.log("I am going to call model to delete note " + i);
        app.model.deleteNote(i);
        app.ctrl.applyTemplate();

    }


    finishState(i){

        var noteNumber = document.getElementById("noteNumber" + i).value;
        //console.log("Notenumber is: " + noteNumber);
        var finishedCheck = document.getElementById("noteNumber" + i).checked;
        //console.log("finished is: " + finishedCheck);

        app.model.modifyFinishState(noteNumber, finishedCheck);

    }
}
