var form = document.querySelector("form");
var nam = document.querySelector("#inp1");
var reg = document.querySelector("#inp2");
var h4 = document.querySelector("h4");

form.addEventListener("submit",function(ev){
    ev.preventDefault();

    if(inp1.value === '' || inp2.value === ''){
    h4.textContent="form should not be empty"
        // console.log("blank")
    }
    else(
        h4.textContent="submitted successfully"
    )

})
