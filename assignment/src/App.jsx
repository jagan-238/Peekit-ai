import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="page">

      {/* NAVBAR */}
      <div className="navbar">

        {/* Logo */}
        <div className="logo">
          <div className="logo-circle">
            <div className="logo-dot"></div>
          </div>
          <span>Peekit.ai</span>
        </div>

        {/* Center Menu */}
        <div className="menu">
          <button className="btn-active">🚀 Trends</button>
          <button className="btn">📌 Alerts & Bookmarks</button>
          <button className="btn">📂 My Dashboard</button>
        </div>

        {/* Right Icons */}
        <div className="icons">
          <span>⬇️</span>
          <span>🔔</span>
          <span>👤</span>
        </div>
      </div>

      {/* TOP SEARCH SECTION */}
      <div className="top-section">
        <div className="search-box">
          <button className="search-btn-active">Browse All Trends</button>
          <span className="or-text">OR</span>
          <button className="search-btn">Keyword Search</button>
        </div>

        <h1 className="title">TOP TRENDS TODAY</h1>

        <p className="subtitle">
          See which conversations are heating up, cooling down, or about to take off — 
          with Hot, Cold and Rising Soon topic insights.
        </p>
      </div>

      {/* TRENDS TABLE */}
      <div className="table-wrapper">
        <div className="table">

          {/* Header */}
          <div className="table-row table-header">
            <div>SOURCE</div>
            <div className="hot">🔥 HOT</div>
            <div className="rising">📈 RISING SOON</div>
            <div className="cold">❄️ COLD</div>
          </div>

          {/* Instagram Row */}
          <div className="table-row">
            <div className="source">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" />
              Instagram
            </div>
            <div>Relatable Student Exhaustion Meme →</div>
            <div>HYROX Pro Doubles Functional Fitness Competition →</div>
            <div>Humorous Take on Delayed Friend Text Replies →</div>
          </div>

          {/* TikTok Row */}
          <div className="table-row">
            <div className="source">
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="" />
              Tiktok
            </div>
            <div>Daily Mail viral UK news video →</div>
            <div>steezytour London event viral video →</div>
            <div>ellie.sz0 London trending lifestyle →</div>
          </div>

          {/* X Row */}
          <div className="table-row">
            <div className="source">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="" />
              X
            </div>
            <div>#Chelsea (football trending) →</div>
            <div>#CurrysTechmas (UK retailer tech promotion) →</div>
            <div>#ManchesterUnited (football trending) →</div>
          </div>

          {/* YouTube Row */}
          <div className="table-row">
            <div className="source">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
              Youtube
            </div>
            <div>SIDEMEN VS 50 YOUTUBERS — ULTIMATE HIDE & SEEK →</div>
            <div>Can I Beat An F1 Driver? →</div>
            <div>DIGGA - DPMO (UK drill music) →</div>
          </div>

          {/* Google News Row */}
          <div className="table-row">
            <div className="source">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
              Google News
            </div>
            <div>UK national minimum wage to rise — ITV News →</div>
            <div>Sir Richard Branson 'heartbroken' — wife Joan dies at 80 →</div>
            <div>Heathrow's plan for longer third runway chosen →</div>
          </div>

        </div>
      </div>

    </div>
  );
}

