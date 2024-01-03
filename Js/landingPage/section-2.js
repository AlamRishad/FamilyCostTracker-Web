document.addEventListener("DOMContentLoaded", function () {
  const navbarHtml = `
    <div class="section-2-container py-5">
    <div class="header-container text-center">
      <h1 class="header-title mb-2">Four rules for less money stress</h1>
      <p class="header-subtitle mb-4">Gain clarity and confidence with four simple-but-life-changing rules. The magic isn’t in the math—it’s in the method.</p>
      
      <div class="decorative-graphics">
      </div>
    </div>
    <div class="section-2-container py-5">
      <div class="row g-4">
      
        <!-- Card 1 -->
        <div class="col-md-3">
          <div class="card custom-card p-3">
            <div class="d-flex justify-content-center">
              <div class="custom-badge badge-red">1</div>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Give Every Taka a Job</h5>
              <p class="card-text">What do you want your money to do before you get paid again? Give each dollar a job to see your plan clearly. It’s amazing.</p>
            </div>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="col-md-3">
          <div class="card custom-card p-3">
            <div class="d-flex justify-content-center">
              <div class="custom-badge badge-yellow">2</div>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Embrace Your True Expenses</h5>
              <p class="card-text">Non-monthly expenses like car repairs and holiday shopping are a fact of life. Break these down into smaller monthly chunks.</p>
            </div>
          </div>
        </div>
        
        <!-- Card 3 -->
        <div class="col-md-3">
          <div class="card custom-card p-3">
            <div class="d-flex justify-content-center">
              <div class="custom-badge badge-green">3</div>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Roll with the Punches</h5>
              <p class="card-text">There’s no such thing as a normal month. Be flexible. When life changes, change your spending plan with it. No guilt necessary—it’s your money!</p>
            </div>
          </div>
        </div>
        
        <!-- Card 4 -->
        <div class="col-md-3">
          <div class="card custom-card p-3">
            <div class="d-flex justify-content-center">
              <div class="custom-badge badge-blue">4</div>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">Age Your Money</h5>
              <p class="card-text">Wouldn’t it be great if you could use last month’s pay for this month’s bills? You’d always be ahead. Trust us, it’ll feel real nice.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
        `;

  const navbarContainer = document.getElementById("section-2");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHtml;
  }
});
