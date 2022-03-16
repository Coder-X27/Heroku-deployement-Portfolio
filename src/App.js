import React from "react";
import "./App.css";
import img1 from './img/perfil.png'
import img2 from './img/aboutt.png'
import img3 from './img/portfolio1.png'
import img4 from './img/portfolio2.png'
import img5 from './img/portfolio3.png'
import img6 from './img/portfolio4.png'
import img7 from './img/portfolio5.png'
import img8 from './img/project.png'
function App() {
    return <div className = "App" >
    <header id="header" class="header">
        <nav class="nav container">
            <a href="#" class="nav_logo">Karan</a>
            <div class="nav_menu" id="nav-menu">
                <ul class="nav_list grid">
                    <li class="nav_item">
                        <a href="#" class="nav_link active-link">
                            <i class="uil uil-estate nav_icon"></i>Home
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_link">
                            <i class="uil uil-users-alt nav_icon"></i>About
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_link">
                            <i class="uil uil-file nav_icon"></i>Skills
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_link">
                            <i class="uil uil-briefcase-alt nav_icon"></i>Services
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_link">
                            <i class="uil uil-scenery nav_icon"></i>Portfolio
                        </a>
                    </li>
                    <li class="nav_item">
                        <a href="#" class="nav_link">
                            <i class="uil uil-message nav_icon"></i>ContactMe
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav_close" id="nav-close"></i>
            </div>
            <div class="nav_btns">
                <i class="uil uil-moon change-theme" id="theme-button"></i>
                <div class="nav_toggle" id="nav-toggle">
                    <i class="uil uil-apps nav_icon"></i>
                </div>
            </div>
        </nav>
    </header>

        <section class="home section" id="home">
            <div class="home_container container grid">
                <div class="home_content grid">
                    <div class="home_social">
                        <a href="https://www.facebook.com/Karansh99/" target='_blank' class="home_social_icon"><i class="uil uil-facebook-f"></i></a>

                        <a href="https://github.com/Coder-X27/" target='_blank' class="home_social_icon"><i class="uil uil-github-alt"></i></a>

                        <a href="https://www.linkedin.com/in/karan-sharma-23574a1b9/" target='_blank' class="home_social_icon"><i class="uil uil-linkedin-alt"></i></a>
                    </div>
                    <div class="home_img">
                        <img src={img1} alt="" />
                    </div>
                    <div class="home_data">
                        <h1 class="home_title">Hi, I'am Karan</h1>
                        <h3 class="home_subtitle">Frontend Developer and Python programmer</h3>
                        <p class="home_description">Experienced in Frontend Web development and Python Programming .</p>
                        <a href="#contact" class="button button--flex">
                            <i class='uil uil-message'>Contact me</i>
                        </a>
                    </div>
                </div>
                <div class="home_scroll">
                    <a href="#about" class="home_scroll-button button--flex">
                        <i class="uil uil-mouse-alt home_scroll-mouse"></i>
                        <span class="home_scroll-name">Scroll Down</span>
                        <i class="uil uil-arrow-down home_scroll-arrow"></i>
                    </a>
                </div>
          </div>
        </section>


        <section class="about section" id="about">
            <h2 class="section_title">About Me</h2>
            <span class="section_subtitle">My Introduction</span>
            <div class="about_container container grid">
                <img src={img2} alt=""></img>
                <div class="about_data">
                    <p class="about_description">Passionate Python coder, who has a good command in HTML, CSS, JavaScript and React. Some basic knowledge of Cyber Security and Data analytics . </p>
                    <div class="about_info">
                    

                        <div class="">
                            <span class="about_info-title">20+</span>
                            <span class="about_info-name">Completed </span>
                            <span class="about_info-name">Project</span>

                        </div>

                        
                    </div>
                    <div class="about_buttons">
                        <a download="" href={"./Resume/Karan-resume.pdf"} class="button button--flex">
              Download CV<i class="uil uil-download-alt button_icon"></i>
            </a>
                    </div>
                </div>
            </div>
        </section>


        <section class="skills section" id="skills">
            <div class="section_title">Skills</div>
            <div class="skills_container container grid">
                <div>
                    <div class="skills_content skills_open ">
                        <div class="skills_header">
                            <i class="uil uil-brackets-curly skills_icon"></i>
                            <div>
                                <h1 class="skills_title">
                                    Frontend Developer
                                </h1>
                            </div>
                            <i class="uil uil-angle-down skills_arrow"></i>
                        </div>
                        <div class="skills_list grid">

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">HTML</h3>
                                    <span class="skills_number">95%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_html"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">CSS</h3>
                                    <span class="skills_number">85%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_css"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">JavaScript</h3>
                                    <span class="skills_number">75%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_javascript"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">React</h3>
                                    <span class="skills_number">65%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_react"></span>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="skills_content skills_close ">
                        <div class="skills_header">
                            <i class="uil uil-server-network skills_icon"></i>
                            <div>
                                <h1 class="skills_title">
                                    Python Developer
                                </h1>
                            </div>
                            <i class="uil uil-angle-down skills_arrow"></i>
                        </div>
                        <div class="skills_list grid">

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Pygame</h3>
                                    <span class="skills_number">80%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_pygame"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Tkinter</h3>
                                    <span class="skills_number">70%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_tkinter"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Seaborn</h3>
                                    <span class="skills_number">65%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_seaborn"></span>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div class="skills_content skills_close ">
                        <div class="skills_header">
                            <i class="uil uil-swatchbook skills_icon"></i>
                            <div>
                                <h1 class="skills_title">
                                    Backend and DataBase
                                </h1>
                            </div>
                            <i class="uil uil-angle-down skills_arrow"></i>
                        </div>
                        <div class="skills_list grid">

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">NodeJS</h3>
                                    <span class="skills_number">90%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_nodejs"></span>
                                </div>
                            </div>
                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">Mongo DB</h3>
                                    <span class="skills_number">85%</span>
                                </div>

                                <div class="skills_bar">
                                    <span class="skills_percentage skills_mongodb"></span>
                                </div>
                            </div>

                            <div class="skills_data">
                                <div class="skills_titles">
                                    <h3 class="skills_name">JQuery</h3>
                                    <span class="skills_number">75%</span>
                                </div>
                                <div class="skills_bar">
                                    <span class="skills_percentage skills_jquery"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="q section">
            <h2 class="section_title">Qualification</h2>
            <span class="section_subtitle">My personal journey</span>
            <div class="q_container container">
                <div class="q_tabs">
                    <div class="q_button button-flex q_active" data-target='#education'>
                        <i class="uil uil-graduation-cap q-icon"></i> Education
                    </div>

                </div>
                <div class="q_sections">
                    <div class="q_content q_active" data-content id="education">
                        <div class="q_data">
                            <div>
                                <h3 class="q_title">Academics</h3>
                                <span class="q_subtitle">All Saints Church Sr. Sec. School,Jaipur</span>
                                <div class="q_calendar">
                                    <i class="uil uil-calendar-alt"></i> 2006-2013
                                </div>
                            </div>
                            <div>
                                <span class="q_rounder"></span>
                                <span class="q_line"></span>
                            </div>
                        </div>

                        <div class="q_data">
                            <div></div>
                            <div>
                                <span class="q_rounder"></span>
                                <span class="q_line"></span>
                            </div>
                            <div>
                                <h3 class="q_title">High School</h3>
                                <span class="q_subtitle">The Castle Convent School,Jaipur</span>
                                <div class="q_calendar">
                                    <i class="uil uil-calendar-alt"></i> 2014-2020
                                </div>
                            </div>
                        </div>

                        <div class="q_data">
                            <div>
                                <h3 class="q_title">BTech in Artificial Intelligence and Data Science</h3>
                                <span class="q_subtitle">JECRC College</span>
                                <div class="q_calendar">
                                    <i class="uil uil-calendar-alt"></i> 2020-2024
                                </div>
                            </div>
                            <div>
                                <span class="q_rounder"></span>
                                <span class="q_line"></span>
                            </div>
                        </div>
                        <div class="q_data">
                            <div>
                                <h3 class="q_title">C++ Programming</h3>
                                <span class="q_subtitle">Udemy</span>
                                <div class="q_calendar">
                                    <i class="uil uil-calendar-alt"></i> 2020
                                </div>
                            </div>
                            <div>
                                <span class="q_rounder"></span>
                                <span class="q_line"></span>
                            </div>
                        </div>
                        <div class="q_data">
                            <div>
                                <h3 class="q_title">Python Programming</h3>
                                <span class="q_subtitle">CourseEra</span>
                                <div class="q_calendar">
                                    <i class="uil uil-calendar-alt"></i> 2020
                                </div>
                            </div>
                            <div>
                                <span class="q_rounder"></span>
                                <span class="q_line"></span>
                            </div>
                        </div>
                        <div class="q_data">
                            <div></div>
                            <div>
                                <span class="q_rounder"></span>
                            </div>
                            <div>
                                <h3 class="q_title">Web Development</h3>
                                <span class="q_subtitle">Code With harry</span>
                                <div class="q_calendar">
                                    <i class="uil uil-calendar-alt"></i> 2020
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section class="services section" id="services">
            <h2 class="section_title">My Passion</h2>
            <span class="section_subtitle">What I Do</span>
            <div class="services_container container grid">
                <div class="services_content">
                    <div>
                        <i class="uil uil-desktop services_icon"></i>
                        <h3 class="services_title">Competitive </h3>
                        <h3 class="services_title"> Programming</h3>
                    </div>
                    <span class="button button-flex button-small button-link services_button">
                        View More
                        <i class="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div class="services_modal">
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">Competitive </h4>
                            <h4 class="services_modal-title"> Programming</h4>
                            <i class="uil uil-times services_modal-close"></i>
                            <ul class="services_modal-services grid">
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I am in favour of being a Competitive programmer </p>
                                </li>
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I like to solve Hacker Rank Problems</p>
                                </li>
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I Enjoy solving problems on Codechef</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="services_content">
                    <div>
                        <i class="uil uil-arrow services_icon"></i>
                        <h3 class="services_title">FrontEnd Developer</h3>
                    </div>
                    <span class="button button-flex button-small button-link services_button">
                        View More
                        <i class="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div class="services_modal">
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">FrontEnd Developer</h4>
                            <i class="uil uil-times services_modal-close"></i>
                            <ul class="services_modal-services grid">
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I Design Web pages.</p>
                                </li>
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I prioritize user interface while working on a website.</p>
                                </li>
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I Majorly Focuses on the Styling and Functionalty of the Site .</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="services_content">
                    <div>
                        <i class="uil uil-game-structure services_icon"></i>
                        <h3 class="services_title">Python Developer</h3>
                    </div>
                    <span class="button button-flex button-small button-link services_button">
                        View More
                        <i class="uil uil-arrow-right button_icon"></i>
                    </span>
                    <div class="services_modal">
                        <div class="services_modal-content">
                            <h4 class="services_modal-title">Python Developer</h4>
                            <i class="uil uil-times services_modal-close"></i>
                            <ul class="services_modal-services grid">
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>Python is my second love next to web development .</p>
                                </li>
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>I created 2-3 games using Pygame module .</p>
                                </li>
                                <li class="services-modal-service">
                                    <i class="uil uil-check-circle services_modal-icon"></i>
                                    <p>Python provides many other interesting modules which furthermore widens the spectrum of it's use</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="portfolio section" id="portfolio">
            <h2 class="section_title">Portfolio</h2>
            <span class="section_subtitle">Most Recent Work</span>
            <div class="portfolio_container container ">
                <div>
                    <div class="portfolio_content grid ">
                        <img src={img3} alt="" class="portfolio_img"></img>
                        <div class="portfolio_data">
                            <h3 class="portfolio_title">Notes Making site</h3>
                            <p class="portfolio_description">
                                A site in which you can add your Notes and use it for future use by adding the title and the description . This will store the details in local storage. You can even delete the note if needed.
                            </p>
                            <a href="./Projects/Project1/project1.html" class="button button-flex button-small portfolio_button">
                                Demo
                                <i class="uil uil-arrow-right button_icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio_content grid ">
                        <img src={img4} alt="" class="portfolio_img"></img>
                        <div class="portfolio_data">
                            <h3 class="portfolio_title">Lamborghini Animation</h3>
                            <p class="portfolio_description">
                                This is a simple animation display of a car moving forward w.r.t the background .
                            </p>
                            <a href="./Projects/project2/project2.html" class="button button-flex button-small portfolio_button">
                                Demo
                                <i class="uil uil-arrow-right button_icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio_content grid">
                        <img src={img5} alt="" class="portfolio_img"></img>
                        <div class="portfolio_data">
                            <h3 class="portfolio_title">Dragon Game</h3>
                            <p class="portfolio_description">
                                Ready for some adventure in the forests, then is the game for you.
                            </p>
                            <a href="./Projects/project3/index.html" class="button button-flex button-small portfolio_button">
                                Demo
                                <i class="uil uil-arrow-right button_icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio_content grid">
                        <img src={img6} alt="" class="portfolio_img"></img>
                        <div class="portfolio_data">
                            <h3 class="portfolio_title">Math Game</h3>
                            <p class="portfolio_description">
                                A Mathematics game where you try to answer as many Multiplication questions as you can in a minute .
                            </p>
                            <a href="./Projects/project4/index.html" class="button button-flex button-small portfolio_button">
                                Demo
                                <i class="uil uil-arrow-right button_icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="portfolio_content grid">
                        <img src={img7} alt="" class="portfolio_img"></img>
                        <div class="portfolio_data">
                            <h3 class="portfolio_title">Simon Game</h3>
                            <p class="portfolio_description">
                                Simon game is basically a memory game for the Alzheimer Patients as well as for the normal people to improve their memory .
                            </p>
                            <a href="./Projects/project5/index.html" class="button button-flex button-small portfolio_button">
                                Demo
                                <i class="uil uil-arrow-right button_icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="project section">
            <div class="project_bg">
                <div class="project_container container grid">
                    <div class="project_data">
                        <h2 class="project_title">Need Web Devlopement Consultant ?</h2>
                        <p class="project_description">Contact me now and be a part if my journey</p>
                        <a href="#contact" class="button button-flex button-white">
                            Contact Me
                            <i class="uil uil-message project_icon button_icon"></i>
                        </a>
                    </div>
                    <img src={img8} alt="" class="project_img"></img>
                </div>
            </div>
        </section>

        <section class="contact section" id="contact">
            <h2 class="section_title">Contact Me</h2>
            <span class="section_subtitle">Get in Touch</span>
            <div class="contact_container container grid">
                <div class="contact_details">
                    <div class="contact_information">
                        <i class="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Call Me</h3>
                            <span class="contact_subtitle">+91 6377535991</span>
                        </div>
                    </div>

                    <div class="contact_information">
                        <i class="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Email</h3>
                            <span class="contact_subtitle">sharma.karan27oct@gmail.com</span>
                        </div>
                    </div>

                    <div class="contact_information">
                        <i class="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 class="contact_title">Location</h3>
                            <span class="contact_subtitle">Jaipur, Rajasthan</span>
                        </div>
                    </div>
                </div>
                <form action="" class="contact_form grid">
                    <div class="contact_inputs grid">
                        <div class="contact_content">
                            <label for="" class="contact_label">Name</label>
                            <input type="text" class="contact_input"></input>
                        </div>
                        <div class="contact_content">
                            <label for="" class="contact_label">Email</label>
                            <input type="email" class="contact_input"></input>
                        </div>
                    </div>
                    <div class="contact_content">
                        <label for="" class="contact_label">Project</label>
                        <input type="email" class="contact_input"></input>
                    </div>
                    <div class="contact_content">
                        <label for="" class="contact_label">Message</label>
                        <textarea name="" id="" cols="0" rows="7" class="contact_input"></textarea>
                    </div>
                    <div>
                        <a href="#" class="button button-flex">
                            Send Message
                            <i class="uil uil-message button_icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>

    <footer class="footer">
        <div class="footer_bg">
            <div class="footer_container container grid">
                <div>
                    <h1 class="footer_title">Karan</h1>
                    <span class="footer_subtitle">FrontEnd Devleopment</span>
                </div>
                <ul class="footer_link">
                    <li>
                        <a href="#services" class="footer_link">Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="footer_link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" class="footer_link">Contact</a>
                    </li>
                </ul>
                <div class="footer_socials">
                    <a href="https://www.facebook.com/Karansh99/" class="footer_social" target="_blank">
                        <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/its_karanshx/" class="footer_social" target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://github.com/Coder-X27" class="footer_social" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
            <p class="footer_copy">&copy; Karan Sharma. All rights Reserved</p>
        </div>
    </footer>

    <a href="#" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup_icon"></i>
    </a>

    </div>;
}

export default App;