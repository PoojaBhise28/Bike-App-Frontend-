import React from 'react';
import"../Style/HomeStyle.css";
import CoastalRouteImage from "../images/CoastalRoute.jpeg";
import UrbanStreetImage from "../images/urbanStreet.jpeg";
import MountainTrailsImage from "../images/MountainTrains.jpeg";
import MountainImage from "../images/mountain.jpeg";
import RoadBikeImage from "../images/roadBike.jpeg";
import HybridBikeImage from "../images/hybridbike.jpeg";
import hybrid from "../images/hybrid.jpeg"

export default function HomeComponent() {
  // Placeholder data for bikes
  const bikes = [
    { name: 'Mountain Bike', description: 'A sturdy bike built for off-road adventures.', image: MountainImage },
    { name: 'Road Bike', description: 'Designed for speed and efficiency on paved roads.', image: RoadBikeImage },
    { name: 'Hybrid Bike', description: 'Combines features of road and mountain bikes, suitable for various terrains.', image: hybrid },
    // Add more bikes as needed
  ];

  // Placeholder data for random locations
  const locations = [
    { name: 'Mountain Trails', description: 'Explore scenic mountain trails with breathtaking views.', image: MountainTrailsImage },
    { name: 'Coastal Route', description: 'Enjoy a ride along the picturesque coastline with refreshing sea breeze.', image: CoastalRouteImage },
    { name: 'Urban Streets', description: 'Navigate through city streets and discover urban landmarks.', image: UrbanStreetImage },
    // Add more locations as needed
  ];

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Your Bike App</h1>
        <p>Find the perfect ride for your adventures!</p>
      </header>
      <main>
        <section className="featured-bikes">
          <h2>Featured Bikes</h2>
          {bikes.map((bike, index) => (
            <div className="bike-card" key={index}>
              <img src={bike.image} alt={bike.name} />
              <h3>{bike.name}</h3>
              <p>{bike.description}</p>
               
            </div>
          ))}
        </section>
        <section className="popular-locations">
          <h2>Popular Locations</h2>
          {locations.map((location, index) => (
            <div className="location-card" key={index}>
              <img src={location.image} alt={location.name} />
              <h3>{location.name}</h3>
              <p>{location.description}</p>
             
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Bike App</p>
      </footer>
    </div>
  );
}
