import { Link } from 'react-router-dom'
import './Contributors.css'

const contributors = [
  {
    name: 'Ananya Ravi',
    designation: 'Student Ambassador Lead',
    image: 'https://i.pravatar.cc/160?img=32',
    bio: 'Leads the Microsoft Student Ambassador chapter at St. Joseph\'s Group of Institutions, driving campus engagements and developer events.',
  },
  {
    name: 'Rahul K',
    designation: 'Copilot Community Mentor',
    image: 'https://i.pravatar.cc/160?img=12',
    bio: 'Mentors students on AI-assisted development with GitHub Copilot and helps them integrate it into real-world projects.',
  },
  {
    name: 'Priya Nair',
    designation: 'Workshop Instructor',
    image: 'https://i.pravatar.cc/160?img=47',
    bio: 'Designs and delivers hands-on coding workshops focused on developer productivity and modern tooling.',
  },
  {
    name: 'Vikram S',
    designation: 'Campus Program Coordinator',
    image: 'https://i.pravatar.cc/160?img=15',
    bio: 'Coordinates campus-level programs, student registrations, and operational logistics for the event.',
  },
]

export default function Contributors() {
  return (
    <div className="page">
      <nav className="top-nav" aria-label="Main navigation">
        <Link className="top-nav-brand" to="/">Copilot Dev Days</Link>
        <ul className="top-nav-links">
          <li><Link to="/contributors">Contributors</Link></li>
          <li><Link to="/#agenda">Agenda</Link></li>
          <li>
            <a
              className="top-nav-cta"
              href="https://lu.ma/copilot-dev-days-chennai"
              target="_blank"
              rel="noreferrer"
            >
              Reserve Tickets
            </a>
          </li>
        </ul>
      </nav>

      <main className="contrib-main">
        <header className="contrib-header">
          <p className="eyebrow">Copilot Dev Days | Chennai</p>
          <h1>Contributors</h1>
          <p className="subtext">
            Meet the people making Copilot Dev Days Chennai happen at St.&nbsp;Joseph&apos;s
            Institute of Technology on Mar 28.
          </p>
        </header>

        <div className="contrib-grid">
          {contributors.map((c) => (
            <article key={c.name} className="contrib-card">
              <img src={c.image} alt={c.name} />
              <div className="contrib-info">
                <h2>{c.name}</h2>
                <span className="contrib-role">{c.designation}</span>
                <p>{c.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="contrib-back">
          <Link to="/">← Back to Event</Link>
        </div>
      </main>
    </div>
  )
}
