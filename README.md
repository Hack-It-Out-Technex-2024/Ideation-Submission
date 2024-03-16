# IIITN Devs Ideation:
https://drive.google.com/drive/folders/1oiRw6HRIz7PwmV43QSbNhKjgvhNDy5gd?usp=sharing

# Goal 3: Smart City Solution: NavNation

## Introduction
NavNation is an innovative web application aimed at revolutionizing urban navigation and addressing key challenges faced in modern smart cities. By integrating advanced technologies and user-centric features, NavNation offers solutions to optimize commuting, parking, and traffic management, thereby enhancing overall urban mobility.

## Solutions Offered
1. *Intelligent Route Optimization*: NavNation employs cutting-edge algorithms to analyze real-time traffic data and provide users with optimized routes to their destinations. By considering factors such as road blockages, congestion, and construction, NavNation ensures efficient and time-saving navigation.

2. *Parking Space Management*: With NavNation, users can easily locate available parking spaces in their vicinity. The application allows individuals to reserve parking spots in advance, reducing the hassle of searching for parking and minimizing traffic congestion caused by circling for spots.

3. *Safety and Speed Monitoring*: NavNation promotes safer driving practices by monitoring vehicle speed and providing alerts to drivers who exceed speed limits. Additionally, the application facilitates data collection on traffic violations, aiding law enforcement agencies in enforcing road safety regulations.

## Technologies Used
- *Frontend*: HTML, CSS, JavaScript
- *Backend*: Node.js, Express.js
- *Database*: MongoDB
- *Mapping and Routing*: Google Maps API
- *Image Processing*: OpenCV
- *Authentication and Authorization*: Google Oauth 2.0

## Installation
1. Clone the repository:
   bash
   git clone https://github.com/
   
2. Install dependencies:
   bash
   cd navnation
   npm install
   
3. Set up environment variables:
   - Create a .env file in the root directory.
   - Define the following variables:
     
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/navnation
     JWT_SECRET=your_secret_key
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     
4. Run the application:
   bash
   node index.js
   

## Usage
- Access NavNation through your web browser at http://localhost:3000.
- Explore the features to:
  - Receive optimized routes based on real-time traffic conditions.
  - Reserve parking spaces in advance to streamline your commute.
  - Enhance road safety with speed monitoring and alerts.

## Contributors
- Debdip Mukherjee
- Akshat Gupta
- Danish Ahmad
- Shubh Samaiya

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- The NavNation team extends gratitude to the IIT BHU hackathon organizers for fostering innovation in smart city solutions.
- Special appreciation to mentors and collaborators for their valuable contributions.
- Credits to the developers of libraries and APIs utilized in NavNation's development.

![Home](./public/images/readme%20images/home.png)

![Our Solutions](./public/images/readme%20images/solutions.png)

![Our Story](./public/images/readme%20images/ourstory.png)

![Solution 1](./public/images/readme%20images/solution1.png)
