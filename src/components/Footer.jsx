import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              HiiSpid Lounge
            </h3>
            <p className="text-gray-300 mb-4">
              Experience culinary excellence in the heart of the city. Serving
              exceptional cuisine since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/menu"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/order"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Order Online
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="/feedback"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-gray-300 text-sm">
                  24 A-line Avenue Street
                  <br />
                  Accra
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-gray-300 text-sm">(+233) 504-9336</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-400" />
                <span className="text-gray-300 text-sm">
                  info@hiispidlounge
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Mon-Thu</span>
                <span className="text-gray-300">5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Fri-Sat</span>
                <span className="text-gray-300">5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Sunday</span>
                <span className="text-gray-300">4:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 HiiSpid Lounge Restaurant. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Terms of Service
              </Link>
              <a
                href="/accessibility"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
