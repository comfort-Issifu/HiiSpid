import Footer from "../components/Footer";
import Header from "../components/Header";

function Terms() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our website and services, you accept and
                agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Reservations and Orders
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Reservations are subject to availability</li>
                <li>
                  We reserve the right to cancel reservations for any reason
                </li>
                <li>
                  Online orders are subject to our delivery area and hours
                </li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-700 mb-4">
                Payment is required at the time of order placement. We accept
                major credit cards and cash for pickup orders.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cancellation Policy
              </h2>
              <p className="text-gray-700 mb-4">
                Reservations can be cancelled up to 2 hours before the scheduled
                time. Online orders can be cancelled within 5 minutes of
                placement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, contact us at
                legal@hiispidlounge or (+233) 504-9336.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Terms;
