function toggleFunction(name){
    // $("#langCollapse").collapse('toggle');
    $(".collapse").collapse("hide");
    selection = "#" + name;
    console.log(selection);
    $(selection).collapse("toggle");
}

