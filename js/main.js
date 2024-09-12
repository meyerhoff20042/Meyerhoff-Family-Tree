// Function used to allow collapsing and expanding of sections
document.addEventListener('DOMContentLoaded', function () {
  var headings = document.getElementsByClassName("collapsible-heading");

  for (var i = 0; i < headings.length; i++) {
    headings[i].addEventListener("click", function () {
      var content = this.nextElementSibling; // Selects the next sibling element (the <div class="content">)
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});

// Used by nav-buttons to let the user navigate the website
function navigateTo(url) {
    window.location.href = url;
}