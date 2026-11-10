
import { useState } from 'react'

const properties = [
  {
    id: 1,
    name: 'Luxury Modern Villa',
    location: 'DHA Phase 6, Lahore',
    price: 'PKR 8.5 Crore',
    type: 'For Sale',
    beds: 5,
    baths: 6,
    area: '1 Kanal',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900'
  },
  {
    id: 2,
    name: 'Elegant Family House',
    location: 'Bahria Town, Lahore',
    price: 'PKR 3.2 Crore',
    type: 'For Sale',
    beds: 4,
    baths: 4,
    area: '10 Marla',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900'
  },
  {
    id: 3,
    name: 'Premium Apartment',
    location: 'Gulberg, Lahore',
    price: 'PKR 95,000 / Month',
    type: 'For Rent',
    beds: 3,
    baths: 3,
    area: '1800 Sq Ft',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900'
  }
]

function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="brand">
        AYTO
        <span>PROPERTIES</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#properties">Properties</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-button">
        Get In Touch
      </a>
    </header>
  )
}

function Hero() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          YOUR TRUSTED REAL ESTATE PARTNER
        </span>

        <h1>
          Find Your Perfect
          <span> Place To Call Home.</span>
        </h1>

        <p>
          Discover exceptional properties, explore new
          opportunities and make your real estate dreams
          a reality with AYTO Properties.
        </p>

        <div className="hero-actions">
          <a href="#properties" className="gold-button">
            Explore Properties →
          </a>

          <a href="#about" className="outline-button">
            Discover More
          </a>
        </div>
      </div>

      <div className="search-panel">
        <div>
          <label>Location or Property</label>
          <input
            type="text"
            placeholder="Search Lahore, DHA, Gulberg..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <label>Property Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="All">All Properties</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>

        <a
          href="#properties"
          className="search-button"
          onClick={() => {
            const section = document.getElementById('properties')
            section?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Search Properties
        </a>
      </div>

      <style>{''}</style>
    </section>
  )
}

function PropertyCard({ property }: { property: typeof properties[number] }) {
  return (
    <article className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.name} />

        <span className="property-badge">
          {property.type}
        </span>
      </div>

      <div className="property-info">
        <p className="property-location">
          📍 {property.location}
        </p>

        <h3>{property.name}</h3>

        <strong className="property-price">
          {property.price}
        </strong>

        <div className="property-meta">
          <span>🛏 {property.beds} Beds</span>
          <span>🛁 {property.baths} Baths</span>
          <span>📐 {property.area}</span>
        </div>
      </div>
    </article>
  )
}

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <div className="feature-icon">⌂</div>
        <h3>Premium Properties</h3>
        <p>
          Discover carefully selected homes and
          investment opportunities.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">✓</div>
        <h3>Trusted Service</h3>
        <p>
          Enjoy professional guidance throughout
          your real estate journey.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">♧</div>
        <h3>Expert Support</h3>
        <p>
          Get assistance with your property
          buying and selling decisions.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-padding" id="about">
      <span className="section-label">ABOUT AYTO PROPERTIES</span>

      <h2>Real Estate Made Simple.</h2>

      <p>
        At AYTO Properties, we believe finding the right
        property should be a simple and rewarding experience.
        Our platform helps people discover properties,
        explore opportunities and make confident decisions.
      </p>

      <a href="#contact" className="gold-button">
        Learn More →
      </a>
    </section>
  )
}

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert(`Thank you ${name}! Your inquiry has been received locally.`)
    setName('')
    setEmail('')
  }

  return (
    <section className="contact section-padding" id="contact">
      <div>
        <span className="section-label">GET IN TOUCH</span>
        <h2>Let's Find Your Dream Property.</h2>
        <p>
          Have questions? Contact our team to explore
          your real estate opportunities.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Your Full Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="gold-button">
          Send Inquiry →
        </button>
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand footer-brand">
        AYTO
        <span>PROPERTIES</span>
      </a>

      <p>Find Your Place. Discover Your Future.</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#properties">Properties</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © 2026 AYTO Properties. All Rights Reserved.
      </p>
    </footer>
  )
}

export default function App() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      `${property.name} ${property.location}`
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesFilter =
      filter === 'All' || property.type === filter

    return matchesSearch && matchesFilter
  })

  return (
    <>
      <Navbar />

      <Hero />

      <section className="intro section-padding">
        <span className="section-label">WELCOME TO AYTO</span>
        <h2>Find Properties That Match Your Lifestyle.</h2>
        <p>
          Explore our featured properties and discover
          your next home or investment.
        </p>
      </section>

      <Features />

      <section className="listings section-padding" id="properties">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR COLLECTION</span>
            <h2>Featured Properties</h2>
          </div>
        </div>

        <div className="listing-controls">
          <input
            placeholder="Search by name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Properties</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>

        <div className="property-grid">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <p className="empty-state">
            No matching properties found.
          </p>
        )}
      </section>

      <About />

      <Contact />

      <Footer />
    </>
  )
}
