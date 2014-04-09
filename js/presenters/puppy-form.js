$(function () {

  var $root = $('form.new-puppy');

// View Interaction

  $root.on('submit', function (e) {
    // TODO
    e.preventDefault();
    var name = $('form.new-puppy .name').val();
    var image = $('form.new-puppy .image').val();

    var new_pup = {
    name: name,
    image_url: image,
    votes: 0,
    counter: 0
    };
    puppies.create(new_pup);
  });

});
