const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () =>
    nav.classList.toggle('active'))

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
    
    let idx = 1
    
    function updateTestimonial() {
        const {name, position, photo, text} = testimonials[idx]
    
        testimonial.innerHTML = text
        userImage.src = photo
        userName.innerHTML = name
        role.innerHTML = position
    
        idx++
    
        if(idx > testimonials.length - 1) {
            idx = 0
        }
    }
    
    setInterval(updateTestimonial, 7000)
