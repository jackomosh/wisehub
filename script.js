// $(function() {
//     // alert("This is my first Javascript code")
//     $("#title").text("Just Changed Hello World");
//     // $('#mainp').html('<h2>Great Work</h2>');
//     $("#mainp").prepend("<h2>Hello Javascript</h2>");
//     $("#mainp").append("<h3> ... for you to ponder ... </h3>");
//     $("#anchor").attr("href", "https://youtube.com");
// });

// // jQuery Selectors

// $(function() {
//     // By Id
//     // $("#first").addClass("highlight")

//     // By Element or tag
//     // $("p").addClass("highlight")

//     // By class
//     // $(".chosen").addClass("highlight")

//     // Combining elements
//     // $("#first, .chosen").addClass("highlight")

//     // contain
//     // $("li:contains('Three')").addClass("highlight")

//     // next and previous
//     // $("li:contains('Three')").next().addClass("highlight")

//     // $("li:contains('Three')").prev().addClass("highlight")

//     // siblings, parent
//     // $("li:contains('Three')").parent().addClass("highlight")

//     // nth-child
//     // $("li:nth-child(1)").addClass("highlight")

//     // selecting by attributes
//     // $("p[name!='sec']").addClass("highlight")
//     // $('p').not("[name]").addClass("highlight")

//     // header
//     // $(':header').addClass("highlight")

//     // empty
//     // $("p:empty").text("No more")

//     // even, odd
//     $("li:odd").addClass("highlight")
// });

// $(function() {

//     $("#success").hide();
//     $("#startover").addClass("hoverIn")

//     var score = 0;

//     $("#kasongoshead").click(function () {
//         score++;
//        $("#score").text(score)
//        $("#success").show("slow").fadeOut(2000);
//     });

//     $("#startover").hover(function () {
//         score = 0
//         $("#score").text(score)
//         $("#startover").addClass("hoverIn").removeClass("hoverOut")
//     }, function () {
//         $("#startover").removeClass("hoverIn").addClass("hoverOut")
//     });
// });

$(function () {
    $("#tabs").tabs();
    $( "#datepicker" ).datepicker({
        onSelect: function(dateText, inst) {
            $("#title").text("You Picked: " + dateText)
        }
    });
});