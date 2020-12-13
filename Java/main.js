var timeZone = moment().format('LLLL');  
$("#currentDay").text(timeZone);
console.log(timeZone);
var timing = moment().format('H')
console.log(timing);
function structure()
{
    for (var i = 9; i < 18; i++) 
    {
        var divRow = $("<div>", { "class": "row", "id": (i) });
        var divTime = $("<div>", { "class": "col-1 time-block hour" });
        var divDescriptions = $("<textarea>", { "class": "col-10 description", "value": "" });
        var divSaveBtn = $("<button>", { "class": "col-1 saveBtn" });
    //Connecting variables
        timeloop(divRow.attr("id"),divDescriptions);
        divTime.text(i +"00");
        if(localStorage.getItem(divTime.text()) !== null)
        {
            divDescriptions.text(localStorage.getItem(divTime.text()));
        }
        else{
            divDescriptions.text("");
        }
        //divTime.text(i + "00");
        divRow.append(divTime);
        divRow.append(divDescriptions);
        divRow.append(divSaveBtn.addClass("fas fa-save"));
        $(".container").append(divRow);
    }
}
function timeloop (timeHour, description) {
    if (JSON.parse(timing) > JSON.parse(timeHour)) {
        description.addClass("past");
    }
    else if (JSON.parse(timing) === JSON.parse(timeHour)) {
        description.addClass("present");
    }
    else {
        description.addClass("future");
    }
}

structure();

$(".saveBtn").on("click", function(){
    var userTime = $(this).siblings(".hour").text();
    var userText = $(this).siblings(".description").val();

    localStorage.setItem(userTime,userText);
    
})
     
    


    

