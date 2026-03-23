import { useState, useEffect } from 'react'
import './App.css'
import devDaysImage from './assets/dev-days.png'
import usergroupLogoImage from './assets/usergroup_logo.png'
import julietRajanImage from './assets/julietrajan1.png'
import comingSoonImage from './assets/coming_soon.png'
import stJosephsImage from './assets/stjosephs.jpg'
import pepImage from './assets/pep.png'
import karthiImage from './assets/karthi.png'
import meenachiImage from './assets/meenachi.jpg'
import joshuaImage from './assets/Joshua.jpg'
import madhumithaImage from './assets/MadhumithaH.jpg'
import manashaImage from './assets/Manasha.jpg'
import saravanPriyanImage from './assets/saravan-priyan.jpg'
import veeraImage from './assets/Veera.jpg'
import vijayaNandanaImage from './assets/VijayaNandana.jpg'
import abdulImage from './assets/Abdul.jpg'
import balamuruganImage from './assets/bala.jpg'
import mahashreeImage from './assets/Mahashree.jpg' 
function useCountdown(targetISO) {
  const [time, setTime] = useState(() => {
    const target = new Date(targetISO).getTime()
    const diff = Math.max(0, target - Date.now())
    return {
      days:    String(Math.floor(diff / 86400000)).padStart(2, '0'),
      hours:   String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
    }
  })
  useEffect(() => {
    const target = new Date(targetISO).getTime()
    const id = setInterval(() => {
      const diff = Math.max(0, target - Date.now())
      setTime({
        days:    String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours:   String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }, 1000)
    return () => clearInterval(id)
  }, [targetISO])
  return time
}

function App() {
    const defaultLinkedIn = 'https://www.linkedin.com';
    const studentCoordinators = [
      { name: 'Meenachi Sundaresan J', image: meenachiImage, designation: 'Beta Microsoft Student Ambassador', linkedin: 'https://www.linkedin.com/in/jms-luck/' },
      { name: 'Joshua Moses', image: joshuaImage, designation: 'Event Coordinator', linkedin: 'https://www.linkedin.com/in/joshua-moses-7432682a1/' },
      { name: 'Madhumitha H', image: madhumithaImage, designation: 'Social Media Coordinator', linkedin: 'https://www.linkedin.com/in/madhumitha-harikarthikeyan-4549232b8/' },
      { name: 'Manashaa U', image: manashaImage ,designation:'Social Media Coordinator', linkedin: 'https://www.linkedin.com/in/manashaaumapathy/' },
      { name: 'Balamurugan', image: balamuruganImage, designation: 'Design Lead', linkedin: 'https://www.linkedin.com/in/growwithbalamurugan/' },
      { name: 'Mahashree U', image: mahashreeImage, designation: 'Design Lead', linkedin: 'https://www.linkedin.com/in/mahashreeu/' },
      { name: 'Saravan Priyan', image: saravanPriyanImage, designation: 'Event Coordinator', linkedin: 'https://www.linkedin.com/in/saravanapriyanc/' },
      { name: 'Veera', image: veeraImage, designation: 'Event Coordinator', linkedin: 'https://www.linkedin.com/in/veerabuthran/' },
      { name: 'Vijaya Nandana', image: vijayaNandanaImage , designation:'Content writer', linkedin: 'https://www.linkedin.com/in/vijaya-nandana-m-435b9a29a/' },
      { name: 'Abdul', image: abdulImage, designation: 'Logistics Coordinator', linkedin: 'https://www.linkedin.com/in/abdulshhhh/' },
      { name: 'Abdul', image: abdulImage, designation: 'Volunteer ', linkedin: 'https://www.linkedin.com/in/abdulshhhh/' },
      { name: 'Abdul', image: abdulImage, designation: 'Volunteer ', linkedin: 'https://www.linkedin.com/in/abdulshhhh/' },
      { name: 'Abdul', image: abdulImage, designation: 'Volunteer ', linkedin: 'https://www.linkedin.com/in/abdulshhhh/' },
      { name: 'Abdul', image: abdulImage, designation: 'Volunteer ', linkedin: 'https://www.linkedin.com/in/abdulshhhh/' }
    ];
  const lumaEventUrl = 'https://luma.com/6zv3rbj1'
  const speakerCallPostUrl = 'https://www.linkedin.com/company/github/jobs/'
  const githubLogoUrl = 'https://github.githubassets.com/favicons/favicon.svg'
  const mapEmbedUrl = 'https://maps.google.com/maps?q=St%20Joseph%27s%20Institute%20of%20Technology%20Chennai&z=15&output=embed'
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=St+Joseph%27s+Institute+of+Technology+Chennai'
  // Mar 28 2026 08:00 IST = UTC+5:30 → 02:30 UTC
  const countdown = useCountdown('2026-03-28T02:30:00Z')
  const speakers = [
    {
      name: 'Dr. Juliet Rajan',
      designation: 'Senior Program Manager, Microsoft',
      company: 'Microsoft',
      image: julietRajanImage,
      linkedin: 'https://www.linkedin.com/in/julietrajan/',
      session: 'Getting Started with VS Code',
      time: '08:30 AM',
      keynote: true,
    },
    {
      name: 'Rahul K',
      designation: 'Copilot Community Mentor',
      company: 'GitHub Student Community',
      image: 'https://i.pravatar.cc/120?img=12',
      session: 'Hands-On Copilot Workshop',
      time: '10:00 AM',
      keynote: true,
    },
    {
      name: 'Priya Nair',
      designation: 'Workshop Instructor',
      company: 'St. Joseph\'s Group Of Institutions',
      image: 'https://i.pravatar.cc/120?img=47',
      session: 'Live Coding & Demo',
      time: '11:00 AM',
      keynote: false,
    },
    {
      name: 'Vikram S',
      designation: 'Campus Program Coordinator',
      company: 'Student Organizing Team',
      image: 'https://i.pravatar.cc/120?img=15',
      session: 'Q&A and Closing',
      time: '12:15 PM',
      keynote: false,
    },
  ]
  const organizers = [
    {
      name: 'St. Joseph\'s Group Of Institutions',
      role: 'Host Institution',
      description: 'Leading campus host for Copilot Dev Days Chennai and student enablement.',
      image: stJosephsImage,
      linkedin: 'https://www.linkedin.com/school/st.-joseph%27s-college-of-engineering/',
    },
    {
      name: 'Microsoft Student Community St. Joseph\'s Group Of Institutions',
      role: 'Host Community',
      description: 'Supporting students with resources, mentorship, and community engagement.',
      image: usergroupLogoImage,
      linkedin: 'https://www.linkedin.com/company/microsoft-students-community-st-josephs-group-of-institutions/',
    },
    {
      name: 'PEP Cloud Computing (AWS/ Azure/ GCP) and DevOps Centre',
      role: 'Community Partner',
      description: 'Empowering Innovation Through Cloud Computing and DevOps Excellence',
      image: pepImage,
      linkedin: 'https://www.linkedin.com/company/pep-cloud-computing-and-devops-centre/',
    },
  ]
  const speakerBenefits = [
    'Connect with 200+ student developers',
    'Share your expertise on stage',
    'Build your professional brand',
    'Expand your network',
  ]
  const agendaItems = [
    { time: '8:00 AM', title: 'Registration', description: 'Collect your badge and meet fellow attendees.' },
    { time: '8:20 AM', title: 'Getting started with VS Code', description: '' },
    { time: '9:20 AM', title: 'Refreshment', description: '' },
    { time: '9:40 AM', title: 'Agent with Copilot', description: '' },
    { time: '10:20 AM', title: 'Copilot CLI', description: '' },
    { time: '11:20 AM', title: 'Q&A Session', description: '' },
    { time: '12:20 PM', title: 'Lunch', description: '' },
  ]
  const [heroSpotlight, setHeroSpotlight] = useState({ x: 50, y: 32 })

  const handleHeroMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setHeroSpotlight({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    })
  }

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    if (!section) return

    const navOffset = 88
    const targetTop = section.getBoundingClientRect().top + window.scrollY - navOffset
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  return (
    <div className="page" id="home">
      <nav className="top-nav" aria-label="Main navigation">
        <span className="top-nav-brand">
          <img className="github-mark" src={githubLogoUrl} alt="GitHub icon" />
          GitHub Copilot Dev Days
        </span>
        <ul className="top-nav-links">
          <li><a href="#home" onClick={(event) => handleNavClick(event, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(event) => handleNavClick(event, 'about')}>About</a></li>
          <li><a href="#countdown" onClick={(event) => handleNavClick(event, 'countdown')}>Countdown</a></li>
          <li><a href="#registration" onClick={(event) => handleNavClick(event, 'registration')}>Registration</a></li>
          <li><a href="#speakers" onClick={(event) => handleNavClick(event, 'speakers')}>Speakers</a></li>
          <li><a href="#schedule" onClick={(event) => handleNavClick(event, 'schedule')}>Schedule</a></li>
          <li><a href="#organizers" onClick={(event) => handleNavClick(event, 'organizers')}>Organizers</a></li>
          {/* <li><a className="top-nav-cta" href={lumaEventUrl} target="_blank" rel="noreferrer">Reserve Tickets</a></li> */}
        </ul>
      </nav>

      <header
        className="hero"
        onMouseMove={handleHeroMove}
        onMouseLeave={() => setHeroSpotlight({ x: 50, y: 32 })}
        style={{ '--mx': `${heroSpotlight.x}%`, '--my': `${heroSpotlight.y}%` }}
      >
        <aside className="side-logo side-logo-left" aria-label="User group visual">
          <img className="event-logo big-usergroup-logo" src={usergroupLogoImage} alt="User group logo" />
        </aside>
        <aside className="side-logo" aria-label="Event visual">
          <img className="event-logo left-hero-image" src={devDaysImage} alt="Dev Days visual" />
        </aside>
        <p className="eyebrow">GitHub Copilot Dev Days | Chennai</p>
        <h1>GitHub Copilot Dev Days | Chennai (St. Joseph&apos;s Group Of Institutions)</h1>
        <p className="subtext">
          Join us for a focused student event to explore practical developer
          workflows with GitHub Copilot.
        </p>
        <div className="hero-meta">
          <span>Mar 28</span>
          <span>8:00 AM - 1:00 PM</span>
          <span>Students</span>
          <span>Max 200 Attendees</span>
        </div>
        {/* <a className="cta" href={lumaEventUrl} target="_blank" rel="noreferrer">
          Reserve Tickets
        </a> */}

        <div className="countdown" id="countdown" aria-label="Countdown to event">
          {[['Days', countdown.days], ['Hours', countdown.hours], ['Minutes', countdown.minutes], ['Seconds', countdown.seconds]].map(
            ([label, val], i, arr) => (
              <div key={label} className="cd-pair">
                <div className="cd-unit">
                  <span className="cd-num">{val}</span>
                  <span className="cd-label">{label}</span>
                </div>
                {i < arr.length - 1 && <span className="cd-sep">:</span>}
              </div>
            )
          )}
        </div>
      </header>

      <section className="featured-speakers" id="speakers" aria-label="Featured speakers">
        <h2>Featured Speakers</h2>
        <p className="featured-speakers-subtitle">
          Amazing student mentors and community leaders joining Copilot Dev Days Chennai.
        </p>
        <div className="speaker-profile-grid">
          {speakers.slice(0, 3).map((speaker, index) => (
            <article className="speaker-profile-card" key={speaker.name}>
              <div className="speaker-profile-image-wrap">
                {speaker.keynote && index === 0 && <span className="speaker-badge">Keynote Speaker</span>}
                {speaker.linkedin && index === 0 && (
                  <a
                    className="speaker-linkedin"
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${speaker.name} LinkedIn profile`}
                    title="View LinkedIn profile"
                  >
                    in
                  </a>
                )}
                <img src={index === 0 ? speaker.image : comingSoonImage} alt={index === 0 ? speaker.name : 'Coming soon speaker'} />
              </div>
              <div className="speaker-profile-body">
                <h3>{index === 0 ? speaker.name : 'Coming Soon'}</h3>
                <p>{index === 0 ? speaker.company : 'Speaker Announcement'}</p>
                <small>{index === 0 ? speaker.designation : 'Details will be updated shortly.'}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <main>
        <section className="section" id="about">
          <h2>Event Details</h2>
          <div className="grid three">
            <article className="card">
              <h3>Event Name</h3>
              <p>
                GitHub Copilot Dev Days | Chennai (St. Joseph&apos;s Group Of
                Institutions)
              </p>
            </article>
            <article className="card">
              <h3>Venue</h3>
              <p>
                St. Joseph&apos;s Institute of Technology, Chennai
              </p>
            </article>
            <article className="card">
              <h3>Audience and Capacity</h3>
              <p>
                Students, with a maximum attendee capacity of 200 participants.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="schedule">
          <h2>Event Agenda &amp; Speakers</h2>

          <div className="agenda-sessions">
            {agendaItems.map((item) => (
              <article key={item.title} className="agenda-card">
                <div className="agenda-time-col">
                  <span className="time">{item.time}</span>
                </div>
                <div className="agenda-session-col">
                  <strong className="agenda-session-title">{item.title}</strong>
                  {item.description && <p>{item.description}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="registration">
          <div className="speaker-callout" id="speakers-call">
            <article className="speaker-callout-left">
              <h2>Call for Speakers</h2>
              <p className="speaker-callout-lead">Share Your Copilot Journey with the Community</p>
              <p>
                Are you passionate about GitHub Copilot and developer productivity? Do you have
                insights, experiences, or innovations to share? We&apos;re looking for dynamic speakers
                to join GitHub Copilot Dev Days at St. Joseph&apos;s Group Of Institutions and inspire
                fellow student developers.
              </p>
              <ul className="speaker-benefits" aria-label="Speaker call benefits">
                {speakerBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>

            <aside className="speaker-callout-right" aria-label="Speaker call details">
              <h3>Ready to Share Your Story?</h3>
              <p>
                Join our lineup of speakers and inspire the GitHub Copilot Dev Days audience
                with your expertise and insights.
              </p>
              <div className="speaker-facts">
                <div className="speaker-fact">Talk Duration: 30-45 minutes</div>
                <div className="speaker-fact">Expected Audience: 200 attendees</div>
              </div>
              <button
                type="button"
                className="speaker-open-btn"
                onClick={() => window.open(speakerCallPostUrl, '_blank', 'noreferrer')}
              >
                Open
              </button>
            </aside>
          </div>

          <div className="register">
            <h2>Ready for Copilot Dev Days Chennai?</h2>
            <p>
              Seats are limited. Join us on Mar 28 at St. Joseph&apos;s Institute of
              Technology from 8:00 AM to 1:00 PM.
            </p>
            <p>
              Registration is free. Reserve your ticket before Mar 26.
            </p>
            {/* <button type="button" onClick={() => window.open(lumaEventUrl, '_blank', 'noreferrer')}>
              Reserve Tickets
            </button> */}
          </div>
        </section>

        <section className="section" id="organizers">
          <h2>Organizers</h2>
          <div className="organizer-profile-grid">
            {organizers.map((organizer) => (
              <article
                key={organizer.name}
                className="speaker-profile-card organizer-profile-card"
                style={{ cursor: 'pointer' }}
                onClick={() => organizer.linkedin && window.open(organizer.linkedin, '_blank', 'noreferrer')}
                title={organizer.linkedin ? `View LinkedIn profile for ${organizer.name}` : undefined}
                tabIndex={0}
                role="button"
                aria-label={organizer.linkedin ? `Open LinkedIn profile for ${organizer.name}` : undefined}
              >
                <div className="speaker-profile-image-wrap organizer-image-wrap">
                  <img src={organizer.image} alt={organizer.name} />
                </div>
                <div className="speaker-profile-body organizer-profile-body">
                  <h3>{organizer.name}</h3>
                  <p>{organizer.role}</p>
                  <small>{organizer.description}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Patrons Section */}
        <section className="section" id="patrons">
          <h2>Patrons</h2>
          <div className="patron-profile-container">
            <article className="speaker-profile-card patron-profile-card" style={{ maxWidth: 420, margin: '02 auto' }}>
                <div className="speaker-profile-image-wrap organizer-image-wrap" style={{ overflow: 'hidden' }}>
                    <img src={karthiImage} alt="Dr. Karthi M" style={{ objectFit: 'cover', width: '120%', height: '100%', transform: 'scale(1.07)' }} />
              </div>
              <div className="speaker-profile-body organizer-profile-body">
                <h3>Dr. Karthi M</h3>
                <p>Patron</p>
                <small>Head, PEP Cloud Computing & DevOps Centre<br />St. Joseph's Group Of Institutions<br />Event Lead & Patron for Copilot Dev Days Chennai</small>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="student-coordinators">
          <h2>Student Coordinators</h2>
          <div className="student-coordinator-profile-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
            {studentCoordinators.map((coordinator) => (
              <article className="speaker-profile-card student-coordinator-profile-card" key={coordinator.name} style={{ maxWidth: 300, margin: '0 auto' }}>
                <div className="coordinator-image-wrap-centered">
                  <img src={coordinator.image} alt={coordinator.name} />
                </div>
                <div className="organizer-profile-body">
                  <h3>{coordinator.name}</h3>
                  {coordinator.designation && (
                    <div style={{ fontWeight: 600, color: '#fb8500', fontSize: '1.01rem', marginBottom: '0.15rem' }}>{coordinator.designation}</div>
                  )}
                  {/* <p>Student Coordinator</p> */}
                </div>
                <div className="coordinator-linkedin-centered">
                  <a
                    className="coordinator-linkedin-btn"
                    href={coordinator.linkedin || 'https://www.linkedin.com'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${coordinator.name} LinkedIn profile`}
                    title="View LinkedIn profile"
                  >
                    <svg xmlns="https://www.svgrepo.com/svg/452051/linkedin" width="25" height="25" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#09569d"/><path d="M17.25 17.25h-2.25v-3.375c0-.803-.647-1.458-1.444-1.458-.797 0-1.556.655-1.556 1.458V17.25H9.75V10.5h2.25v.75c.33-.48 1.08-.75 1.5-.75 1.38 0 2.25 1.02 2.25 2.25v4.5zM7.875 9.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm1.125 7.5H6.75V10.5h2.25v6.75z" fill="#fff"/></svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        
      </main>

      <section className="bottom-info" aria-label="Contact and location details">
        <div className="bottom-info-grid">
          <article className="bottom-card">
            <div className="bottom-logo-row" aria-label="Community logos">
              <img src={usergroupLogoImage} alt="Microsoft Student Community logo" />
              <img src={pepImage} alt="PEP Cloud Computing and DevOps logo" />
            </div>
            <h3>Contact Us</h3>
            <div className="contact-item">
              <strong>Email</strong>
              <p>cloudclub@stjosephs.ac.in</p>
            </div>
            <div className="contact-item">
              <strong>Phone</strong>
              <p>+91 63740 14661 - Meenachi Sundaresan J</p>
              
            </div>
          </article>

          <article className="bottom-card highlights-card">
            <h3 className="yt-title"><span className="yt-chip">Play</span> YouTube Channel</h3>
            <p className="bottom-note">
              Subscribe to our channel for event highlights, speaker sessions, and Cloud tutorials.
            </p>
            <div className="social-row" aria-label="Social links">
              <a href="https://www.linkedin.com/company/pep-cloud-computing-and-devops-centre/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a>
              {/* <a href="https://www.instagram.com/pepcoulddevopssjgoi" target="_blank" rel="noreferrer" aria-label="Instagram profile">IG</a> */}
              <a href="https://www.youtube.com/@PEPCloudDevOpsSJGOI/" target="_blank" rel="noreferrer" aria-label="YouTube channel">YT</a>
            </div>
            <a className="highlight-card video-card" href="https://www.youtube.com/@PEPCloudDevOpsSJGOI/" target="_blank" rel="noreferrer" aria-label="Watch highlights on YouTube">
              <img src={pepImage} alt="Cloud and DevOps highlights" />
              <span className="video-title">PEP-Cloud Computing Workshop Highlights</span>
            </a>
            <a className="subscribe-btn" href="https://www.youtube.com/@PEPCloudDevOpsSJGOI/" target="_blank" rel="noreferrer">
              Subscribe Now
            </a>
          </article>

          <article className="bottom-card">
            <h3>Event Location</h3>
            <div className="map-wrap">
              <iframe
                title="St. Joseph's Institute of Technology map"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location-meta">
              <p><strong>Event Time:</strong> 8:00 AM - 1:00 PM</p>
              <p><strong>Date:</strong> March 28, 2026</p>
            </div>
            <a className="directions-btn" href={directionsUrl} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </article>
        </div>

        <div className="mini-footer" aria-label="Footer navigation and credits">
          <div className="mini-footer-links">
            <a href="#about" onClick={(event) => handleNavClick(event, 'about')}>About</a>
            <a href="#speakers" onClick={(event) => handleNavClick(event, 'speakers')}>Speakers</a>
            <a href="#schedule" onClick={(event) => handleNavClick(event, 'schedule')}>Schedule</a>
            <a href="#organizers" onClick={(event) => handleNavClick(event, 'organizers')}>Organizers</a>
          </div>
          <p>
            Copyright 2026 GitHub Copilot Dev Days Chennai. Organized by St. Joseph&apos;s Group Of Institutions.
          </p>
          <p className="credit-line">Designed by Meenachi Sundaresan J</p>
        </div>
      </section>
    </div>
  )
}

export default App
