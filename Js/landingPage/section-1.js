document.addEventListener("DOMContentLoaded", function () {
  const navbarHtml = `
  <div class="banner d-flex align-items-center justify-content-center">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1 class="banner-heading">Change Your Relationship With Money</h1>
        <p class="banner-text">Enjoy guilt-free spending and effortless saving with a friendly, flexible method for managing your finances.</p>
        <button class="start-trial-btn">Register</button>
      </div>
      <div class="col-md-6 d-none d-md-block">
        <img src="./Image/section-1.png" alt="Money Illustration" class="money-img">
      </div>
    </div>
  </div>
</div>
      `;

  const navbarContainer = document.getElementById("section-1");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHtml;
  }
});
