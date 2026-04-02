import { motion } from 'motion/react';
import type { MouseEventHandler } from 'react';
import { MessengerIcon } from './MessengerIcon';
import { cn } from './ui/utils';

interface MessengerButtonProps {
  href: string;
  label: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function MessengerButton({ href, label, className, onClick }: MessengerButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white',
        'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600',
        'shadow-[0_8px_24px_rgba(147,51,234,0.35)]',
        'hover:shadow-[0_16px_38px_rgba(147,51,234,0.55)] hover:brightness-110 transition-all duration-300 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        className
      )}
    >
      <MessengerIcon className="w-5 h-5" />
      <span>{label}</span>
    </motion.a>
  );
}