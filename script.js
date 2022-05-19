// @ADD YOUR CODE HERE
d3.selectAll("body").on("change", updatePage);

function updatePage () 
{
    var dropDownMenu = d3.selectAll("#selectOption");
    var dropDownMenuID = dropDownMenu.property("id");
    var selectedOption = dropDownMenu.property("value");

    console.log(dropDownMenuID);
    console.log(selectedOption);
}
