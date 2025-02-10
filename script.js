document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const memberName = document.getElementById('member-name');
    const memberRole = document.getElementById('member-role');
    const memberLinkedIn = document.getElementById('member-linkedin');
    const memberGitHub = document.getElementById('member-github');
    const memberEmail = document.getElementById('member-email');
    let activeIndex = 0;

    // Member data
    const memberData = [
        {
            name: "Senira Vinwath",
            role: "Team Leader and Fullstack Developer",
            linkedin: "https://www.linkedin.com/in/senira-vinwath-0732392b7/",
            github: "https://github.com/senira",
            email: "mailto:senira.20220997@iit.ac.lk"
        },
        {
            name: "Sudeeshwara Sandanayake",
            role: "FrontEnd Developer",
            linkedin: "https://www.linkedin.com/in/sudeeshwara-sandanayake-707a20294/",
            github: "https://github.com/sudeeshwara",
            email: "mailto:sudeeshwara.20232376@iit.ac.lk"
        },
        {
            name: "Tharusha Dineth",
            role: "UI/UX Designer & Frontend Developer",
            linkedin: "https://www.linkedin.com/in/tharusha-dineth/",
            github: "https://github.com/tharusha",
            email: "mailto:tharusha@example.com"
        },
        {
            name: "Ravindu Kulasekara",
            role: "Backend Developer",
            linkedin: "https://linkedin.com/in/ravindu",
            github: "https://github.com/ravindu",
            email: "mailto:ravindu.20222368@iit.ac.lk"
        },
        {
            name: "Vihangi Pallege",
            role: "Backend Developer",
            linkedin: "https://www.linkedin.com/in/vihangi-pallege-3885aa288/",
            github: "https://github.com/kavii0209",
            email: "mailto:vihangi@example.com"
        }
    ];

    // Function to update the carousel
    function updateCarousel() {
        const totalItems = items.length;
        const screenWidth = window.innerWidth;

        // Adjust values for responsiveness
        const translateZValue = screenWidth < 768 ? 150 : 300; // Depth
        const rotateYValue = screenWidth < 768 ? 45 : 60; // Rotation angle

        items.forEach((item, index) => {
            const offset = (index - activeIndex + totalItems) % totalItems;

            if (offset === 0) {
                item.style.transform = `translateZ(${translateZValue}px)`;
                item.style.opacity = '1';
                item.classList.add('active');
            } else if (offset === 1 || offset === totalItems - 1) {
                item.style.transform = `rotateY(${offset === 1 ? rotateYValue : -rotateYValue}deg) translateZ(${translateZValue - 100}px)`;
                item.style.opacity = '0.75';
                item.classList.remove('active');
            } else {
                item.style.transform = `translateZ(-${translateZValue}px)`;
                item.style.opacity = '0.5';
                item.classList.remove('active');
            }
        });
    }

    // Function to set the active member details
    function setActiveMember(index) {
        const member = memberData[index];

        // Update member details
        memberName.textContent = member.name;
        memberRole.textContent = member.role;
        memberLinkedIn.href = member.linkedin;
        memberGitHub.href = member.github;
        memberEmail.href = member.email;

        // Update active class on carousel
        items.forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
        });
    }

    // Add click listeners to carousel items
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeIndex = index;
            updateCarousel();
            setActiveMember(index);
        });
    });

    // Update carousel on window resize
    window.addEventListener('resize', updateCarousel);

    // Initial setup
    updateCarousel();
    setActiveMember(0);
});
