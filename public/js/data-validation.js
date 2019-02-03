var badWords =  [{"id":"1","name":"Psycho"},
    {"id":"2","name":"Bipolar"},
    {"id":"3","name":"Depressed"},
    {"id":"4","name":"emotional"},
    {"id":"5","name":"Anxious"},
    {"id":"6","name":"Insane"},
    {"id":"7","name":"OCD"},
    {"id":"8","name":"Schizophrenic"},
    {"id":"9","name":"Anorexic"},
    {"id":"10","name":"Bulimic"},
    {"id":"11","name":"ADHD"},
    {"id":"12","name":"PTSD"},
    {"id":"13","name":"Manic"},
    {"id":"14","name":"Panic attack"},
    {"id":"15","name":"Binge"},
    {"id":"16","name":"Insomnia"}];

function formValidation(frm) {
    var chkUserText = valUserText(frm);

    return chkUserText;
}

function valUserText(frm) {
    var inputValue = frm.userText.value;
    console.log(inputValue);
    //badWords =JSON.stringify(fs.readFileSync('../public/data/badWords.json', 'utf-8'));
    var userBadWords = [];
    var sentence, alertSentence = "";
    var count = 0;

    if(inputValue.length > 0){
        var sentenceWords = inputValue.split(" ");
        for(var i = 0; i < sentenceWords.length; i++){
            for(var j = 0; j < badWords.length; j++){
                if(sentenceWords[i] == badWords[j].name){
                    for(var k = 0; k < userBadWords.length; k++){
                        if(sentenceWords[i] == userBadWords[k]){
                            count++;
                        }
                    }

                    if(count == 0){
                        userBadWords.push(sentenceWords[i]);

                    }
                }
            }
            if(i == 0){
                sentence = sentenceWords[i];
            }else{
                sentence += sentenceWords[i];
            }
            count = 0;
        }

        if(userBadWords.length > 0){
            if(userBadWords.length == 1)
                AddErrorMessage("Are you sure you use " + userBadWords + " correctly? Learn more.");
            else{
                for(var i = 0; i < userBadWords.length; i++){
                    alertSentence += (userBadWords[i] + " ");
                }
                AddErrorMessage("Are you sure you use " + alertSentence + " correctly? Learn more.");
            }
        }

    }

    if(userBadWords.length > 0){
        console.log(userBadWords);
        return true;
    }
    else{
        console.log("no bad words found")
        return false;
    }

}

function AddErrorMessage(Message) {
    var myspan = document.getElementById("errorText");
    var newcontent = document.createElement('span');
    newcontent.innerHTML = Message + "<br/>";
    myspan.appendChild(newcontent);
}

function ChangeLabelForError(Elem, Add) {
    if (Add) {
        Elem.classList.add("error");
    }
    else {
        Elem.classList.remove("error");
    }
}
