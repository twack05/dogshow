(function () {

  var $root = $("#puppy-showcase")
    , puppyTemplate = $("#templates .puppy").html()

// View Interaction

  // Using event delegation on the $root because the
  // because the image is in the template to be rendered.
  $root.on('click', '.vote-image', function (e) {
    // TODO
    var id = $(this).parent().data('id');
    puppies.castVote(id);
  });


// Model Interaction

  puppies.on("create", function (puppy) {
    console.log('Spawned puppy:', puppy);
    // TODO
    var itemTemplate = $('#templates .puppy').html();
    var newitemHtml = $.render(itemTemplate, puppy);
    $root.append(newitemHtml);
  });

  puppies.on('vote-cast', function (puppy) {
    console.log('Vote cast for:', puppy);
    // TODO
    var itemTemplate = $('#templates .rank').html();
    var newitemHtml = $.render(itemTemplate, { name: puppy.name, votes: puppy.votes, id: puppy.id });
    if (puppy.counter === 0) {
    $('div').find("[data-id='"+puppy.id+"']").append(newitemHtml);
      puppy.counter += 1;
    } else {
    $('div').find("[data-image='"+puppy.id+"']").html(newitemHtml);
    }
  });

})();
