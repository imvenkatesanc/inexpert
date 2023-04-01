$(".menu-bar").on("click",function(){
    $(".sidebar").addClass("active");
});
$(".close-detail").on("click",function(){
    $(".sidebar").removeClass("active");
});

const container = document.querySelector("#wrapper");

fetch('jobData.json')
  .then(response => response.json())
  .then(data => {
    const jobCardsHTML = data.map((job) => {
      return `
        <div class="wrapper" id="wrapper">
          <div class="card" id="card">
            <div class="card-left bg">
              <img id="companylogo" src="ASEN.svg" alt="img">
            </div>
            <div class="card-center">
              <h3 class="company" id="company">${job.company}</h3>
              <p class="card-detail" id="description">${job.description}</p>
              <p class="card-loc"><ion-icon name="location-outline"></ion-icon><span id="location">${job.location}</span></p>
              <div class="card-sub">
                <p><ion-icon name="today-outline"></ion-icon><span id="time">${job.time}</span></p>
                <p><ion-icon name="hourglass-outline"></ion-icon><span id="jobtype">${job.jobtype}</span></p>
                <p><ion-icon name="shield-checkmark-outline"></ion-icon><b id="experience">${job.experience}</b></p>
              </div>
            </div>
            <div class="card-right">
              <div class="card-tag">
                <h5>Designation</h5>
                <a id="jobname">${job.jobTitle}</a>
              </div>
              <div class="card-salary">
                <p><b id="salary">${job.salary}</b></p>
              </div>
            </div>
            <a href="${job.link}" id="apply">
                <button class="applyc">Apply</button>
            </a>
          </div>
        </div>
        `;
    });

    // Add the generated HTML to the container element
    container.innerHTML = jobCardsHTML.join("");

    document.querySelectorAll('.card').forEach(jobCard => {
      jobCard.addEventListener('click', function() {
        // rest of the code
        const detail = document.querySelector("#detail");
        detail.classList.add("active");
        const jobTitle = jobCard.querySelector("#jobname").textContent;
        const company = jobCard.querySelector("#company").textContent;
        const description = jobCard.querySelector("#description").textContent;
        const link = jobCard.querySelector("#apply").getAttribute('href');
        const location = jobCard.querySelector("#location").textContent;
        const time = jobCard.querySelector("#time").textContent;
        const jobtype = jobCard.querySelector("#jobtype").textContent;
        const salary = jobCard.querySelector("#salary").textContent;
        const experience = jobCard.querySelector("#experience").textContent;
  
        const detailCompany = document.querySelector("#detail-company");
        detailCompany.textContent = company;

        const detailExp = document.querySelector("#detail-exp");
        detailExp.textContent = experience;
    
        const detailDescription = document.querySelector("#detail-description");
        detailDescription.textContent = description;
  
        const detailJobTitle = document.querySelector("#detail-jobtitle");
        detailJobTitle.textContent = jobTitle;
  
        const detailJobTitleLink = document.querySelector("#detail-link");
        detailJobTitleLink.setAttribute("href", link);
        detailJobTitleLink.textContent = link;
        
        const detailLocation = document.querySelector("#detail-loc");
        detailLocation.textContent = location;

        const detailTime = document.querySelector("#detail-time");
        detailTime.textContent = time;

        const detailJobType = document.querySelector("#detail-jobtype");
        detailJobType.textContent = jobtype;

        const detailSalary = document.querySelector("#detail-sal");
        detailSalary.textContent = salary;
      });
    });

    document.querySelector('.close-detail').addEventListener('click', function() {
      const detail = document.getElementById("detail");
      $(".apply").on("click", function() {
        $(".close-detail").addClass("active");
      });
      $(".card").on("click", function() {
        $(".detail").addClass("active");
      });
      // Update the detail content with the data from the clicked card
      const jobTitle = jobCard.querySelector("#jobname").textContent;
      const company = jobCard.querySelector("#company").textContent;
      const description = jobCard.querySelector("#description").textContent;
      const link = jobCard.querySelector("#apply").getAttribute('href');
      const location = jobCard.querySelector("#location").textContent;
      const time = jobCard.querySelector("#time").textContent;
      const jobtype = jobCard.querySelector("#jobtype").textContent;
      const salary = jobCard.querySelector("#salary").textContent;
      
      const detailCompany = document.getElementById("detail-company");
      detailCompany.textContent = company;
      
      const detailDescription = document.getElementById("detail-description");
      detailDescription.textContent = description;
      
      const detailJobTitle = document.getElementById("detail-jobtitle");
      detailJobTitle.textContent = jobTitle;
      
      const detailJobTitleLink = document.getElementById("detail-link");
      detailJobTitleLink.setAttribute("href", link);
      detailJobTitleLink.textContent = link;
      
      const detailLocation = document.getElementById("detail-location");
      detailLocation.textContent = location;
      
      const detailTime = document.getElementById("detail-time");
      detailTime.textContent = time;
      
      const detailJobType = document.getElementById("detail-jobtype");
      detailJobType.textContent = jobtype;
      
      const detailSalary = document.getElementById("detail-salary");
      detailSalary.textContent = salary;
    });

  $(".close-detail").on("click",function(){$(".detail").removeClass("active");})

})
.catch(error => console.error(error));
