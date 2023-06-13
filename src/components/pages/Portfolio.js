import React from 'react';
import projects from "../../projects.json"

export default function Portfolio() {
   return projects.map((proj) => (
      <div key={proj.name} className='card'>
        <img src={proj.image}></img>
        <h2>
          {proj.name}
        </h2>
        <p>{proj.description}</p>
        <div className='links'>
          <button>
            <a href={proj.github}>Github</a>
          </button>
          <button>
              <a href={proj.live}>Live</a>
          </button>
        </div>
      </div>
   ))
}
