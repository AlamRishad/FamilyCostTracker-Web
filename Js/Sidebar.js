document.addEventListener("DOMContentLoaded", function () {
  const navbarHtml = `
    <div
    class="d-flex flex-column flex-shrink-0 p-3  sidebar"
    style="width: 280px; height: 100vh"
    >
    <a
      href="/"
      class="d-flex align-items-center mb-3 me-md-auto link-dark text-decoration-none"
    >
    <img
    src="./Image/adaptive-icon2.png"
    alt=""
    width="32"
    height="32"
    class="rounded-circle me-2"
    />
      <span class="fs-4 d-flex justify-content-center align-items-center text-center" style="color: white;">FamilyCostTracker</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page" id="dashboardLink" style="color: white;">
              <i class="bi bi-speedometer2"></i>
              Dashboard
            </a>
          </li>
        <li>
          <a href="AddMember.html" class="nav-link link-dark" id="dashboardLink2"style="color: white;">
            <i class="bi bi-person-plus"></i>
            Add Member
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark" id="dashboardLink3"style="color: white;">
            <i class="bi bi-arrow-left-right"></i>
            Transaction
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark" id="dashboardLink4"style="color: white;">
            <i class="bi bi-piggy-bank"></i>
            Budget
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark" id="dashboardLink5"style="color: white;">
            <i class="bi bi-bar-chart"></i>
            Report
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-dark" id="dashboardLink6"style="color: white;">
            <i class="bi bi-wallet2"></i>
            Expense
          </a>
        </li>
      </ul>
    <hr />
    <div class="dropdown">
    <a
    href="#"
    class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
    id="dropdownUser2"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style="color: white;"
    >
    <img
    src="https://github.com/mdo.png"
    alt=""
    width="32"
    height="32"
    class="rounded-circle me-2"
    />
    <strong>Mahfuzul Alam Rishad</strong>
    </a>
    <ul
    class="dropdown-menu text-small shadow"
    aria-labelledby="dropdownUser2"
    >
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" href="#">Sign out</a></li>
    </ul>
    </div>
    
    </div>`;

  const navbarContainer = document.getElementById("sidebar");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHtml;
  }

  const navLinks = document.querySelectorAll(".nav-link");
  console.log(navLinks);
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      navLinks.forEach(function (otherLink) {
        otherLink.classList.remove("active-button");
      });

      this.classList.add("active-button");
    });
  });
});
