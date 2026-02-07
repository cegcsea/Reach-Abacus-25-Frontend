import React from "react";

const ComingSoonRobot = () => {
  return (
    <div style={styles.container}>
      {/* Injecting keyframes & Responsive Media Queries */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes blink {
            0%, 90%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.1); }
          }
          @keyframes glow {
            0% { opacity: 0.6; filter: drop-shadow(0 0 2px #aa8c2c); }
            50% { opacity: 1; filter: drop-shadow(0 0 8px #ffd700); }
            100% { opacity: 0.6; filter: drop-shadow(0 0 2px #aa8c2c); }
          }
          @keyframes antenna-wiggle {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }

          .coming-soon-text {
            font-size: 3rem;
          }
          
          @media (max-width: 768px) {
            .coming-soon-text {
              font-size: 2rem; 
            }
          }
        `}
      </style>

      {/* Robot Wrapper with Float Animation */}
      <div style={styles.robotWrapper}>
        <svg
          width="180"
          height="180"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow */}
          <ellipse
            cx="100"
            cy="190"
            rx="60"
            ry="10"
            fill="#000000"
            opacity="0.4"
          />

          {/* Antenna */}
          <g
            style={{
              transformOrigin: "100px 60px",
              animation: "antenna-wiggle 3s ease-in-out infinite",
            }}
          >
            <line
              x1="100"
              y1="60"
              x2="100"
              y2="30"
              stroke="#c0a068"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle
              cx="100"
              cy="25"
              r="8"
              fill="#ffd700"
              style={{ animation: "glow 2s ease-in-out infinite" }}
            />
          </g>

          {/* Body - Dark Fill with Gold Outline */}
          <rect
            x="50"
            y="60"
            width="100"
            height="120"
            rx="20"
            fill="#1a1a1a"
            stroke="#c0a068"
            strokeWidth="3"
          />

          {/* Screen/Face */}
          <rect x="65" y="80" width="70" height="50" rx="10" fill="#0d0d0d" />

          {/* Eyes Group */}
          <g
            style={{
              transformOrigin: "center",
              animation: "blink 4s infinite",
            }}
          >
            <circle cx="85" cy="105" r="8" fill="#ffd700" />
            <circle cx="115" cy="105" r="8" fill="#ffd700" />
          </g>

          {/* Mouth */}
          <path
            d="M 90 120 Q 100 125 110 120"
            stroke="#ffd700"
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Left Arm & Hand */}
          <g>
            <path
              d="M 50 100 Q 15 125 45 145"
              stroke="#c0a068" // The Gold Outline
              strokeWidth="16" // Slightly wider than the inner fill
              strokeLinecap="round"
              fill="transparent"
            />
            <path
              d="M 50 100 Q 15 125 45 145"
              stroke="#262626" // The Inner Onyx Fill
              strokeWidth="10"
              strokeLinecap="round"
              fill="transparent"
            />
            <circle cx="45" cy="145" r="6" fill="#c0a068" />
          </g>

          {/* Right Arm & Hand */}
          <g>
            <path
              d="M 150 100 Q 185 125 155 145"
              stroke="#c0a068" // The Gold Outline
              strokeWidth="16" // Slightly wider than the inner fill
              strokeLinecap="round"
              fill="transparent"
            />
            <path
              d="M 150 100 Q 185 125 155 145"
              stroke="#262626" // The Inner Onyx Fill
              strokeWidth="10"
              strokeLinecap="round"
              fill="transparent"
            />
            <circle cx="155" cy="145" r="6" fill="#c0a068" />
          </g>

          {/* Details/Buttons */}
          <circle cx="80" cy="155" r="5" fill="#aa8c2c" />
          <circle cx="100" cy="155" r="5" fill="#ffd700" />
          <circle cx="120" cy="155" r="5" fill="#aa8c2c" />
        </svg>
      </div>

      <div style={styles.textContainer}>
        <h2 style={styles.heading} className="coming-soon-text">
          Coming Soon...
        </h2>
        <p style={styles.subtext}>
          Get ready... this space is getting exciting with hands-on learning.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    padding: "20px",
    background: "transparent",
  },
  robotWrapper: {
    animation: "float 6s ease-in-out infinite",
    marginBottom: "20px",
  },
  textContainer: {
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    color: "#fcfcfc",
    marginBottom: "28px",
    textShadow: "2px 2px 10px rgba(170, 140, 44, 0.8)",
    display: "block",
    lineHeight: "1.2",
    paddingBottom: "5px",
  },
  subtext: {
    fontSize: "1.1rem",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "30px",
    lineHeight: "1.5",
  },
};

export default ComingSoonRobot;
