import { useState, useEffect } from 'react'
import './App.css'
import devDaysImage from './assets/dev-days.png'
import usergroupLogoImage from './assets/usergroup_logo.png'

function useCountdown(targetISO) {
  const target = new Date(targetISO).getTime()
  const calc = () => {
    const diff = Math.max(0, target - Date.now())
    return {
      days:    String(Math.floor(diff / 86400000)).padStart(2, '0'),
      hours:   String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function App() {
  const lumaEventUrl = 'https://lu.ma/copilot-dev-days-chennai'
  const githubLogoUrl = 'https://github.githubassets.com/favicons/favicon.svg'
  // Mar 28 2026 08:00 IST = UTC+5:30 → 02:30 UTC
  const countdown = useCountdown('2026-03-28T02:30:00Z')
  const speakers = [
    {
      name: 'Ananya Ravi',
      designation: 'Student Ambassador Lead',
      company: 'GitHub Campus Community',
      image: 'https://i.pravatar.cc/120?img=32',
      session: 'Opening Session',
      time: '09:00 AM',
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
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'GitHub Student Community Team',
      role: 'Community Partner',
      description: 'Supporting speaker sessions, mentorship, and the developer learning experience.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Chennai Developer Community',
      role: 'Community Partner',
      description: 'Connecting local student builders and developer groups with event collaboration support.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    },
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
          <li><a className="top-nav-cta" href={lumaEventUrl} target="_blank" rel="noreferrer">Reserve Tickets</a></li>
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
          <span>Max 300 Attendees</span>
        </div>
        <a className="cta" href={lumaEventUrl} target="_blank" rel="noreferrer">
          Reserve Tickets
        </a>

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
          {speakers.slice(0, 3).map((speaker) => (
            <article className="speaker-profile-card" key={speaker.name}>
              <div className="speaker-profile-image-wrap">
                {speaker.keynote && <span className="speaker-badge">Keynote Speaker</span>}
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <div className="speaker-profile-body">
                <h3>{speaker.name}</h3>
                <p>{speaker.company}</p>
                <small>{speaker.designation}</small>
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
                Students, with a maximum attendee capacity of 300 participants.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="schedule">
          <h2>Event Agenda &amp; Speakers</h2>

          {/* Fixed slots without a speaker */}
          <div className="agenda-fixed">
            <div className="agenda-fixed-item">
              <span className="time">08:00 AM</span>
              <div>
                <strong>Registration &amp; Check-In</strong>
                <p>Collect your badge and meet fellow attendees.</p>
              </div>
            </div>
          </div>

          {/* Speaker sessions */}
          <div className="agenda-sessions">
            {speakers.map((s) => (
              <article key={s.name} className="agenda-card">
                <div className="agenda-time-col">
                  <span className="time">{s.time}</span>
                </div>
                <div className="agenda-session-col">
                  <strong className="agenda-session-title">{s.session}</strong>
                </div>
                <div className="agenda-speaker-col">
                  <img src={s.image} alt={s.name} />
                  <div>
                    <strong>{s.name}</strong>
                    <small>{s.designation}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="registration">
          <div className="register">
            <h2>Ready for Copilot Dev Days Chennai?</h2>
            <p>
              Seats are limited. Join us on Mar 28 at St. Joseph&apos;s Institute of
              Technology from 8:00 AM to 1:00 PM.
            </p>
            <p>
              Registration is free. Reserve your ticket before Mar 26.
            </p>
            <button type="button" onClick={() => window.open(lumaEventUrl, '_blank', 'noreferrer')}>
              Reserve Tickets
            </button>
          </div>
        </section>

        <section className="section" id="organizers">
          <h2>Organizers</h2>
          <div className="organizer-profile-grid">
            {organizers.map((organizer) => (
              <article key={organizer.name} className="speaker-profile-card organizer-profile-card">
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
      </main>
    </div>
  )
}

export default App
