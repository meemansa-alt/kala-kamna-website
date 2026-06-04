// Product Database
const products = {
    'bharat-kala': [
        {
            id: 1,
            name: 'Radha Krishna Miniature',
            description: 'Intricate miniature painting of Radha and Krishna in traditional Indian style with gold leaf accents.',
            price: '₹15,000',
            size: '12" x 18"',
            image: 'assets/product-placeholder.png',
            badge: 'Handmade'
        },
        {
            id: 2,
            name: 'Mughal Garden',
            description: 'Beautiful Mughal era inspired painting depicting a royal garden with detailed floral patterns.',
            price: '₹12,500',
            size: '16" x 20"',
            image: 'assets/product-placeholder.png',
            badge: 'Premium'
        },
        {
            id: 3,
            name: 'Rajasthani Princess',
            description: 'Elegant portrait of a Rajasthani princess adorned with traditional jewelry and ornaments.',
            price: '₹18,000',
            size: '18" x 24"',
            image: 'assets/product-placeholder.png',
            badge: 'Featured'
        },
        {
            id: 4,
            name: 'Temple Bells',
            description: 'Sacred depiction of temple architecture with intricate details and vibrant colors.',
            price: '₹11,000',
            size: '14" x 16"',
            image: 'assets/product-placeholder.png',
            badge: 'Handmade'
        }
    ],
    'beyond-canvas': [
        {
            id: 5,
            name: 'Floral Sculpture',
            description: '3D sculptural artwork with layered floral patterns creating stunning depth and dimension.',
            price: '₹22,000',
            size: '20" x 20"',
            image: 'assets/product-placeholder.png',
            badge: 'Unique'
        },
        {
            id: 6,
            name: 'Abstract Form',
            description: 'Modern sculptural piece blending geometric forms with organic elements.',
            price: '₹16,500',
            size: '16" x 16"',
            image: 'assets/product-placeholder.png',
            badge: 'Premium'
        },
        {
            id: 7,
            name: 'Nature Relief',
            description: 'Textured relief artwork capturing the essence of natural landscapes.',
            price: '₹19,000',
            size: '18" x 22"',
            image: 'assets/product-placeholder.png',
            badge: 'Handmade'
        },
        {
            id: 8,
            name: 'Mixed Media Panel',
            description: 'Contemporary mixed media artwork combining various textures and materials.',
            price: '₹14,500',
            size: '14" x 20"',
            image: 'assets/product-placeholder.png',
            badge: 'Featured'
        }
    ],
    'scenic-escapes': [
        {
            id: 9,
            name: 'Mountain Sunrise',
            description: 'Serene landscape capturing the first light of dawn over snow-capped mountains.',
            price: '₹13,000',
            size: '16" x 20"',
            image: 'assets/product-placeholder.png',
            badge: 'Handmade'
        },
        {
            id: 10,
            name: 'Forest Stream',
            description: 'Peaceful forest landscape with a gentle flowing stream and wildlife.',
            price: '₹11,500',
            size: '12" x 18"',
            image: 'assets/product-placeholder.png',
            badge: 'Popular'
        },
        {
            id: 11,
            name: 'Ocean Waves',
            description: 'Dynamic seascape with crashing waves and beautiful coastal views.',
            price: '₹14,500',
            size: '18" x 24"',
            image: 'assets/product-placeholder.png',
            badge: 'Premium'
        },
        {
            id: 12,
            name: 'Valley Mist',
            description: 'Ethereal valley landscape enveloped in morning mist and floating clouds.',
            price: '₹12,000',
            size: '14" x 18"',
            image: 'assets/product-placeholder.png',
            badge: 'Featured'
        }
    ],
    'crystal-resin': [
        {
            id: 13,
            name: 'Emerald Geode',
            description: 'Stunning epoxy resin artwork with emerald green waves and crystal formations.',
            price: '₹16,000',
            size: '12" x 12"',
            image: 'assets/product-placeholder.png',
            badge: 'Unique'
        },
        {
            id: 14,
            name: 'Ocean Depths',
            description: 'Mesmerizing resin art capturing deep ocean blue with golden accents.',
            price: '₹17,500',
            size: '16" x 16"',
            image: 'assets/product-placeholder.png',
            badge: 'Premium'
        },
        {
            id: 15,
            name: 'Sunset Blend',
            description: 'Vibrant resin artwork with warm sunset colors and metallic finishes.',
            price: '₹15,500',
            size: '14" x 14"',
            image: 'assets/product-placeholder.png',
            badge: 'Handmade'
        },
        {
            id: 16,
            name: 'Galaxy Swirl',
            description: 'Abstract resin creation with cosmic colors and swirling patterns.',
            price: '₹18,000',
            size: '18" x 18"',
            image: 'assets/product-placeholder.png',
            badge: 'Featured'
        }
    ],
    'dev-kala': [
        {
            id: 17,
            name: 'Lord Krishna Flute',
            description: 'Divine depiction of Lord Krishna playing the flute with celestial background.',
            price: '₹20,000',
            size: '18" x 24"',
            image: 'assets/product-placeholder.png',
            badge: 'Premium'
        },
        {
            id: 18,
            name: 'Goddess Lakshmi',
            description: 'Radiant portrayal of Goddess Lakshmi with golden lotus and divine aura.',
            price: '₹19,500',
            size: '18" x 22"',
            image: 'assets/product-placeholder.png',
            badge: 'Handmade'
        },
        {
            id: 19,
            name: 'Shiva Meditation',
            description: 'Spiritual artwork of Lord Shiva in deep meditation with sacred symbolism.',
            price: '₹17,000',
            size: '16" x 20"',
            image: 'assets/product-placeholder.png',
            badge: 'Featured'
        },
        {
            id: 20,
            name: 'Saraswati Blessing',
            description: 'Beautiful representation of Goddess Saraswati spreading knowledge and wisdom.',
            price: '₹16,500',
            size: '14" x 18"',
            image: 'assets/product-placeholder.png',
            badge: 'Unique'
        }
    ]
};

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const categoriesPage = document.getElementById('categories-page');
const productsPage = document.getElementById('products-page');
const categoryCards = document.querySelectorAll('.category-card');
const backBtn = document.getElementById('back-btn');
const cornerLogo = document.querySelector('.corner-logo');

// Hide splash screen after 5 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        categoriesPage.classList.remove('hidden');
    }, 5000);
});

// Category card click handlers
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        displayProducts(category);
    });
});

// Back button functionality
backBtn.addEventListener('click', () => {
    productsPage.classList.add('hidden');
    categoriesPage.classList.remove('hidden');
});

// Logo click - return to categories
cornerLogo.addEventListener('click', () => {
    if (!categoriesPage.classList.contains('hidden')) {
        return; // Already on categories page
    }
    productsPage.classList.add('hidden');
    categoriesPage.classList.remove('hidden');
});

// Display products for selected category
function displayProducts(category) {
    const categoryTitles = {
        'bharat-kala': 'Bharat Kala - Traditional Indian Art',
        'beyond-canvas': 'Beyond the Canvas - Sculptural Designs',
        'scenic-escapes': 'Scenic Escapes - Nature & Landscapes',
        'crystal-resin': 'Crystal Resin Series - Modern Abstract',
        'dev-kala': 'Dev Kala - Spiritual & Divine'
    };

    const productsTitle = document.getElementById('products-title');
    const productsGrid = document.getElementById('products-grid');

    productsTitle.textContent = categoryTitles[category];
    productsGrid.innerHTML = '';

    const categoryProducts = products[category];

    categoryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-badge">${product.badge}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-details">
                    <span class="product-size">${product.size}</span>
                    <span class="product-price">${product.price}</span>
                </div>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;

        // Add to cart functionality
        const addBtn = productCard.querySelector('.add-to-cart-btn');
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addBtn.textContent = '✓ Added to Cart';
            addBtn.style.background = 'var(--secondary-color)';
            addBtn.style.color = 'var(--primary-color)';
            setTimeout(() => {
                addBtn.textContent = 'Add to Cart';
                addBtn.style.background = '';
                addBtn.style.color = '';
            }, 2000);
        });

        productsGrid.appendChild(productCard);
    });

    // Transition to products page
    categoriesPage.classList.add('hidden');
    productsPage.classList.remove('hidden');
}

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!productsPage.classList.contains('hidden')) {
            productsPage.classList.add('hidden');
            categoriesPage.classList.remove('hidden');
        }
    }
});