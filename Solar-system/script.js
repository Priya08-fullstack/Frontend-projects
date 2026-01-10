
  const planetData = {
    sun: {
    name: "Sun",
    distance: "Center of Solar System",
    day: "25–35 Earth days",
    temp: "5,500°C (surface)"
    },
    mercury: {
      name: "Mercury",
      distance: "57.9 million km",
      day: "58.6 Earth days",
      temp: "−173°C to 427°C"
    },
    venus: {
      name: "Venus",
      distance: "108.2 million km",
      day: "243 Earth days",
      temp: "462°C"
    },
    earth: {
      name: "Earth",
      distance: "149.6 million km",
      day: "24 hours",
      temp: "15°C"
    },
    mars: {
      name: "Mars",
      distance: "227.9 million km",
      day: "24.6 hours",
      temp: "−63°C"
    },
    jupiter: {
      name: "Jupiter",
      distance: "778.5 million km",
      day: "9.9 hours",
      temp: "−145°C"
    },
    saturn: {
      name: "Saturn",
      distance: "1.43 billion km",
      day: "10.7 hours",
      temp: "−178°C"
    },
    uranus: {
      name: "Uranus",
      distance: "2.87 billion km",
      day: "17.2 hours",
      temp: "−224°C"
    },
    neptune: {
      name: "Neptune",
      distance: "4.5 billion km",
      day: "16.1 hours",
      temp: "−214°C"
    }
  };

  const tooltip = document.getElementById("planet-info");

  document.querySelectorAll(".planet").forEach(planet => {
    planet.addEventListener("mouseenter", e => {
      const data = planetData[planet.id];
      tooltip.innerHTML = `
        <strong>${data.name}</strong><br>
        🌍 Distance: ${data.distance}<br>
        🕒 Day: ${data.day}<br>
        🌡 Temp: ${data.temp}
      `;
      tooltip.style.display = "block";
    });

    planet.addEventListener("mousemove", e => {
      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY + 15 + "px";
    });

    planet.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });

