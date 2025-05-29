function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1985, Bella Vista has been serving exceptional cuisine
              for over three decades. Our passion for fresh, locally-sourced
              ingredients and innovative cooking techniques has made us a
              beloved destination for food enthusiasts.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Led by Chef Marco Antonelli, our team creates memorable dining
              experiences that celebrate the rich traditions of Mediterranean
              cuisine while embracing modern culinary innovation.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">38+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50k+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 aspect-square">
            <img
              src="/assets/images/arseny-togulev-lNip798LiIs-unsplash.jpg"
              height={500}
              width={200}
              alt="Chef in kitchen"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
