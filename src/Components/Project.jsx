export default function Projects() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'grid', gap: '15px' }}>
        <div>
          <h3>Project 1: Portfolio Website</h3>
          <p>A responsive React web app to showcase my skills and work.</p>
        </div>
        <div>
          <h3>Project 2: Task Tracker</h3>
          <p>An application to manage daily tasks built using React state hooks.</p>
        </div>
      </div>
    </div>
  );
}