<template>
  <section class="about">
    <!-- 0 header (SEO Improved, without affecting design) -->
    <header class="top" style="background-color: black;">
      <div class="container" id="home">
        <nav class="navbar" role="navigation" aria-label="Main Navigation">
          <div class="icon2sy">
            <a href="#home" class="brand-link" aria-label="Falcon Core Home">
              <div class="logo">
                <img src="../assets/img/brand_logo.png" class="icon-special" alt="Falcon Core Logo" />
              </div>
              Falcon<span style="color:red;">&nbsp;Core</span>
            </a>
          </div>
          <ul class="nav-list" id="navi-list">
            <li class="list-item">
              <a href="#home" class="ref">Home</a>
            </li>
            <li class="list-item">
              <a href="#Projects" class="ref">Projects</a>
            </li>
            <li class="list-item">
              <a href="#pricing" class="ref">Pricing</a>
            </li>
            <li class="list-item">
              <a href="#skills" class="ref">Skills</a>
            </li>
            <li class="list-item hidden-phone">
              <a href="#experience" class="ref">Experience</a>
            </li>
            <li class="list-item hidden-phone">
              <a href="#testimonials" class="ref">Testimonials</a>
            </li>
            <li class="list-item hidden-phone">
              <a href="#Services" class="ref">Services</a>
            </li>
            <li class="list-item hidden-phone">
              <a href="#About" class="ref">About me</a>
            </li>
            <li class="list-item" id="more-item">
              <a class="ref hidden2" id="more-link" @click="toggleno" aria-haspopup="true"
                aria-expanded="false">More</a>
              <!-- Nested List for Additional Links -->
              <ul class="sub-nav-list" v-if="isMoreVisible">
                <li><a href="#experience" class="ref">Experience</a></li>
                <li><a href="#testimonials" class="ref">Testimonials</a></li>
                <li><a href="#Services" class="ref">Services</a></li>
                <li><a href="#About" class="ref">About me</a></li>
              </ul>
            </li>
          </ul>
          <div class="menu" id="toggle-button" @click="toggleMenu" aria-label="Toggle navigation menu">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
          </div>
        </nav>
      </div>
    </header>
    <!-- 1 header -->
    <!-- 0 top2-->
    <!-- <section class="land-top" id="home">
      <div
        class="container"
        style="display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;"
      >
        <h1 class="top-head" style="margin-top: 80px;">Web & Front-end Designer</h1>
        <p class="bio">
          Hardworking professional skilled in Vue.js. Passionate about secure,
          optimized code. Eager to tackle new challenges and leverage cutting-edge technologies for impactful projects.
        </p>
        <div class="min-projects">
          <div class="projects-title">
            <h2>top of The Last Projects</h2>
            <p>the most desired Projects</p>
          </div>
          <a href="/fash/index.html" class="project" target="_blank">
            <img src="../assets/img/imgs/gallery-01.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Fashoin</h2>
            </div>
            <p>good design for fashoin ideas</p>
          </a>
          <a href="aqart/index.html" class="project" target="_blank">
            <img src="../assets/img/imgs/gallery-02.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Aqar Bot</h2>
            </div>
            <p>Landing page describe Bot</p>
          </a>
          <a href="/Scale/asset.html" class="project" target="_blank">
            <img src="../assets/img/pro1.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Scal</h2>
            </div>
            <p>Exam for students</p>
          </a>
          <a href="#Projects" class="more">
            <div class="sub-more">
              <p class="p-link">More Projects</p>
            </div>
            <img src="../assets/img/arrow-left.png" class="icon2 arrow" />
          </a>
        </div>
      </div>
    </section>-->
    <!-- 1 top2 -->
    <!--  <div class=""></div> -->
    <!-- 1 jops  -->
    <section class="make" aria-labelledby="intro-heading">
      <div class="container">
        <div class="left">
          <h1 id="intro-heading">Front-End Developer</h1>
          <p>
            Hardworking professional skilled in <strong>Vue.js</strong>. Passionate about secure,
            optimized code. Eager to tackle new challenges and leverage cutting-edge technologies for impactful
            projects.
          </p>
          <span>With 2+ years of experience</span>
          <div class="hot-buttons">
            <a class="cotact-me" href="https://drive.google.com/uc?export=download&id=1fE20ABdQccxiMaG14sy6mvklFJ7I87hK"
              title="Download CV in PDF format">
              Download CV
            </a>
            <a class="cotact-me" href="#Projects" title="See my project portfolio">
              View My Work
            </a>
          </div>
        </div>
        <div class="right">
          <div class="photo-container">
            <img src="../assets/img/3.jpg" alt="Ahmed Eweis profile photo" class="profile-photo" />
            <div class="orbit" aria-label="Social media links">
              <a href="https://www.instagram.com/ahmed_eweis0/" class="social-icon" target="_blank" rel="noopener"
                aria-label="Instagram">
                <img src="../assets/img/icon1.png" alt="Instagram icon" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedeweiso@gmail.com" class="social-icon"
                target="_blank" rel="noopener" aria-label="Send email">
                <img src="../assets/img/icon2.png" alt="Email icon" />
              </a>
              <a href="https://github.com/Ahmedeweis" class="social-icon" target="_blank" rel="noopener"
                aria-label="GitHub Profile">
                <img src="../assets/img/icon3.png" alt="GitHub icon" />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-eweis/" class="social-icon" target="_blank" rel="noopener"
                aria-label="LinkedIn Profile">
                <img src="../assets/img/icon4.png" alt="LinkedIn icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 0 jops -->
    <section class="jops" id="Services" aria-labelledby="services-heading">
      <div class="container">
        <div class="services-tilte">
          <span>What I Can Do</span>
          <h2 id="services-heading">
            I work<br />
            Performed For<br />
            Client happy
          </h2>
          <button>
            <a class="a-btn" href="#pricing" title="View Pricing Plans">See Pricing Plan</a>
          </button>
        </div>
        <div class="services">
          <article class="service">
            <img src="../assets/img/blog.png" class="icon2" alt="Web design service icon" />
            <div class="serv-info">
              <h3>Web Design</h3>
              <p>I can design UI based on system requirements.</p>
              <a href="#" title="Read more about Web Design services">Read more</a>
            </div>
          </article>
          <article class="service">
            <img src="../assets/img/cloud-computing.png" class="icon2" alt="Development service icon" />
            <div class="serv-info">
              <h3>Development</h3>
              <p>I can modify or enhance your current project.</p>
              <a href="#" title="Read more about Development services">Read more</a>
            </div>
          </article>
          <article class="service">
            <img src="../assets/img/code.png" class="icon2" alt="UI Coding service icon" />
            <div class="serv-info">
              <h3>UI Coding</h3>
              <p>If you have a PSD or design file, I can code it into a responsive layout.</p>
              <a href="#" title="Read more about UI Coding services">Read more</a>
            </div>
          </article>
          <article class="service">
            <img src="../assets/img/multi-channel.png" class="icon2" alt="API connection service icon" />
            <div class="serv-info">
              <h3>API Integration</h3>
              <p>Having trouble connecting frontend and backend? I can help.</p>
              <a href="#" title="Read more about API integration services">Read more</a>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- 1 jops  -->
    <!-- 0 Gallery -->
    <div class="container" id="Projects">
      <div class="head-projects">
        <h2 class="main-title">Projects</h2>
        <button @click="showo">View All</button>
      </div>
    </div>
    <div class="gallery" id="gallery">
      <div class="container">
        <a v-for="(project, index) in mainProjects" :key="index" :href="project.link" class="box" target="_blank">
          <div class="infoo">
            <!-- <div class="bozo">  {{index +1}}</div> -->
            <h2>{{ project.title }}</h2>
            <h2>{{ project.stars }} <img src="../assets/img/star.png" class="icon2" /></h2>
          </div>
          <div class="image">
            <img :src="project.img" alt />
          </div>
        </a>
        <span class="box curser" @click="showoo">
          <div class="infoo">
            <h2></h2>
            <h2></h2>
          </div>
          <div class="image flexe">
            <h1>+19 More</h1>
            <button>View</button>
          </div>
        </span>
      </div>
    </div>
    <div class="gallery" v-if="shows === '1'">
      <div class="container">
        <a v-for="(project, index) in extraProjects" :key="'extra-' + index" :href="project.link" class="box"
          target="_blank">
          <div class="infoo">
            <!-- <div class="bozo">  {{index +6}}</div> -->
            <h2>{{ project.title }}</h2>
            <h2>{{ project.stars }} <img src="../assets/img/star.png" class="icon2" /></h2>
          </div>
          <div class="image">
            <img :src="project.img" alt />
          </div>
        </a>
      </div>
    </div>
    <!-- 1 Gallery -->
    <!-- 0 Pricing -->
    <section class="pricing"  v-if="0">
      <div class="container">
        <h1 class="upper" style="text-align: center;">Pricing Plan</h1>
        <h2>Pricing options that meet your</h2>
        <h2>budget and needs</h2>
        <div class="plans">
          <!-- Hourly Plan -->
          <div class="plan">
            <div>
              <p>Hourly Plan</p>
              <h2>
                100 EGP
                <span class="price-per">per Hour</span>
              </h2>
              <p>Ideal for companies or customers needing small-scale or trial tasks.</p>
            </div>
            <div class="flex-start">
              <div class="plan-det">
                <p>Report provided upon completion of hours</p>
              </div>
              <div class="plan-det">
                <p>Tasks start with a minimum of 1 hour</p>
              </div>
              <div class="plan-det">
                <p>3 to 5 free revisions</p>
              </div>
              <div class="plan-det">
                <p>Quick response to work-related inquiries</p>
              </div>
              <div class="plan-det">
                <p>One-hour free trial</p>
              </div>
              <div class="plan-det">
                <p>50% payment required before starting work</p>
              </div>
            </div>
            <button class="about-btn plan-btn" @click="scrollToSkills">Start Project</button>
          </div>
          <!-- Project-Based Plan -->
          <div class="plan populer">
            <div>
              <p>Project-Based Plan</p>
              <h2>
                5k ~ 10k EGP
                <span class="price-per">per Project</span>
              </h2>
              <p>For companies or customers with specific project requirements</p>
            </div>
            <div class="flex-start">
              <div class="plan-det">
                <p>Pricing is based on the project's scope</p>
              </div>
              <div class="plan-det">
                <p>30% free revisions</p>
              </div>
              <div class="plan-det">
                <p>Two weeks of support after project completion</p>
              </div>
              <div class="plan-det">
                <p>Project status reports every 3 to 4 days</p>
              </div>
              <div class="plan-det">
                <p>Project phases: Design, Development, and Deployment</p>
              </div>
              <div class="plan-det">
                <p>35% payment required before starting work</p>
              </div>
            </div>
            <button class="about-btn plan-btn" @click="scrollToSkills">Start Project</button>
          </div>
          <!-- Full-Time Plan -->
          <div class="plan">
            <div>
              <p>Full-Time Plan</p>
              <h2>
                13,000 EGP
                <span class="price-per">per Month</span>
              </h2>
              <p>For companies or clients who need a full-time developer on a monthly basis.</p>
            </div>
            <div class="flex-start">
              <div class="plan-det">
                <p>160 hours (8 hours/day, 5 days/week)</p>
              </div>
              <div class="plan-det">
                <p>Weekly meetings to track progress</p>
              </div>
              <div class="plan-det">
                <p>Unlimited free edits</p>
              </div>
              <div class="plan-det">
                <p>10% - 20% discount for long-term contracts</p>
              </div>
              <div class="plan-det">
                <p>Ability to work on multiple projects</p>
              </div>
              <div class="plan-det">
                <p>50% payment required before starting work</p>
              </div>
            </div>
            <button class="about-btn plan-btn" @click="scrollToSkills">Start Project</button>
          </div>
        </div>
      </div>
    </section>
    <!-- 1 Pricing -->
    <!-- 0 Pricing2 -->
    <section class="pricing-2" id="pricing">
      <div class="container">
        <div class="pricing-section">
          <h2 class="section-title">A Plan To Suit Your Needs</h2>
          <div class="pricing-cards">
            <!-- Basic Plan -->
            <div class="pricing-card">
              <h3 class="plan-title">Hourly Plan</h3>
              <p>small Task</p>
              <ul class="plan-features">
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> One hour free trial</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> Tasks start with a minimum of 1 hour</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> 50% payment required before starting work</li>
              </ul>
              <p class="plan-price">EGP 100 /hour</p>
            </div>
            <!-- Standard Plan -->
            <div class="pricing-card standard">
              <h3 class="plan-title">Project-Based Plan</h3>
              <p>specific project</p>
              <ul class="plan-features">
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> Two weeks of support after project completion</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> Pricing is based on the project's scope </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg>35% payment required</li>
              </ul>
              <p class="plan-price">EGP 5k ~ 10k /project</p>
            </div>
            <!-- Premium Plan -->
            <div class="pricing-card premium">
              <h3 class="plan-title">Full-Time Plan</h3>
              <p>open developer</p>
              <ul class="plan-features">
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> 160 hours (8 hours/day, 5 days/week)</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> Weekly meetings to track progress</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24"
                    height="24" data-icon="CheckmarkStandard" aria-hidden="true" class="default-ltr-cache-gcvz4a">
                    <path fill="currentColor"
                      d="M21.2928 4.29285L22.7071 5.70706L8.70706 19.7071C8.51952 19.8946 8.26517 20 7.99995 20C7.73474 20 7.48038 19.8946 7.29285 19.7071L0.292847 12.7071L1.70706 11.2928L7.99995 17.5857L21.2928 4.29285Z"
                      clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg> Ability to work on multiple projects per month</li>
              </ul>
              <p class="plan-price">EGP 13,000 /mo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 1 Pricing2 -->
    <!-- 0 Lang -->
    <section class="langauge" id="skills">
      <div class="cotact">
        <form class="die-form" action="https://formsubmit.co/ahmedeweiso@gmail.com" method="POST">
          <!-- Hidden Inputs for FormSubmit -->
          <input type="hidden" name="_subject" value="New Message from Your Portfolio">
          <input type="hidden" name="_next" value="https://your-portfolio-url.com/thank-you.html">
          <input type="hidden" name="_captcha" value="false">
          <!-- Form Content -->
          <div class="icon">
            <img src="../assets/img/brand_logo.png" class="icon-special" />
          </div>
          <h2>Get Started today</h2>
          <div class="look-box">
            <div class="look-content">
              <span>Name</span>
              <input type="text" class="look-field" name="name" required />
            </div>
            <div class="look-content">
              <span>E-Mail</span>
              <input type="email" class="look-field" name="email" required />
            </div>
            <div class="look-content">
              <span>Budget</span>
              <input type="text" class="look-field" name="budget" required />
            </div>
            <div class="look-content">
              <span>Subject</span>
              <input type="text" class="look-field" name="subject" required />
              <div>form new upload</div>
            </div>
            <textarea class="styled-textarea" name="message" placeholder="Enter your text here..." required></textarea>
          </div>
          <button type="submit" class="sen-btn">Send</button>
        </form>
      </div>
      <div class="langauges">
        <div class="services-tilte">
          <span>Skills</span>
          <h2>My Technical Skills.</h2>
        </div>
        <div class="cols">
          <div class="col">
            <div class="min-col">
              <img class="icon2-m" />
              <h2>Front-End</h2>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/Html.png" />
              <h3>Html</h3>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/css.png" />
              <h3>Css</h3>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/js.png" />
              <h3>JS</h3>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/vue.png" />
              <h3>Vue Js</h3>
            </div>
          </div>
          <div class="col">
            <div class="min-col">
              <img class="icon2-m" />
              <h2>Back-End</h2>
            </div>
            <!-- <div class="min-col">
              <img class="icon2-m" />
              <h3>Php</h3>
            </div> -->
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/nodejs.png" />
              <h3>Node Js</h3>
            </div>
            <!-- <div class="min-col">
              <img class="icon2-m" />
              <h3>Laravel</h3>
            </div> -->
          </div>
          <div class="col">
            <div class="min-col">
              <img class="icon2-m" />
              <h2>Data Base</h2>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/postgress.png" />
              <h3>Postgres</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 1 Lang  -->
         <!-- 0 about me  -->
    <section class="about-me" id="About" aria-labelledby="about-heading">
      <div class="container">
        <div class="about-me-info">
          <div class="services-tilte">
            <span>Who I Am</span>
            <h2 id="about-heading">Crafting Stories Through Design</h2>
            <p>
              Since 2020, I have served as a Front-End Developer,<br />
              where I have developed many systems.<br />
              I also provide high-quality designs at the lowest possible cost,<br />
              which gives me a great opportunity to create your website.
            </p>
            <div class="meddile-about">
              <img src="../assets/img/trophy.png" class="icon2-L icon2-left hiden-s"
                alt="Trophy icon representing achievements" />
              <div>
                <h3 class="mession-h">My Mission</h3>
                <p>
                  I aim to become the best front-end developer in Egypt and the Arab world,<br />
                  creating full websites that delight users' eyes.
                </p>
              </div>
              <img src="../assets/img/brand_logo.png" class="icon2-L icon2-right" alt="Brand logo icon" />
            </div>
            <button class="about-btn" @click="scrollToSkills" title="Learn more about me">About more</button>
          </div>
        </div>
        <div class="photo-box">
          <div class="photoo">
            <img src="../assets/img/your-photoo.jpg" alt="Photo of the developer" />
          </div>
        </div>
      </div>
    </section>
    <!-- 1  about me  -->
    <!-- 0 facts  -->
    <section class="facts" id="facts" aria-labelledby="facts-heading">
      <div class="container">
        <div class="fact">
          <img src="../assets/img/list.png" class="icon2-m" alt="List icon representing completed projects" />
          <h2 class="number">24</h2>
          <h3>Projects Completed</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/reputation.png" class="icon2-m"
            alt="Reputation icon representing satisfied clients" />
          <h2 class="number">10</h2>
          <h3>Satisfied Clients</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/responsive.png" class="icon2-m"
            alt="Responsive icon representing years of experience" />
          <h2 class="number">2</h2>
          <h3>Years of Experience</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/trustworthiness.png" class="icon2-m"
            alt="Trust icon representing certificates earned" />
          <h2 class="number">11</h2>
          <h3>Certificates Earned</h3>
        </div>
      </div>
    </section>
    <!-- 1 facts  -->
    <!-- 0 timeline -->
    <h2 class="timeline-head">Education & Experience</h2>
    <section class="timeline" id="experience">
      <div class="timeline-item">
        <div class="timeline-icon"><img src="../assets/img/degree-cap.png" class="icon2" /></div>
        <div class="timeline-content">
          <h3>Bachelor in Computer Science</h3>
          <span>Helwan University</span>
          <span class="timeline-date">Sep 2019 - Jul 2023</span>
          <p>Studied core programming, data structures, and modern web development techniques.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon"><img src="../assets/img/degree-cap.png" class="icon2" /></div>
        <div class="timeline-content">
          <h3>Web Development Professional Track</h3>
          <span>Udacity</span>
          <span class="timeline-date">Jan 2022 - Apr 2022</span>
          <p>Studied modern web development techniques and frontend practices.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon"><img src="../assets/img/degree-cap.png" class="icon2" /></div>
        <div class="timeline-content">
          <h3>Minders Workshops</h3>
          <span>Minders</span>
          <span class="timeline-date">Aug 2021 - Oct 2021</span>
          <p>Completed workshops focused on responsive web design.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon"><img src="../assets/img/bag.png" class="icon2" /></div>
        <div class="timeline-content">
          <h3>Data Collector</h3>
          <span>StatsBomb Company</span>
          <span class="timeline-date">Mar 2022 - Sep 2022</span>
          <p>Gathered data from freeze-frame images using a desktop application.</p>
        </div>
      </div>
    </section>
    <!-- 1 timeline -->
    <!-- 0 certifcate  -->
    <section class="certifcate">
      <div class="container" >
        <div class="services-tilte">
          <span class="tit">Certifications</span>
          <h2 style="color: black;">Certified Skills <br>for a Digital World.</h2>
        </div>
        <div class="slider" ref="slider">
          <div class="slider-inner" :style="{ transform: `translateX(${offset}px)`, width: innerWidth + 'px' }">
            <img v-for="(image, index) in images" :key="index" :src="image" class="slide" @click="openModal(image)" />
          </div>
        </div>
        <!-- Full-Screen Image Modal -->
        <div v-if="isModalOpen" class="modal" @click.self="closeModal">
          <span class="close" @click="closeModal">&times;</span>
          <img class="modal-content" :src="currentImage" />
        </div>
      </div>
    </section>
    <!-- 1 certifcate -->
    <!-- 0 Quats -->
    <section class="talking" id="testimonials">
      <div class="container over">
        <h2>What People Talk</h2>
        <span class="spano">About Me</span>
        <section class="testimonials">
          <!-- Left Avatars -->
          <div class="avatars">
            <a href="#" class="left-top" @click.prevent="showTestimonial(0)">
              <img :src="testimonials[0].avatar" class="floating" />
            </a>
            <a href="#" class="left-center" @click.prevent="showTestimonial(1)">
              <img :src="testimonials[1].avatar" class="floating" />
            </a>
            <a href="#" class="left-bottom" @click.prevent="showTestimonial(2)">
              <img :src="testimonials[2].avatar" class="floating" />
            </a>
          </div>
          <!-- Testimonial Container -->
          <div class="testimonial-container">
            <div class="testimonial">
              <img :src="currentTestimonial.avatar" alt="Profile" class="main-profile" />
              <p class="quote">
                <span class="fonty spano">&ldquo;</span>
                {{ currentTestimonial.details }}
                <span class="fonty spano" style="margin-top: -26px">&bdquo;</span>
              </p>
              <h3>{{ currentTestimonial.name }}</h3>
              <p class="position">
                {{ currentTestimonial.position }} - {{ currentTestimonial.company }}
              </p>
            </div>
            <!-- Arrows -->
            <div class="arrows">
              <span class="arrow left spano" @click="previousTestimonial">&#8592;</span>
              <span class="arrow right spano" @click="nextTestimonial">&#8594;</span>
            </div>
          </div>
          <!-- Right Avatars -->
          <div class="avatars">
            <a href="#" class="right-top" @click.prevent="showTestimonial(3)">
              <img :src="testimonials[3].avatar" class="floating" />
            </a>
            <a href="#" class="right-center" @click.prevent="showTestimonial(4)">
              <img :src="testimonials[4].avatar" class="floating" />
            </a>
            <a href="#" class="right-bottom" @click.prevent="showTestimonial(5)">
              <img :src="testimonials[5].avatar" class="floating" />
            </a>
          </div>
        </section>
      </div>
    </section>
    <!-- 1 Quats -->
    <!-- 0 footer -->
    <footer class="foot">
      <div class="container">
        <div class="up-footer">
          <div class="one-col">
            <div class="icon2sy">
              <a href class="brand-link brand-linkII">
                <div class="logo">
                  <img src="../assets/img/brand_logo.png" class="icon-special">
                </div>
                Falcon
                <span style="color:red;">&nbsp;Core</span>
              </a>
            </div>
            <div class="services-tilte">
              <span class="tit">Success Stories</span>
              <h4>
                "Success is Closer Than You Think".
              </h4>
              <ul class="socila-icons">
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg class="youtube-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg class="youtube-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path
                        d="M279.14 288l14.22-92.66h-88.91V140.62c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.61 0 225.36 0C141.09 0 89.09 54.42 89.09 143.39V195.3H0v92.66h89.09V512h107.78V288z" />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg class="youtube-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.975 12.995 1.624 20.167 1.624 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.502 46.782-104.283 104.281-104.283 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.502 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg class="youtube-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path
                        d="M380.9 97.1c-92.8-92.8-243.5-92.8-336.3 0-89.2 89.2-92.6 231.1-10.3 325.1L7.1 507.7c-9.3 9.3-2.7 25.1 10.4 25.1h.3l96.6-23.9c92 59.3 213.1 47.6 292.9-32.2 92.8-92.8 92.8-243.5 0-336.3zm-51.3 285c-6.5 18.2-37.5 33.5-52.1 34.4-13.3.8-30.8 1.6-98.2-30.6-82.2-38.3-135.6-132.4-139.8-138.6-4.1-6.2-33.5-44.5-33.5-84.7s21.3-59.7 30.4-68.1c6.7-6.4 17.9-9.2 28.5-6.1s71.2 32.9 83.2 38.1c11.2 5 18.7 8.3 20.8 13.8 2.6 6.7 2.6 15.4 1.8 19.6-4.8 23.2-16.2 39.4-31.1 52.3-5.2 4.5-11.3 12.1-16.2 16.2-5.4 4.4-10.9 9.1-4.7 18.2 6 9 26.6 43.7 57.1 70.8 39.4 34.4 72.8 45.3 82.7 50.1 8.1 4.1 18.1 3.6 24.1-2.2 7.5-6.4 16.7-21.9 26.3-32.2 6.6-7.2 15-8.1 24.8-5.3 9.8 2.8 61.8 29.1 72.4 34.3 10.6 5.2 17.7 7.9 20.3 12.5 2.5 4.6 2.5 26.6-3.7 44.8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="one-col servo">
            <h2>Servcieses</h2>
            <div class>
              <p><a href="#Projects" class="c-blueviolet">Web Development</a></p>
              <p><a href="#Projects" class="c-blueviolet">Web design</a></p>
              <p><a href="#Projects" class="c-blueviolet">Ui Coding</a></p>
              <p><a href="#Projects" class="c-blueviolet">Api Connects</a></p>
              <p><a href="#Projects" class="c-blueviolet">Improve SEO</a></p>
              <p><a href="#Projects" class="c-blueviolet">Responsive DesignImprove SEO</a></p>
              <!-- <p>Web Development</p>
              <p>App Development</p>
              <p>Coud Engineering</p>
              <p>Strategy & Research</p>
              <p>Digital Agency</p>
              <p>UI/UX Design</p> -->
            </div>
          </div>
          <div class="one-col">
            <h2>Contacts</h2>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/call.png" class="icon2" />
                <div>
                  <p>+20 1153161437</p>
                  <p>+20 1093057107</p>
                </div>
              </div>
            </div>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/gmail.png" class="icon2" />
                <div>
                  <p>Ahmed.eweiis@gmail.com</p>
                  <p>Ahmedeweiso@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/placeholder.png" class="icon2" />
                <div>
                  <!-- <p>168/170 , Avenue 01 , mirpur</p> -->
                  <p>14/1200 , El Salam 02 , El Nahda</p>
                  <p>Cairo ,Egypt</p>
                </div>
              </div>
            </div>
          </div>
          <div class="photoos">
            <div>
              <div class="backgrond">
                <a :href="mainProjects[0].link" target="_blank"><img :src="mainProjects[0].img" class="icon2-L" /></a>
              </div>
              <div class="backgrond">
                <a :href="extraProjects[0].link" target="_blank"><img :src="extraProjects[0].img" class="icon2-L" /></a>
              </div>
            </div>
            <div>
              <div class="backgrond">
                <a :href="mainProjects[1].link" target="_blank"><img :src="mainProjects[1].img" class="icon2-L" /></a>
              </div>
              <div class="backgrond">
                <a :href="mainProjects[3].link" target="_blank"><img :src="mainProjects[3].img" class="icon2-L" /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="down-footer">
          <div class="fr-d">F.design</div>
          <div>© 2025 All Rights Reserved | Design by Ahmed Eweis</div>
          <div>Privacy Policy . Terms and Conditions</div>
        </div>
      </div>
    </footer>
    <!-- 1 footer -->
    <ScrollToTop />
  </section>
</template>
<script>
import ScrollToTop from '@/components/ScrollToTop.vue';
export default {
  data() {
    return {
      shows: "0",
      images: [
        require("@/assets/certifcate/cer1.png"),
        require("@/assets/certifcate/cer2.png"),
        require("@/assets/certifcate/cer3.png"),
        require("@/assets/certifcate/cer4.png"),
        require("@/assets/certifcate/cer5.png"),
        require("@/assets/certifcate/cer6.png")
      ],
      currentIndex: 0,
      offset: 0,
      slideWidth: 200,
      isModalOpen: false,
      currentImage: "",
      isMoreVisible: false,
      testimonials: [
  {
    id: 1,
    name: "Mahmoud Abdelrahman",
    details: "Working with the team was excellent. Their commitment to deadlines and the quality of work exceeded expectations. I highly recommend them.",
    position: "Business Development Manager",
    company: "Future Tech",
    avatar: require("@/assets/img/avatars/300-14.jpg"),
  },
  {
    id: 2,
    name: "Noha Khaled",
    details: "A highly professional team that truly understands client needs. They helped us launch our website perfectly and in record time.",
    position: "Head of Marketing",
    company: "EG Digital",
    avatar: require("@/assets/img/avatars/300-27.jpg"),
  },
  {
    id: 3,
    name: "Ahmed Samir",
    details: "The team is smart and flexible. They worked with us step by step until the project was completed exactly as we envisioned.",
    position: "Software Engineer",
    company: "Smart Solutions",
    avatar: require("@/assets/img/avatars/300-4.jpg"),
  },
  {
    id: 4,
    name: "Doaa Mostafa",
    details: "Honestly, the service was excellent and technical support was very responsive. Truly respectful and understanding people.",
    position: "Project Manager",
    company: "Creative Line",
    avatar: require("@/assets/img/avatars/300-6.jpg"),
  },
  {
    id: 5,
    name: "Karim El Husseiny",
    details: "The final result was extremely professional, which helped us reach more customers and grow our business.",
    position: "UI/UX Designer",
    company: "Design Flow",
    avatar: require("@/assets/img/avatars/300-9.jpg"),
  },
  {
    id: 6,
    name: "Yasmin Nabil",
    details: "I collaborated with them on a digital marketing campaign, and the results were amazing. They understand the market well and know how to guide effectively.",
    position: "Digital Marketing Specialist",
    company: "Media Plus",
    avatar: require("@/assets/img/avatars/300-20.jpg"),
  },
  {
    id: 7,
    name: "Amr Tawfik",
    details: "Highly committed team with truly innovative solutions. I’ve worked with them on multiple projects, and they impress me every time.",
    position: "Technical Director",
    company: "EG Coders",
    avatar: require("@/assets/img/avatars/300-22.jpg"),
  },
],
      mainProjects: [
        {
          title: 'Fashoin',
          stars: 7,
          img: new URL('../assets/img/imgs/gallery-01.png', import.meta.url).href,
          link: '/fash/index.html'
        },
        {
          title: 'Tumpas',
          stars: 7,
          img: new URL('../assets/img/imgs/gallery-04.png', import.meta.url).href,
          link: 'furniture/index.html'
        },
        {
          title: 'Aqar Bot',
          stars: 9,
          img: new URL('../assets/img/imgs/gallery-02.png', import.meta.url).href,
          link: 'aqart/index.html'
        },
        {
          title: 'Scale',
          stars: 9,
          img: new URL('../assets/img/imgs/gallery-03.png', import.meta.url).href,
          link: '/Scale/asset.html'
        },
        {
          title: 'Author Identification',
          stars: 9,
          img: new URL('../assets/img/imgs/gallery-12.png', import.meta.url).href,
          link: '/Author_Identifcation/index.html'
        }
      ],
      extraProjects: [
        {
          title: 'Mashrouk',
          stars: 5,
          img: new URL('../assets/img/imgs/gallery-23.png', import.meta.url).href,
          link: 'https://mashrouk-apis-eight.vercel.app/MoreLinks'
        },
        {
          title: 'Tatweer',
          stars: 5,
          img: new URL('../assets/img/imgs/gallery-24.png', import.meta.url).href,
          link: '/Tatweer/html/land.html'
        },
        {
          title: 'Kasper',
          stars: 5,
          img: new URL('../assets/img/imgs/gallery-22.png', import.meta.url).href,
          link: '/Kasper/temp2.html'
        },
        {
          title: 'Leon',
          stars: 9,
          img: new URL('../assets/img/imgs/gallery-16.png', import.meta.url).href,
          link: '/Leon/index.html'
        },
        {
          title: 'Land Matcher',
          stars: 7,
          img: new URL('../assets/img/imgs/gallery-13.png', import.meta.url).href,
          link: '/Bondi/index.html'
        },
        {
          title: 'IA Research',
          stars: 6,
          img: new URL('../assets/img/imgs/gallery-15.png', import.meta.url).href,
          link: '/Bakery/index.html'
        },
        {
          title: 'Color',
          stars: 5,
          img: new URL('../assets/img/imgs/gallery-14.png', import.meta.url).href,
          link: '/Agency/index.html'
        },
        {
          title: 'Tourist',
          stars: 9,
          img: new URL('../assets/img/imgs/gallery-11.png', import.meta.url).href,
          link: '/ecommerce/index.html'
        },
        {
          title: 'Electrcity',
          stars: 5,
          img: new URL('../assets/img/imgs/gallery-10.png', import.meta.url).href,
          link: '/Nike/index.html'
        },
        {
          title: 'Company',
          stars: 7,
          img: new URL('../assets/img/imgs/gallery-09.png', import.meta.url).href,
          link: '/dashboard/index.html'
        },
        {
          title: 'Lava',
          stars: 7,
          img: new URL('../assets/img/imgs/gallery-07.png', import.meta.url).href,
          link: '/Pixer/index.html'
        },
        {
          title: 'Corpo Link',
          stars: 5,
          img: new URL('../assets/img/imgs/gallery-05.png', import.meta.url).href,
          link: '/SoundCloud/index.html'
        },
        {
          title: 'Mallory',
          stars: 8,
          img: new URL('../assets/img/imgs/gallery-06.png', import.meta.url).href,
          link: '/vite_portfolio/index.html'
        },
        {
          title: 'Resturent',
          stars: 6,
          img: new URL('../assets/img/imgs/gallery-18.png', import.meta.url).href,
          link: '/NewDash/index.html'
        },
        {
          title: 'E-commerce',
          stars: 6,
          img: new URL('../assets/img/imgs/gallery-17.png', import.meta.url).href,
          link: '/NFT/index.html'
        },
        {
          title: 'Logo Generation',
          stars: 7,
          img: new URL('../assets/img/imgs/gallery-19.png', import.meta.url).href,
          link: '/Digital_agency/index.html'
        },
        {
          title: 'My Web site',
          stars: 8,
          img: new URL('../assets/img/imgs/gallery-21.png', import.meta.url).href,
          link: '/gpa_calc/index.html'
        },
        {
          title: 'AI Movies',
          stars: 7,
          img: new URL('../assets/img/imgs/gallery-08.png', import.meta.url).href,
          link: '/tasks_vue/dist/index.html'
        },
        {
          title: 'Masafat',
          stars: 7,
          img: new URL('../assets/img/imgs/gallery-20.png', import.meta.url).href,
          link: '/todo_vue/dist/index.html'
        }
      ],
      currentTestimonialIndex: 0,
    };
  },
  components: {
    ScrollToTop,
  },
  computed: {
    innerWidth() {
      return this.images.length * this.slideWidth;
    },
    visibleSlides() {
      return Math.floor(this.$refs.slider.offsetWidth / this.slideWidth);
    },
    currentTestimonial() {
      return this.testimonials[this.currentTestimonialIndex];
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateOffset);
    setInterval(this.showSlides, 3000); // Change slide every 5 seconds
    this.updateSlideWidth();
window.addEventListener("resize", this.updateSlideWidth);
  },
  methods: {
    updateSlideWidth() {
  if (window.innerWidth <= 768) {
    this.slideWidth = this.$refs.slider.offsetWidth;
  } else {
    this.slideWidth = 300;
  }
},
    toggleMenu() {
      const naviList = document.getElementById("navi-list");
      naviList.classList.toggle("active");
    },
    showo() {
      this.shows = this.shows === "0" ? "1" : "0";
      const alotSection = document.getElementById('pricing');
      if (alotSection) {
        alotSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    showSlides() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateOffset();
    },
    updateOffset() {
      this.offset = -this.currentIndex * this.slideWidth;
    },
    openModal(image) {
      this.currentImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentImage = "";
    },
    toggleno() {
      if (!this.isMoreVisible) {
        this.isMoreVisible = true;
      } else {
        this.isMoreVisible = false;
      }
    },
    scrollToSkills() {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    showTestimonial(index) {
      this.currentTestimonialIndex = index;
    },
    nextTestimonial() {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex + 1) % this.testimonials.length;
    },
    previousTestimonial() {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
    showoo() {
      this.shows = this.shows === '1' ? '0' : '1';
    }
  }
};
</script>
<style scoped>
.slider-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.slide {
  margin: 0 10px;
  cursor: pointer;
  width: 295px;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .slide {
    /* width: 100% !important; */
    margin: 0 !important;
    padding: 10px;
    padding-left: 0;
  }
}
@import "@/assets/style.css";
@import "@/assets/normalize.css";
</style>
