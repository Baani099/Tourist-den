// Reliable High Quality Unsplash Images for Pakistan Destinations
const fallbackImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

const destinationsData = [
    {
        id: 'hunza',
        name: 'Hunza Valley',
        region: 'Gilgit-Baltistan',
        tag: 'Most Popular',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        description: 'Famous for Passu Cones, Karimabad, Attabad Lake, and ancient Baltit Fort with backdrop of Rakaposhi.',
        duration: '5 - 7 Days'
    },
    {
        id: 'skardu',
        name: 'Skardu & Deosai Plains',
        region: 'Gilgit-Baltistan',
        tag: 'Wilderness',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Home to Shangrila Resort, Katpana Cold Desert, Sarfaranga, and the high-altitude Deosai Plateau.',
        duration: '6 - 9 Days'
    },
    {
        id: 'fairymeadows',
        name: 'Fairy Meadows & Nanga Parbat',
        region: 'Diamer District',
        tag: 'Adventure Trek',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        description: 'Lush green alpine plateau offering unmatched views of Nanga Parbat (8,126m Killer Mountain).',
        duration: '4 - 6 Days'
    },
    {
        id: 'swat',
        name: 'Swat Valley & Kalam',
        region: 'Khyber Pakhtunkhwa',
        tag: 'Family Favorite',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
        description: 'The Switzerland of the East with Mahodand Lake, Malam Jabba ski resort, and pine forests.',
        duration: '3 - 5 Days'
    },
    {
        id: 'naran',
        name: 'Naran & Kaghan Valley',
        region: 'Khyber Pakhtunkhwa',
        tag: 'Scenic Lakes',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        description: 'Crystal clear Saif-ul-Malook lake, Babusar Top pass, and roaring Kunhar River.',
        duration: '3 - 5 Days'
    },
    {
        id: 'lahore',
        name: 'Lahore Heritage Tour',
        region: 'Punjab',
        tag: 'Cultural Heritage',
        image: 'https://images.unsplash.com/photo-1588097281266-310cead47879?auto=format&fit=crop&w=800&q=80',
        description: 'Badshahi Mosque, Lahore Fort, Wazir Khan Mosque, and vibrant traditional food streets.',
        duration: '2 - 3 Days'
    }
];

const packagesData = [
    {
        id: 'pkg-1',
        title: '7 Days Majestic Hunza & Attabad Lake',
        category: 'family',
        pricePKR: 85000,
        rating: 4.9,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        highlights: ['Karimabad Stays', 'Passu Cones Boating', 'Husseini Suspension Bridge', 'Rakaposhi Viewpoint']
    },
    {
        id: 'pkg-2',
        title: '8 Days Skardu, Deosai & Shangrila Expedition',
        category: 'adventure',
        pricePKR: 110000,
        rating: 5.0,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        highlights: ['Deosai 4x4 Jeep Safari', 'Cold Desert Stargazing', 'Upper Kachura Lake', 'Manthokha Waterfall']
    },
    {
        id: 'pkg-3',
        title: '5 Days Fairy Meadows & Nanga Parbat Basecamp',
        category: 'adventure',
        pricePKR: 65000,
        rating: 4.8,
        reviews: 76,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
        highlights: ['Tattoo Village Jeep Ride', 'Alpine Log Cabin Stay', 'Beyal Camp Trek', 'Nanga Parbat Sunset View']
    },
    {
        id: 'pkg-4',
        title: '4 Days Swat Valley & Malam Jabba Ski Getaway',
        category: 'family',
        pricePKR: 48000,
        rating: 4.7,
        reviews: 110,
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
        highlights: ['Malam Jabba Chairlift', 'Fizagat Park', 'Kalam Forest Walk', 'Mahodand Lake Tour']
    },
    {
        id: 'pkg-5',
        title: '10 Days Grand North Circuit (Hunza + Skardu)',
        category: 'cultural',
        pricePKR: 145000,
        rating: 5.0,
        reviews: 62,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        highlights: ['Complete Karakoram Hwy', 'Silk Road Culture', 'Both Hunza & Baltistan', 'Prado Comfort']
    },
    {
        id: 'pkg-6',
        title: '3 Days Lahore Historical & Food Culture',
        category: 'cultural',
        pricePKR: 32000,
        rating: 4.9,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1588097281266-310cead47879?auto=format&fit=crop&w=800&q=80',
        highlights: ['Mughal Heritage Tour', 'Food Street Tasting', 'Wagah Border Ceremony', 'Guided Fort Walk']
    }
];

const activitiesData = [
    {
        title: 'Deosai High Plateau Jeep Safari',
        icon: 'fa-truck-monster',
        desc: 'Explore the second highest plateau in the world, home to brown bears and blooming summer wildflowers.'
    },
    {
        title: 'Attabad Lake Boating & Jet Skiing',
        icon: 'fa-water',
        desc: 'Speed through turquoise glacial waters surrounded by towering Karakoram mountain cliffs.'
    },
    {
        title: 'Nanga Parbat Basecamp Trekking',
        icon: 'fa-person-hiking',
        desc: 'Guided alpine trekking through pine forests towards Beyal camp and Nanga Parbat glacier.'
    },
    {
        title: 'Passu Suspension Bridge Crossing',
        icon: 'fa-bridge',
        desc: 'Test your courage on one of the longest and thrilling rope bridges in the Hunza region.'
    },
    {
        title: 'Cold Desert Stargazing & Camping',
        icon: 'fa-campground',
        desc: 'Camp under crystal clear starry skies in Katpana or Sarfaranga cold high-altitude sand dunes.'
    },
    {
        title: 'Lahore Culinary & Heritage Walk',
        icon: 'fa-utensils',
        desc: 'Savor legendary Lahori cuisine including Karahi, Naan, and traditional sweets on guided walks.'
    }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    renderPackages(packagesData);
    renderActivities();

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Navigation Functionality
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(page => page.classList.add('hidden'));

    const target = document.getElementById(`page-${pageId}`);
    if (target) {
        target.classList.remove('hidden');
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('bg-gradient-to-r', 'from-primary', 'to-azure', 'text-white', 'shadow-md');
        link.classList.add('text-gray-300');
    });

    const activeNav = document.getElementById(`nav-${pageId}`);
    if (activeNav) {
        activeNav.classList.remove('text-gray-300');
        activeNav.classList.add('bg-gradient-to-r', 'from-primary', 'to-azure', 'text-white', 'shadow-md');
    }

    document.getElementById('mobile-menu').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Destinations Cards
function renderDestinations() {
    const featuredContainer = document.getElementById('featured-destinations-grid');
    const allContainer = document.getElementById('all-destinations-grid');

    const html = destinationsData.map(dest => `
        <div class="bg-skybg-card/80 rounded-3xl border border-skybg-border overflow-hidden group hover:border-azure/60 transition-all duration-300 shadow-xl flex flex-col">
            <div class="relative h-60 overflow-hidden bg-skybg-card">
                <img src="${dest.image}" alt="${dest.name}" 
                     onerror="this.src='${fallbackImg}'"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
                <span class="absolute top-4 left-4 bg-[#0F172A]/80 backdrop-blur-md border border-skybg-border text-azure-light text-xs font-bold px-3 py-1 rounded-full">
                    ${dest.tag}
                </span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <span class="text-xs text-azure-light uppercase tracking-wider font-semibold">${dest.region}</span>
                    <h3 class="text-2xl font-bold text-white font-serif mt-1 mb-2">${dest.name}</h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-4">${dest.description}</p>
                </div>
                <div class="flex items-center justify-between pt-4 border-t border-skybg-border">
                    <span class="text-xs text-gray-300 font-medium"><i class="fa-regular fa-clock text-azure"></i> ${dest.duration}</span>
                    <button onclick="openBookingModal('Destination: ${dest.name}')" class="text-azure hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                        Book Tour <i class="fa-solid fa-chevron-right text-[10px]"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (featuredContainer) featuredContainer.innerHTML = html.slice(0, 3);
    if (allContainer) allContainer.innerHTML = html;
}

// Render Tour Packages
function renderPackages(data) {
    const featuredContainer = document.getElementById('featured-packages-grid');
    const allContainer = document.getElementById('all-packages-grid');

    const html = data.map(pkg => `
        <div class="bg-skybg-card/90 rounded-3xl border border-skybg-border overflow-hidden group hover:border-azure/60 transition-all duration-300 shadow-xl flex flex-col">
            <div class="relative h-56 overflow-hidden bg-skybg-card">
                <img src="${pkg.image}" alt="${pkg.title}" 
                     onerror="this.src='${fallbackImg}'"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
                <div class="absolute top-4 right-4 bg-[#0F172A]/80 backdrop-blur-md border border-skybg-border px-3 py-1 rounded-full text-xs font-bold text-azure-light flex items-center gap-1">
                    <i class="fa-solid fa-star text-azure"></i> ${pkg.rating} (${pkg.reviews})
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-white font-serif mb-3 leading-snug group-hover:text-azure-light transition-colors">${pkg.title}</h3>
                    <ul class="space-y-2 mb-6">
                        ${pkg.highlights.map(h => `<li class="text-xs text-gray-300 flex items-center gap-2"><i class="fa-solid fa-circle-check text-azure text-[10px]"></i> ${h}</li>`).join('')}
                    </ul>
                </div>
                <div class="pt-4 border-t border-skybg-border flex items-center justify-between">
                    <div>
                        <span class="text-[10px] text-gray-400 block uppercase font-bold">Starting From</span>
                        <span class="text-xl font-extrabold text-white">PKR ${pkg.pricePKR.toLocaleString()}</span>
                    </div>
                    <button onclick="openBookingModal('${pkg.title}', ${pkg.pricePKR})" class="bg-gradient-to-r from-primary to-azure hover:from-primary-dark hover:to-azure-hover text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg shadow-azure/20 transition-all">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (featuredContainer) featuredContainer.innerHTML = html.slice(0, 3);
    if (allContainer) allContainer.innerHTML = html;
}

// Filter Packages
function filterPackages(category) {
    const tabs = document.querySelectorAll('.pkg-tab');
    tabs.forEach(tab => {
        tab.classList.remove('bg-gradient-to-r', 'from-primary', 'to-azure', 'text-white', 'shadow-lg');
        tab.classList.add('bg-skybg-card', 'border', 'border-skybg-border', 'text-gray-300');
    });

    event.target.classList.remove('bg-skybg-card', 'border', 'border-skybg-border', 'text-gray-300');
    event.target.classList.add('bg-gradient-to-r', 'from-primary', 'to-azure', 'text-white', 'shadow-lg');

    if (category === 'all') {
        renderPackages(packagesData);
    } else {
        const filtered = packagesData.filter(p => p.category === category);
        renderPackages(filtered);
    }
}

// Render Activities
function renderActivities() {
    const container = document.getElementById('activities-grid');
    if (!container) return;

    container.innerHTML = activitiesData.map(act => `
        <div class="bg-skybg-card/80 p-8 rounded-3xl border border-skybg-border hover:border-azure/60 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-azure text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i class="fa-solid ${act.icon}"></i>
            </div>
            <h3 class="text-xl font-bold text-white font-serif mb-2 group-hover:text-azure-light transition-colors">${act.title}</h3>
            <p class="text-gray-300 text-sm leading-relaxed">${act.desc}</p>
        </div>
    `).join('');
}

// Booking Modal Logic
function openBookingModal(packageTitle, basePrice = 75000) {
    document.getElementById('modal-package-title').innerText = packageTitle;
    document.getElementById('modal-pkg-price').value = basePrice;
    document.getElementById('booking-modal').classList.remove('hidden');
    calcTotal();
}

function closeBookingModal() {
    document.getElementById('booking-modal').classList.add('hidden');
}

function calcTotal() {
    const price = parseInt(document.getElementById('modal-pkg-price').value) || 75000;
    const guests = parseInt(document.getElementById('booking-guests').value) || 1;
    const total = price * guests;
    document.getElementById('modal-total-price').innerText = `PKR ${total.toLocaleString()}`;
}

function handleBookingConfirm(e) {
    e.preventDefault();
    alert('Thank you! Your tour reservation request has been received. Our team will contact you on WhatsApp shortly.');
    closeBookingModal();
}

function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for contacting Tourist Den! We will get back to you within 2 hours.');
    e.target.reset();
}

function handleQuickSearch(e) {
    e.preventDefault();
    navigateTo('packages');
}
