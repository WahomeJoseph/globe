import type { Route } from "./+types/Home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Global GeoTraveller" },
    { name: "Explore our globe", content: "Welcome to the Global Walker" },
  ];
}

export default function Home() {
  return(
    <div className="bg-bgcolor px-2 py-32 h-screen md:px-0">
      <div className="container items-center max-w-6xl mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                <span className="block xl:inline">Explore the countries with </span>
                <span className="block text-txtcolor xl:inline">
                  Real-Time Data
                </span>
              </h1>
              <p className="mx-auto text-base text-justify text-gray-500 sm:max-w-md lg:text-xl">
                Discover fascinating details about every country! Explore capitals, regions, cultures, and more. Unearth unique traditions, stunning landscapes, and iconic landmarks. Perfect for curious travelers and passionate learners.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link to="/countries" className="flex items-center justify-center px-6 py-3 text-lg text-black bg-bgbtn rounded-md hover:bg-indigo-700">
                  Explore Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link to="/about" className="flex items-center px-6 py-3 shadow-sm shadow-bgbtn text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md shadow-bgbtn">
              <img src="https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D" alt="Explore countries" className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
