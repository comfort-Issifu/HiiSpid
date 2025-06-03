import { NavLink } from "react-router-dom";
import { Button } from "./Button";

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-900/90 to-amber-800/90">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/public/assets/images/mustafa-fatemi-ociRWDCmDRU-unsplash.jpg?height=1080&width=1920')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">HiiSpid Lounge </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Experience culinary excellence in the heart of the city
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            <NavLink href="/menu">View Menu</NavLink>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-amber-900"
          >
            <NavLink href="/order">Order Online</NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
