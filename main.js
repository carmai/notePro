/**
 * Created by Carmine on 31.10.2016.
 */
var app = new Application("notePro");



app.doSomething();
app.ctrl.doSomething();
app.view.doSomething();
app.model.doSomething();
app.service.doSomething();

//var note1 = new Note("Erste Note", "Essen gehen", 5, "2016-11-02");
//note1.doSomething();


app.model.makeNote("note 1", "trinken hallo ethallo et sic et simplicita", 4, "2016-11-08");
/*
app.model.doSomething();

console.log(app.model.notes[0].title);
console.log(app.model.notes[0].content);
console.log(app.model.notes[0].importance);
console.log(app.model.notes[0].dueDate);
*/
app.model.makeNote("note 2", "essen", 3, "2016-11-06");

/* to be replaced: first the controller must check for notes in services
then call back and apply the appropriate template
 */

//app.model.makeJson();

window.onload = app.ctrl.applyTemplate();

