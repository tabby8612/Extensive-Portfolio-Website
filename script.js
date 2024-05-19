const tabLinks = document.querySelectorAll(".tabs-links");
const tabContents = document.querySelectorAll(".tab-contents");

const sideMenu = document.querySelector("#sidemenu");
const closeMenuBtn = document.querySelector("#menuclose");
const showMenuBtn = document.querySelector("#menushow");

console.log(sideMenu);


for (const links of tabLinks) {
    links.addEventListener("click", (e) => {
        const checkingText = e.currentTarget.innerHTML;

        tabLinks.forEach((tablink) => {
            tablink.classList.remove("active-link");
            e.currentTarget.classList.add("active-link");
        });

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active-tab");

        });


        tabContents.forEach((tabContent) => {
            if (tabContent.getAttribute("id") === checkingText) {
                tabContent.classList.add("active-tab");
            }
        })
    })
}


showMenuBtn.addEventListener("click", () => {
    sideMenu.style.right = "0";
});

closeMenuBtn.addEventListener("click", () => {
    sideMenu.style.right = "-200px";
});


const scriptURL = 'https://script.google.com/a/macros/vu.edu.pk/s/AKfycbzDtQwrQfyDZbC3sXKp-Iaxb6SvGaho4Ru9BxSMF6GmU3jG44tHVtwS3s_bWSulrici/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})