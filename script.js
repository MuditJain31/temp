function execute() {
    let htmlCode = document.querySelector("#html").value;
    let cssCode = '<style>' + document.querySelector('#css').value + '</style>';
    let jsCode = document.querySelector('#js').value;
    let output = document.querySelector('#output');

    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}


//eventlistenesers to automatically execute written code
//runs on website open
document.querySelector("#leftcol").addEventListener("keyup",execute);
document.querySelector("#css").addEventListener("keyup",execute);
document.querySelector("#rightcol").addEventListener("keyup",execute);

execute();

// for tab key behaviour
document.addEventListener("keydown",function(event){
    // .which is deprecated also it returns diff value for a key in different browser
    if(event.key==='Tab'){
        event.preventDefault();
        let textAreas = document.querySelectorAll("textarea");
        textAreas.forEach(function(textArea){
            if(textArea===document.activeElement){
                const pos = textArea.selectionStart;
                let val = textArea.value;
                let newStr = val.slice(0,pos)+"    "+val.slice(pos);
                textArea.value=newStr;
                textArea.selectionEnd = pos+4;
            }
        })
    }
})