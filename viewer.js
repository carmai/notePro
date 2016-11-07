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
        document.getElementById("noteContent").innerHTML = "<h3>There are no notes => Use the menu to create a new one</h3>";
    }

    templateDefault(){

        /* Menu */
        this.insertMenu();

        /* core */
        var now = new Date();
        var notesList = "";
        var i;

        for (i = 0; i < app.model.notes.length; i++){

            notesList += "<fieldset><b>" + app.model.notes[i].title + "</b> id = " + i + "<p>" + app.model.notes[i].content + "</p><br>" +
                "<small>Importance attribute: " + app.model.notes[i].importance + "</small><br>" +
                "<small>Created: " + app.model.notes[i].created + "</small><br><br>" +
                "Finished: <input onchange='app.ctrl.finishState(this.value)' type='checkbox'" +
                "value = '" + i + "' id='noteNumber" + i + "'>" +
                " Time left: " + Math.round(Math.abs(app.model.notes[i].dueDate - now) / 3600000) +
                " hours<br><br><button class='formButton' id='editNote' " + i +
                " onclick='app.ctrl.applyEditTemplate(" + i + ")'>Edit</button>" +
                " <button class='formButton' id='deleteNote' " + i + " onclick='app.ctrl.executeDeleteNote(" + i + ")'>Delete</button>" +
                "<br><br></fieldset>";

        }
        document.getElementById("noteContent").innerHTML = notesList;
        document.getElementById("edit").innerHTML = "";

    }

    editNoteTemplate(){
        //TODO this template is for editing a new note
        console.log("create note template has been activated");
        var createNoteFormString = "<div class='createNote' id='createNote'><form id = 'editNoteForm' > <fieldset> <legend>Title</legend> <p>" +
            "<label for='title'>Title: </label> <input type='text' name='title' placeholder='title' id='title' ></p></fieldset><fieldset>" +
            "<legend>Content</legend><p><label for='inhalt'>Content: </label><textarea name='inhalt' placeholder='content' id='inhalt' >" +
            "</textarea></p></fieldset><fieldset><legend>Importance</legend><p><label for='importance'>Importance: </label><select name='importance'" +
            " id='importance' class='formSelect'><option value='1'>Level 1: very low</option><option value='2'>Level 2: low</option>" +
            "<option value='3'>Level 3: medium</option>" +
            "<option value='4'>Level 4: high</option><option value='5'>Level 5: very high</option></select></p></fieldset><fieldset><legend>Due Date" +
            "</legend><p><label for='dueDate'>Due date: </label><input type='date' name='dueDate' id='dueDate'></p></fieldset></form>" +
            "<p><button class='formButton' id='sendData' onclick='app.ctrl.formValidate()'>Save</button>" +
            " <button class='formButton' id='cancel' onclick='app.ctrl.applyTemplate()'>Cancel</button></p></div>" ;
        document.getElementById("edit").innerHTML = createNoteFormString;


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
         var createNoteWindow = window.open('editNote.html', 'createNoteWindow', 'width=800', 'height=800', 'replace=false');
         createNoteWindow.document.write(createNoteFormString);
         */

        /*
         createNoteWindow.document.body.innerHTML = createNoteFormString; does not work
         */



        //document.body.innerHTML = createNoteFormString;


    }

    editTemplate(i){
        var editNoteFormString = "<div class='createNote' id='createNote'><form id = 'editNoteForm' > <fieldset> <legend>Title</legend> <p>" +
            "<label for='title'>Title: </label> <input type='text' name='title' placeholder='title' id='title' ></p></fieldset><fieldset>" +
            "<legend>Content</legend><p><label for='inhalt'>Content: </label><textarea name='inhalt' placeholder='content' id='inhalt' >" +
            "</textarea></p></fieldset><fieldset><legend>Importance</legend><p><label for='importance'>Importance: </label><select name='importance'" +
            " id='importance' class='formSelect'><option value='1'>Level 1: very low</option><option value='2'>Level 2: low</option>" +
            "<option value='3'>Level 3: medium</option>" +
            "<option value='4'>Level 4: high</option><option value='5'>Level 5: very high</option></select></p></fieldset><fieldset><legend>Due Date" +
            "</legend><p><label for='dueDate'>Due date: </label><input type='date' name='dueDate' id='dueDate'></p></fieldset></form>" +
            "<p><button class='formButton' id='sendData' onclick='app.ctrl.editFormValidate(" + i + ")'>Save</button>" +
            " <button class='formButton' id='cancel' onclick='app.ctrl.applyTemplate()'>Cancel</button></p></div>" ;
        document.getElementById("edit").innerHTML = editNoteFormString;

        document.getElementById("title").value = app.model.notes[i].title;
        document.getElementById("inhalt").value = app.model.notes[i].content;
        document.getElementById("importance").value = app.model.notes[i].importance;

        var year = app.model.notes[i].dueDate.getFullYear();
        var month = app.model.notes[i].dueDate.getMonth()+1;
        var dayInteger = app.model.notes[i].dueDate.getDate();
        if (dayInteger < 10){
            dayInteger = "0" + dayInteger;
        }
        var dateString = year + "-" + month + "-" + dayInteger;
        document.getElementById("dueDate").value = dateString;

    }


    activeOnlyTemplate(){

        /* Menu */
        this.insertMenu();

        /* core */
        var now = new Date();
        var notesList = "";
        var i;

        for (i = 0; i < app.model.notes.length; i++){

            if (app.model.notes[i].done == 0) {

            notesList += "<fieldset><b>" + app.model.notes[i].title + "</b> id = " + i + "<p>" + app.model.notes[i].content + "</p><br>" +
                "<small>Importance attribute: " + app.model.notes[i].importance + "</small><br>" +
                "<small>Created: " + app.model.notes[i].created + "</small><br><br>" +
                "Finished: <input onchange='app.ctrl.finishState(this.value)' type='checkbox'" +
                "value = '" + i + "' id='noteNumber" + i + "'>" +
                " Time left: " + Math.round(Math.abs(app.model.notes[i].dueDate - now) / 3600000) +
                " hours<br><br><button class='formButton' id='editNote' " + i +
                " onclick='app.ctrl.applyEditTemplate(" + i + ")'>Edit</button>" +
                " <button class='formButton' id='deleteNote' " + i + " onclick='app.ctrl.executeDeleteNote(" + i + ")'>Delete</button>" +
                "<br><br></fieldset>";
            }
        }
        document.getElementById("noteContent").innerHTML = notesList;
        document.getElementById("edit").innerHTML = "";

    }



    insertMenu(){
        document.getElementById("navLeft").innerHTML =
            "<button class='button' id='createNote' onclick='app.ctrl.applyEditNoteTemplate()'>Create new note</button>" +
            "<button class='button' id='sortFinishDate' onclick='app.ctrl.executeSortByFinishDate()'>Sort by finish date</button>" +
            "<button class='button' id='sortCreatedDate' onclick='app.ctrl.executeSortByCreatedDate()'>Sort by created date</button>" +
            "<button class='button' id='sortImportance' onclick='app.ctrl.executesortByImportance()'>Sort by importance</button>";
       /* document.getElementById("navRight").innerHTML =
            "<select class='selectStyle' id='styleSwitcher' onchange='myFunction()'>" +
            "<option class='selectStyle' value='default'>Default Style</option>" +
            "<option class='selectStyle' value='fancy'>Fancy Style</option></select>" ; */
        document.getElementById("leftMenu").innerHTML =
            "<select class='selectStyle' id='styleSwitcher' onchange='app.ctrl.applyChangeCSS()'>" +
            "<option class='selectStyle' value='0'>CSS 1</option>" +
            "<option class='selectStyle' value='1'>CSS 2</option></select></br></br>" +
            "<button class='buttonl' id='showAll' onclick='app.ctrl.applyTemplate()'><b>*Show all items<b/></button></br>" +
            "<button class='buttonl' id='hideFinished' onclick='app.ctrl.applyActiveOnlyTemplate()'><b>*Hide finished</b></button>";
    }

    changeCSS(cssFile, cssLinkIndex){

        var link0 = document.getElementsByTagName("link").item(cssLinkIndex);

        var link1 = document.createElement("link");
        link1.setAttribute("rel", "stylesheet");
        link1.setAttribute("type", "text/css");
        link1.setAttribute("href", cssFile);

        document.getElementsByTagName("head").item(0).replaceChild(link1, link0);

    }

    formString(){

    }

}