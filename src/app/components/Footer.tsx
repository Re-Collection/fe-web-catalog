import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Shop: ['Clothing', 'Tech', 'Accessories', 'Lifestyle', 'New Arrivals'],
    Company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Partnerships'],
    Support: ['Contact', 'FAQs', 'Shipping', 'Returns', 'Size Guide'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay in the Loop
          </h3>
          <p className="text-gray-400 mb-6">
            Subscribe to get special offers, free giveaways, and updates
          </p>

          <div className="max-w-md mx-auto flex gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-medium mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                LUXE
              </h2>
              <p className="text-gray-400 text-sm">
                © 2026 LUXE. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex gap-2">
                {['VISA', 'MC', 'AMEX', 'PP'].map((method) => (
                  <div
                    key={method}
                    className="bg-white/10 px-3 py-1.5 rounded text-xs font-medium text-gray-300"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
