function PageHeader({ title, description }) {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title} </h1>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default PageHeader;
