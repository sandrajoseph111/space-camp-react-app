import React from "react";

const Home = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <div className="text-center text-white">
        <h1 className="display-3 fw-bold">🚀 Space Camp Management System</h1>
        <p className="lead fs-4">
          Explore • Learn • Innovate • Reach for the Stars
        </p>
        <button className="btn btn-warning btn-lg mt-3">
          Register Now
        </button>
      </div>

      {/* About Section */}
      <div className="container mt-5">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5">
            <h2 className="text-primary text-center mb-4">
              🌍 About Space Camp
            </h2>

            <p className="fs-5 text-center">
              Space Camp inspires students through exciting activities in
              astronomy, space exploration, robotics, coding, and science
              experiments. Participants work together, solve challenges, and
              experience the thrill of space missions.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mt-5">
        <h2 className="text-center text-warning mb-4">
          ⭐ Our Features
        </h2>

        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="card bg-primary text-white shadow h-100">
              <div className="card-body text-center">
                <h1>👨‍🚀</h1>
                <h5>Participant Registration</h5>
                <p>Register students quickly and securely.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card bg-success text-white shadow h-100">
              <div className="card-body text-center">
                <h1>🛰️</h1>
                <h5>Camp Registration</h5>
                <p>Manage camp batches and schedules.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card bg-danger text-white shadow h-100">
              <div className="card-body text-center">
                <h1>🌌</h1>
                <h5>View Participants</h5>
                <p>Access participant information anytime.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card bg-warning shadow h-100">
              <div className="card-body text-center">
                <h1>🚀</h1>
                <h5>View Registrations</h5>
                <p>Track all camp registrations easily.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-white mt-5">
        <hr className="text-light" />
        <h5>🌟 Dream Big • Explore Space • Build the Future 🌟</h5>
      </div>
    </div>
  );
};

export default Home;