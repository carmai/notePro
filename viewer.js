/**
 * Created by Carmine on 01.11.2016.
 */
class Viewer {
    constructor() {
        this.name = "views";

    }

    doSomething() {
        console.log("I'm " + this.name );
    }

    templateZero(){
        this.insertMenu();
        document.getElementById("noteContent").innerHTML = "No notes";
    }

    templateDefault(){

    /* Menu */
     this.insertMenu();

     /* core */
     var finishNav = "";
     var i;

        for (i = 0; i < app.model.notes.length; i++){

            finishNav += "Finished: <input onchange='app.ctrl.finishState(this.value)' type='checkbox'" +
                "value = '" + i + "' id='noteNumber" + i + "'>" +
                "<p>Time left: " + Math.round(app.model.notes[i].hoursLeft) + " hours</p><br><br><br><br>";

        }
        document.getElementById("due").innerHTML = finishNav;

      var noteContent = "";
      var k;
        for (k = 0; k < app.model.notes.length; k++) {
            noteContent += "<b>" + app.model.notes[k].title + "</b><p>";
            noteContent +=  app.model.notes[k].content + "</p><br>";
            noteContent += "<small>Importance attribute: " + app.model.notes[k].importance + "</small><br>";
            noteContent += "<small>Created: " + app.model.notes[k].created + "</small><br><br>";
        }
     document.getElementById("noteContent").innerHTML = noteContent;
     document.getElementById("footer").innerHTML = "";

    }

    createNoteTemplate(){
        //TODO notes edit template
        console.log("create note template has been activated");
        var createNoteFormString = "<div class='createNote' id='createNote'><form id = 'createNoteForm' > <fieldset> <legend>Title</legend> <p>" +
            "<label for='title'>Title: </label> <input type='text' name='title' placeholder='title' id='title'></p></fieldset><fieldset>" + "" +
            "<legend>Content</legend><p><label for='content'>Content: </label><textarea name='content' id='content' placeholder='content'>Content here" +
            "</textarea></p></fieldset><fieldset><legend>Importance</legend><p><label for='importance'>Importance: </label><select name='importance'" +
            "id='importance' class='formSelect'><option value='1'>Level 1: very low</option><option value='2'>Level 2: low</option>" +
            "<option value='3'>Level 3: medium</option>" +
            "<option value='4'>Level 4: high</option><option value='5'>Level 5: very high</option></select></p></fieldset><fieldset><legend>Due Date" +
            "</legend><p><label for='dueDate'>Due date: </label><input type='date' name='dueDate' id='dueDate'></p></fieldset></form>" +
            "<p><button class='formButton' id='sendData' onclick='app.ctrl.formValidate()'>Save</button>" +
            "<button class='formButton' id='cancel' onclick='app.ctrl.applyTemplate()'>Cancel</button></p></div>" ;
        document.getElementById("footer").innerHTML = createNoteFormString;

        /*
        document.write(createNoteFormString);
        */

        /*
        var para = document.createElement("P");
        var text = document.createTextNode(createNoteFormString);
        para.appendChild(text);
        document.getElementById("edit").appendChild(para);
        */

        /*
        var createNoteWindow = window.open('', 'createNoteWindow', 'width=800', 'height=800', 'replace=false');
        createNoteWindow.document.write(createNoteFormString);
        */
        //document.body.innerHTML = createNoteFormString;


    }

    editTemplate(){
        //TODO notes edit template
    }

    insertMenu(){
        document.getElementById("navLeft").innerHTML =
            "<button class='button' id='createNote' onclick='app.ctrl.applyCreateNoteTemplate()'>Create new note</button>" +
            "<button class='button' id='sortFinishDate' onclick='myFunction()'>Sort by finish date</button>" +
            "<button class='button' id='sortCreatedDate' onclick='myFunction()'>Sort by created date</button>" +
            "<button class='button' id='sortImportance' onclick='myFunction()'>Sort by Importance</button>" +
            "<button class='button' id='showHideFinished' onclick='myFunction()'>Hide finished</button>";
        document.getElementById("navRight").innerHTML =
            "<select class='selectStyle' id='styleSwitcher' onchange='myFunction()'>" +
            "<option class='selectStyle' value='default'>Default Style</option>" +
            "<option class='selectStyle' value='fancy'>Fancy Style</option></select>" ;
    }

}