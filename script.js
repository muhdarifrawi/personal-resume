function toggleFunction(name){
    // $("#langCollapse").collapse('toggle');

    selection = "#" + name;
    console.log(selection);
    $(selection).collapse("toggle");
}

