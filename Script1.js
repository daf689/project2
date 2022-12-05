const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () =>
    nav.classList.toggle('active'))

const textEl = document.getElementById('text')
const text = 'QC Restaurant'
let idx = 1
let speed = 300

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Satisfied customer',
        photo: 'https://randomuser.me/api/portraits/women/19.jpg',
        text: "The QC Restaurant has fantastic food and customer service.",
    },
    {
        name: 'Jane Doe',
        position: 'Satisfied customer',
        photo: 'https://randomuser.me/api/portraits/women/24.jpg',
        text: "The QC Restaurant has a wide variety of delicious food to choose from.",
    },
    {
        name: 'John Smith',
        position: 'Satisfied customer',
        photo: 'https://randomuser.me/api/portraits/men/8.jpg',
        text: "The QC Restaurant is my favorite restaurant.",
    },
]

let idx2 = 1

function updateTestimonial() {
    const {name, position, photo, text} = testimonials[idx2]

    testimonial.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position

    idx2++

    if(idx2 > testimonials.length - 1) {
        idx2 = 0
    }
}

setInterval(updateTestimonial, 7000)

const http = require("http")

http.get('http://api.open-notify.org', resp => {
    let data = '';
    resp.on('data', chunk => {
        data += chunk
    });

    resp.on('end', () => {
        console.log(data)
    });
})
