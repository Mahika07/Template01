document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbarSupportedContent li a')

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    current = "#" + current
    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute("href") === current) {
            a.classList.add('active')
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const section = document.getElementById('section03');
    const containers = document.querySelectorAll('.exp_container');

    window.addEventListener('scroll', function () {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            containers.forEach(container => {
                container.classList.add('straight');
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const section1 = document.getElementById('section01');
    const section2 = document.getElementById('section02');
    const navmargin = document.getElementById('navbarSupportedContent');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust as needed to trigger when 50% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'section01' || entry.target.id === 'section02') {
                    section1.classList.add('transparent-bg');
                    section1.classList.remove('white-bg');
                    navmargin.style.marginLeft = '0px'
                } else {
                    section1.classList.add('white-bg');
                    section1.classList.remove('transparent-bg');
                    navmargin.style.marginLeft = '10rem'

                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(section1);
    observer.observe(section2);

    // Optional: Observe additional sections if needed
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});


const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const typer = (el) => {

    const texts = JSON.parse(el.dataset.rotate);
    const period = +el.dataset.period || 1000;
    const speed = +el.dataset.speed || 100;
    const textsTot = texts.length;

    let tx = 0;
    let ch = 0;
    let chTot = 0;
    let text = ""

    const typeIt = () => {
        if (ch > chTot) return setTimeout(typeText, period);
        el.textContent = text.substring(0, ch++);
        setTimeout(typeIt, rand(Math.min(60, speed - 60), speed + 60));
    };


    const typeText = () => {
        ch = 0;
        text = texts[tx];
        chTot = text.length;

        typeIt();

        tx += 1;
        tx %= texts.length;
    };

    typeText();

};

document.querySelectorAll("[data-rotate]").forEach(typer);

function openService(evt, serviceName) {
    var i, tabcontent, tablinks;
    document.getElementById("service01").style.display = "none";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
}