$(document).ready(function () {
    $("a").click(function (event) {
        event.preventDefault();

        var gato = this.hash;

        $("html").animate(
            {
      scrollTop: $(gato).offset().top -86,
        },
        800
        );
        });
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
