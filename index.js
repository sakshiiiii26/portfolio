
        // Add to your script to animate progress bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => bar.style.width = width, 100);
            });
        }
 window.addEventListener('load', animateSkills);
     // Modal functionality
    function openModal(project) {
         document.getElementById(`${project}-modal`).style.display = "block";
         document.body.style.overflow = "hidden";
        }
        
    function closeModal(project) {
        document.getElementById(`${project}-modal`).style.display = "none";
        document.body.style.overflow = "auto";
        }
        // Mobile menu toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
        
    mobileBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
        e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
        
        // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 992) {
                navLinks.style.display = 'none';
            }
        });
    });
        // Tab functionality
        function openTab(evt, tabName) {
            const tabContents = document.getElementsByClassName("tab-content");
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove("active");
            }
            
            const tabButtons = document.getElementsByClassName("tab-btn");
            for (let i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove("active");
            }
            
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.className === "modal") {
                event.target.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }