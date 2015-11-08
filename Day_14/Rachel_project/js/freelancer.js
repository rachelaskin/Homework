    /*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/*// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});*/

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});




// Add new ingredient when submit button is clicked
$('#ingredientName').on('submit', addNewIngredient);

// Remove ingredient when remove button is clicked
$('#ingredients-added').on('click', '.remove', removeIngredient)

// When an edit link is clicked, edit the ingredient
$('#ingredients-added').on('click', '.edit', editIngredient);

// When an item editor is submitted, save the changes
$('#ingredients-added').on('submit', '.editor', saveIngredient);

// When a user leaves an item editor form, save the changes
$('#ingredients-added').on('blur', '.editor', saveIngredient);

//Add new, remove, edit, and save ingredients
    function addNewIngredient (event) {
        event.preventDefault();

        var newIngredient = $('#ingredientName').val();

        $('#ingredients-added').append('<li><div class="btn btn-success btn-lg">' + newIngredient + '</div><a class="edit">Edit</a><a class="remove">Remove</a></li>');
        
    }

    function removeIngredient(event) {
        event.preventDefault();

        $(this).parent().remove();

    }

    function editIngredient(event){
        event.preventDefault();

        // Get the text of the to-do item; it's a sibling of the clicked link
        var ingredientText = $(this).siblings('.ingredients').html();

        // Get the parent <li>
        var listIngredient = $(this).parent();

        // Replace the parent <li> contents with an edit form
        listIngredient.html('<form class="editor"><input value="' + ingredientText + '"></form>');

        // Focus the keyboard on the input that was just added
        listIngredient.find('input').focus();
    }

    function saveIngredient(event){
        event.preventDefault();

        var ingredientText = $(this).children('input').val();

        var listIngredient = $(this).parent();

        listIngredient.html('<span class="item">' + ingredientText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>');
    }


// Add an additional text area for more recipe instructions
        function getNumberOfSteps () {

            var count = $('.form-group col-xs-12').length;
            console.log(count);
        }

        function addNewStep(){

            var stepNumber = getNumberOfSteps() + 1;

            var newStepHtml = '<div class="row control-group">' +
                            '<div class="form-group col-xs-12 floating-label-form-group controls">' +
                                '<label>Message</label>' +
                                '<textarea rows="4" class="form-control" placeholder="Step ' + 
                                stepNumber + 
                                '" id="message"></textarea>' +
                                '<p class="help-block text-danger"></p>' +
                            '</div>' +
                        '</div>';
            // append newStepHtml to the screen
            $('.steps').append(newStepHtml);

        }

        $("#add-step").on("click", addNewStep);

        // function postToGoogle (){
        //     $.ajax({
        //         url: "https://docs.google.com/forms/d/1Jy5nKG-NJxymmeIWDIa4yXlkkvb7IJQMonT2kY0_cWQ/viewform"
        //         data: {
        //             "entry.679142677": recipe1,
        //             " ": etc
        //             },
        //             type: "POST",
        //             dataType: "xml",
        //         {});
        // };

        // $