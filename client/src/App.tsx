
import { useState } from 'react'

import {
  HashRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import {
  Menu,
  X,
  Search,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  Building2,
  ShieldCheck,
  Headset
} from 'lucide-react'

import './index.css'

const properties = [
  {
    id: 1,
    title: 'Luxury Modern Villa',
    location: 'DHA Phase 6, Lahore',
    price: 'PKR 8.5 Crore',
    status: 'For Sale',
    beds: 5,
    baths: 6,
    area: '1 Kanal',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900'
  },
  {
    id: 2,
    title: 'Elegant Family House',
    location: 'Bahria Town, Lahore',
    price: 'PKR 3.2 Crore',
    status: 'For Sale',
    beds: 4,
    baths: 4,
    area: '10 Marla',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900'
  },
  {
    id: 3,
    title: 'Premium Apartment',
    location: 'Gulberg, Lahore',
    price: 'PKR 95,000 / month',
    status: 'For Rent',
    beds: 3,
    baths: 3,
    area: '1800 Sq Ft',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900'
  }
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        AYTO
        <span>PROPERTIES</span>
      </Link>

      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav-links active' : 'nav-links'}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/properties" onClick={() => setOpen(false)}>Properties</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>

      <Link to="/contact" className="nav-cta">
        Get In Touch
      </Link>
    </header>
  )
}

function PropertyCard({ property }: { property: typeof properties[number] }) {
  return (
    <article className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <span className="property-status">{property.status}</span>
      </div>

      <div className="property-info">
        <p className="property-location">
          <MapPin size={15} />
          {property.location}
        </p>

        <h3>{property.title}</h3>

        <strong className="property-price">{property.price}</strong>

        <div className="property-meta">
          <span><BedDouble size={16} /> {property.beds} Beds</span>
          <span><Bath size={16} /> {property.baths} Baths</span>
          <span><Maximize size={16} /> {property.area}</span>
        </div>
      </div>
    </article>
  )
}

function Home() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')

  const filteredProperties = properties.filter(property => {
    const matchesSearch =
      `${property.title} ${property.location}`
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesStatus =
      status === 'All' || property.status === status

    return matchesSearch && matchesStatus
  })

  return (
    <>
      <Navbar />

      <section className="hero">
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

          <div className="hero-buttons">
            <Link to="/properties" className="gold-button">
              Explore Properties <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="outline-button">
              Discover More
            </Link>
          </div>
        </div>

        <div className="search-panel">
          <div>
            <label>Location or Property</label>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search Lahore, DHA, Gulberg..."
            />
          </div>

          <div>
            <label>Property Status</label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option value="All">All Properties</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>

          <a href="#featured" className="search-button">
            <Search size={18} />
            Search
          </a>
        </div>
      </section>

      <section className="intro section-padding">
        <span className="section-label">WELCOME TO AYTO</span>
        <h2>Real Estate Made Simple.</h2>
        <p>
          We connect people with exceptional properties
          through trusted service and professional guidance.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <Building2 />
          <h3>Premium Properties</h3>
          <p>Discover quality homes and investment opportunities.</p>
        </div>

        <div className="feature-card">
          <ShieldCheck />
          <h3>Trusted Service</h3>
          <p>Make informed property decisions with confidence.</p>
        </div>

        <div className="feature-card">
          <Headset />
          <h3>Expert Support</h3>
          <p>Get professional assistance throughout your journey.</p>
        </div>
      </section>

      <section className="listings section-padding" id="featured">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR COLLECTION</span>
            <h2>Featured Properties</h2>
          </div>

          <Link to="/properties" className="view-all">
            View All <ArrowRight size={17} />
          </Link>
        </div>

        <div className="property-grid">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <p className="empty-state">
            No matching properties found.
          </p>
        )}
      </section>

      <section className="contact-banner">
        <div>
          <span className="section-label">LET'S GET STARTED</span>
          <h2>Ready To Find Your Dream Property?</h2>
          <p>Our team is ready to help you take the next step.</p>
        </div>

        <Link to="/contact" className="gold-button">
          Contact Our Team <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
    </>
  )
}

function PropertiesPage() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <span className="section-label">OUR COLLECTION</span>
        <h1>Explore Properties</h1>
        <p>Discover your next home or investment opportunity.</p>
      </section>

      <section className="listings section-padding">
        <div className="property-grid">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="page-header">
        <span className="section-label">WHO WE ARE</span>
        <h1>About AYTO Properties</h1>
        <p>Your trusted partner in discovering quality real estate.</p>
      </section>

      <section className="intro section-padding">
        <span className="section-label">OUR MISSION</span>
        <h2>Making Real Estate Simple.</h2>
        <p>
          AYTO Properties aims to make buying, selling and renting
          properties a convenient and transparent experience.
        </p>
      </section>

      <Footer />
    </>
  )
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Navbar />

      <section className="page-header">
        <span className="section-label">GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>We are here to help with your real estate needs.</p>
      </section>

      <section className="contact-section">
        <div>
          <h2>Let's Talk Property.</h2>
          <p>
            Send us your inquiry and our team can help you
            explore your property options.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={e => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <label>
            Full Name
            <input required placeholder="Your name" />
          </label>

          <label>
            Email Address
            <input type="email" required placeholder="Your email" />
          </label>

          <label>
            Phone Number
            <input type="tel" placeholder="Your phone number" />
          </label>

          <label>
            Message
            <textarea required rows={5} placeholder="Your message" />
          </label>

          <button className="gold-button" type="submit">
            Send Inquiry
          </button>

          {submitted && (
            <p className="form-notice">
              Thank you! This is a demo form. Backend integration
              is required to deliver your inquiry.
            </p>
          )}
        </form>
      </section>

      <Footer />
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="brand footer-brand">
        AYTO
        <span>PROPERTIES</span>
      </Link>

      <p>Your trusted partner in real estate.</p>
      <p>© 2026 AYTO Properties. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}
