document.addEventListener("DOMContentLoaded", function () {
  const footerHtml = `
      <footer class="footer">
      
      <div class="footer2">
      <div class="footer-grid">

      <div class="footer-section">
      <a
              href=""
              target="_blank"
              aria-label="familycosttracker"
            >
              <img class="image" id="familycosttracker" alt="linkedin" />
            </a>

            <h3>FamilyCostTracker</h3>
    </div>


        <div class="footer-section">
          <h3>Company Profile</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Leadership Team</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Beyond Business</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div class="footer-section">
        <h3>App</h3>
        <ul>
        
      
        <li><a href="#">Status</a></li>
        <li><a href="#">Whts's New</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">Cancellation</a></li>
        <li><a href="#">Help Center</a></li>
        
   
        </ul>
      </div>



      <div class="footer-section">
        <h3>Legal</h3>
        <ul>
        
      
        <li><a href="#">Terms</a></li>
        <li><a href="#">Secuiry</a></li>
        <li><a href="#">Privacy Policy</a></li>
       
   
        </ul>
      </div>
        
      
        <div class="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Downloads</a></li>
            <li><a href="#">Solutions at a Glance</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div class="footer-bottom">
      <div class="footer-bottom2">
        <p>
          <span>
            Copyright © 2023, TrigemIT Systems |
            <a href="#">Privacy Policy</a> |
            <a href="#">Cookie Policy</a>
          </span>
          <span
            >Follow Us:
            <a
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <img id="facebook-image" alt="Facebook" />
            </a>
      
            <a
              href="https://www.youtube.com/"
              target="_blank"
              aria-label="YouTube"
            >
              <img id="youtube-image" alt="YouTube" />
            </a>
      
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="linkedin"
            >
              <img id="linkedIn-image" alt="linkedin" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="twitter"
            >
              <img id="twitter-image" alt="twitter" />
            </a>
          </span>
          <span>Email: marketing@trigemsoft.com</span>
        </p>
      </div>
      
      </div>
      </footer>
      `;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footerHtml;
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Facebook").src = "../Images/facebook.PNG";
  });
  const imageSources = {
    familycosttracker: "../Image/adaptive-icon2.png",
    facebook: "../Image/facebook.PNG",
    youtube: "../Image/youtube.PNG",
    linkedIn: "../Image/linkedIn.PNG",
    twitter: "../Image/tweeter.PNG",
  };
  familycosttracker;
  document.getElementById("familycosttracker").src =
    imageSources.familycosttracker;

  document.getElementById("facebook-image").src = imageSources.facebook;

  document.getElementById("youtube-image").src = imageSources.youtube;

  document.getElementById("linkedIn-image").src = imageSources.linkedIn;

  document.getElementById("twitter-image").src = imageSources.twitter;
});
