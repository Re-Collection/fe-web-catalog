import { motion } from 'motion/react';
import { catalogSections } from '../data/catalogView';
import { MessengerIcon } from './MessengerIcon';
import { buildMessengerUrlForGenericInquiry } from '../utils/messenger';

export function Footer() {
  const categories = catalogSections.map((section) => section.title);
  const messengerLink = buildMessengerUrlForGenericInquiry(
    'Hola, quiero consultar por los artículos publicados.'
  ).href;

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h4 className="text-white font-medium mb-6">Categorías</h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 rounded-full border border-white/15 text-sm text-gray-300"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                LUXE
              </h2>
              <p className="text-gray-400 text-sm">
                © 2026 LUXE. All rights reserved.
              </p>
            </div>

            <motion.a
              href={messengerLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-fuchsia-600 to-purple-600 p-3 rounded-full shadow-[0_8px_24px_rgba(147,51,234,0.35)] hover:shadow-[0_14px_34px_rgba(147,51,234,0.5)] transition-all"
              aria-label="Messenger"
            >
              <MessengerIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
