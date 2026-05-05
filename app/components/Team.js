const faculty = [
  { name: "Mrs. Soumya L N", role: "Faculty Coordinator", photo: "/images/team/soumya.jpg" },
  { name: "Mrs. Nazia Nusrath Ul Ain", role: "Faculty Coordinator", photo: "/images/team/nazia.jpg" },
];

const students = [
  { name: "Sachin Duhan", role: "President", photo: "/images/team/sachin.png" },
  { name: "Ramyashree B L", role: "Vice President", photo: "/images/team/namratha.png" },
  { name: "Namratha M S", role: "Secretary", photo: "/images/team/ramyashree.png" },
  { name: "Vachan Gowda V", role: "Treasurer", photo: "/images/team/vachan.png" },
  { name: "Gharshith Reddy R", role: "Social Media Manager", photo: "/images/team/gharshith.png" },
];

function MemberCard({ member }) {
  return (
    <div className="member-card">
      <div
        className="member-photo"
        style={{ backgroundImage: `url('${member.photo}')` }}
      />
      <h3>{member.name}</h3>
      <p className="member-role">{member.role}</p>
    </div>
  );
}

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <h2>Faculty Coordinators</h2>
        <div className="faculty-grid">
          {faculty.map((m, i) => (
            <MemberCard key={i} member={m} />
          ))}
        </div>

        <h2>Founding Team</h2>
        <div className="student-grid">
          {students.map((m, i) => (
            <MemberCard key={i} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
