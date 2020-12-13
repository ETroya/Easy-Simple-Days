
$(document).ready(function(){
    var contianer = $(".container");
//   adding the time and date.
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
 
    console.log(
            new Date().toLocaleDateString('en-us', {
                Weekday: "long",
                year: 'numeric',
                month: 'long',
                day: 'numeric',   
        })
    );

    console.log(new Date().getHours());

    function formatTime(i) {
    if (i == 12 ) {
     return '12PM';
    }
    if (i > 12) {
        return `${i - 12}PM`;
     }

    return `${i}AM`;

    }
    
    for (let i = 9; i < 18; i++) {

     const timeBlock = $("<div>")
     .attr("id", `hour-${i}`)
     .addClass("row time-block past");
     var tableRow
     
    
    
  
     timeBlock.append($('<div>').addClass('col-md-1 hour').text(formatTime(i)));
     timeBlock.append($('<textarea>').addClass('col-md-10 description'));
     timeBlock.append(
         $('<button>')
         .addClass('btn saveBtn col-md-1')
         .append($('<i>')).addClass("fas fa-save")


     );
    
     contianer.append(timeBlock)
    
    }
    });

