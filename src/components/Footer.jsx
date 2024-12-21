import { Facebook, Instagram, Twitter,  } from 'lucide-react';

 function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white">Products</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/THEROYELBENCHER" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/soulmate_miland?igsh=MXVtOGVqdG9rY280Yg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a> */}
             
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <p className="text-gray-400">
              No. 1 Garuajhar, Udalguri, Assam
            </p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on new products and offers.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-gray-900 rounded w-full"
            />
            <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Soulmate Exclusive Footwear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;