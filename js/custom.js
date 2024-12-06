(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    $(".color-mode-icon").toggleClass("active");
    $("body").toggleClass("dark-mode");

    // Change the text based on the current mode
    const modeText = $("#mode-text");
    if ($("body").hasClass("dark-mode")) {
      modeText.text("Light Mode"); // Change text to Light Mode when dark mode is active
    } else {
      modeText.text("Dark Mode");
    }
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    smartSpeed: 800,
    slideSpeed: 800,
  });

  $(".owl-carousel .item img").on("click", function () {
    var description = $(this).data("description");
    var technology = $(this).data("technology");
    var link = $(this).data("link");

    var technologyTags = technology
      .split(",")
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join(" ");

    Swal.fire({
      html: `
        <p style="color:black;font-size:14px;user-select: none;"><strong>Description:</strong> ${description}</p>
        <p style="color:black;font-size:14px;user-select: none;"><strong>Technology:</strong> ${technologyTags}</p>
        <p style="color:black;font-size:14px;user-select: none;"><strong>Link:</strong> <a href="${link}" target="_blank">${link}</a></p>
      `,
      imageUrl: $(this).attr("src"),
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: "Project Image",
      showCloseButton: true,
      focusConfirm: false,
      customClass: {
        confirmButton: "swal-btn-confirm",
        cancelButton: "swal-btn-cancel",
      },
      willOpen: () => {
        document.querySelector(".swal-btn-confirm").style.backgroundColor =
          "#4f95cf";
      },
    });
  });

  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();
})(jQuery);
