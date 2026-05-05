"use client";
import { useRef } from "react";

const activities = [
  {
    title: "Club Inauguration",
    date: "March 2026",
    category: "Ceremony",
    description: "The official launch of Agentic Arc, marking the beginning of our journey into Agentic AI.",
    poster: "/images/activities/innauguration/WhatsApp Image 2026-04-28 at 8.17.15 PM.jpeg",
    gallery: [
      "/images/activities/innauguration/WhatsApp Image 2026-04-28 at 8.17.15 PM.jpeg",
      "/images/activities/innauguration/Screenshot from 2026-05-05 17-37-40.png",
    ],
  },
  {
    title: "Innovator's Arena",
    date: "March 4, 2026",
    category: "Workshop",
    description: "Our first activity involving core agent identification and goal-driven AI design.",
    poster: "/images/activities/innovators-arena/poster.jpeg",
    gallery: [
      "/images/activities/innovators-arena/lab-1.jpg",
      "/images/activities/innovators-arena/lab-2.jpg",
      "/images/activities/innovators-arena/lab-3.jpg",
    ],
  },
  {
    title: "Agents Arrival",
    date: "April 8, 2026",
    category: "Competition",
    description: "Introductory session for 2nd semester students featuring quizzes and AI demos.",
    poster: "/images/activities/agents-arrival/poster.jpeg",
    gallery: [
      "/images/activities/agents-arrival/class-1.jpg",
      "/images/activities/agents-arrival/class-2.jpg",
      "/images/activities/agents-arrival/class-3.jpg",
    ],
  },
];

function ActivityCard({ activity }) {
  const imgRef = useRef(null);

  const handleGalleryClick = (src) => {
    if (imgRef.current) {
      imgRef.current.style.backgroundImage = `url('${src}')`;
    }
  };

  return (
    <div className="activity-card">
      <div
        ref={imgRef}
        className="activity-img"
        style={{ backgroundImage: `url('${activity.poster}')` }}
      >
        <span className="category-badge">{activity.category}</span>
      </div>
      <div className="activity-info">
        <span className="activity-date">{activity.date}</span>
        <h3>{activity.title}</h3>
        <p>{activity.description}</p>
        <div className="activity-gallery">
          {activity.gallery.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt={`${activity.title} photo ${i + 1}`}
              onClick={() => handleGalleryClick(src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Activities() {
  return (
    <section className="activities" id="activities">
      <div className="container">
        <div className="activities-header">
          <h2>What We've <span className="highlight">Done</span></h2>
          <p className="subtitle">Showcasing our journey in exploring the frontiers of Agentic AI through interactive sessions and collaborative projects.</p>
        </div>

        <div className="featured-photo-card">
          <div
            className="featured-photo"
            style={{ backgroundImage: `url('/images/activities/agents-arrival/team-photo.jpg')` }}
          />
          <div className="featured-overlay">
            <span className="badge">TEAM PHOTO</span>
            <h3>The Agentic Arc Family</h3>
          </div>
        </div>

        <div className="activities-grid">
          {activities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
