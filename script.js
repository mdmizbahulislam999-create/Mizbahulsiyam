// Cart Counter Logic
let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
  // মেনু হাইড এবং শো করার ফাংশন
function toggleMenu() {
    var menu = document.getElementById("menuList");
    menu.classList.toggle("show-menu");
}

// ইউজার যদি মেনুর বাইরে কোথাও ক্লিক করে, তবে মেনু অটো বন্ধ হয়ে যাবে
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        var dropdowns = document.getElementsByClassName("menu-list");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-menu')) {
                openDropdown.classList.remove('show-menu');
            }
        }
    }
}
    // একটি সুন্দর পপ-আপ অ্যালার্ট
    alert(`${productName} has been added to your cart! Total items: ${cartCount}`);
}

function toggleCart() {
    alert(`You have ${cartCount} items in your cart. Proceeding to checkout features coming soon!`);
}

// Active Nav Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
