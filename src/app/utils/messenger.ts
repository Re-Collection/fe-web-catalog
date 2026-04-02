import { DOMAIN, FACEBOOK_PROFILE_URL } from '../config/site';

export interface MessengerProductContext {
  title: string;
  slug: string;
}

const normalizeDomain = (domain: string) => domain.replace(/\/+$/, '');
const isPlaceholderDomain = (domain: string) => /tudominio\.com$/i.test(domain);
const runtimeOriginWithBase = () => {
  if (typeof window === 'undefined') return '';
  const origin = window.location.origin.replace(/\/+$/, '');
  const basePath = import.meta.env.BASE_URL.replace(/^\/+|\/+$/g, '');
  return basePath ? `${origin}/${basePath}` : origin;
};
const normalizeFacebookProfileTarget = (profileUrl: string) =>
  profileUrl
    .replace(/^https?:\/\/(www\.)?facebook\.com\//i, '')
    .replace(/\?.*$/, '')
    .replace(/\/+$/, '');

export const buildProductUrl = (slug: string) => {
  const configuredDomain = normalizeDomain(DOMAIN);
  const baseDomain = isPlaceholderDomain(configuredDomain)
    ? runtimeOriginWithBase() || configuredDomain
    : configuredDomain;

  return `${baseDomain}/producto/${slug}`;
};

export const buildMessengerMessage = (title: string, productUrl: string) =>
  `Hola, estoy interesado en "${title}", ¿sigue disponible?\n\n${productUrl}`;

export const buildMessengerConversationUrl = (message: string) => {
  const profileTarget = normalizeFacebookProfileTarget(FACEBOOK_PROFILE_URL);
  return `https://m.me/${profileTarget}?text=${encodeURIComponent(message)}`;
};

export const buildMessengerUrlForProduct = ({ title, slug }: MessengerProductContext) => {
  const productUrl = buildProductUrl(slug);
  const message = buildMessengerMessage(title, productUrl);

  return {
    productUrl,
    message,
    href: buildMessengerConversationUrl(message),
  };
};

export const buildMessengerUrlForGenericInquiry = (message: string) => ({
  href: buildMessengerConversationUrl(message),
  profileUrl: FACEBOOK_PROFILE_URL,
});