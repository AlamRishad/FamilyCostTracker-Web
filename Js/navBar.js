document.addEventListener("DOMContentLoaded", function () {
  const navbarHtml = `
      <nav class="navbar navbar-expand-sm navbar-custom ">
      <div class="container-fluid">
        <img src="./Image/adaptive-icon2.png" alt="FamilyCostTracker Logo" class="navbar-image m-1">
    
        <a class="navbar-brand" href="#">FamilyCostTracker</a>
          
        <button class="navbar-toggler toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item m-1">
              <a class="nav-link active" aria-current="page" href="#">What is FamilyCostTracker</a>
            </li>
            <li class="nav-item m-1">
              <a class="nav-link" href="#1">Learn</a>
            </li>
            
            <li class="nav-item m-1">
              <a class="nav-link" href="#2">Pricing</a>
            </li>
          </ul>
          <div class="ms-auto">
    <a href="/login.html"> <!-- Update /login-page-url with the actual path -->
      <button class="btn btn-custom" type="button">Log In</button>
    </a>
  </div>
      </div>
    </nav>
      `;

  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHtml;
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      document
        .querySelectorAll(".nav-link")
        .forEach((node) => node.classList.remove("active"));
      this.classList.add("active");
    });
  });
  const loginButton = document.querySelector(".btn-custom");

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      window.location.href = "/login.html";
    });
  }
});
