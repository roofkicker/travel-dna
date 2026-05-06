import { type Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  variant?: "main" | "sub";
  href?: string;
}

export default function ProductCard({
  product,
  variant = "sub",
  href,
}: ProductCardProps) {
  const isMain = variant === "main";
  const isOpen = product.isOpen;

  if (isMain) {
    return (
      <a
        href={href ?? product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl border-2 border-brand-green bg-white shadow-md transition active:scale-[0.99]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream-dark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <span className="inline-block rounded-full bg-brand-green px-2.5 py-1 text-xs font-bold text-brand-cream shadow-sm">
              추천
            </span>
            {!isOpen && (
              <span className="inline-block rounded-full bg-brand-mint px-2.5 py-1 text-xs font-bold text-brand-black shadow-sm">
                곧 오픈
              </span>
            )}
          </div>
        </div>
        <div className="p-5">
          <h3 className="mb-1 text-lg font-bold leading-snug text-brand-green">
            {product.title}
          </h3>
          <p className="mb-2 text-sm text-brand-gray">
            {product.subtitle}
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-brand-gray-light">
            <span>📍 {product.region}</span>
            <span>⏱ {product.duration}</span>
            <span>· {product.difficulty}</span>
          </div>
          <p className="mt-3 rounded-xl bg-brand-cream p-3 text-sm leading-relaxed text-brand-black">
            💡 {product.highlight}
          </p>
        </div>
      </a>
    );
  }

  return (
    <a
      href={href ?? product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 overflow-hidden rounded-2xl border-2 border-brand-cream-dark bg-white p-3 transition active:scale-[0.99]"
    >
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-brand-cream-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-0.5 truncate text-base font-bold leading-snug text-brand-green">
          {product.title}
        </h3>
        <p className="mb-1 truncate text-sm text-brand-gray">
          {product.subtitle}
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-xs text-brand-gray-light">
          <span>📍 {product.region}</span>
          <span>⏱ {product.duration}</span>
        </div>
      </div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="flex-shrink-0 text-brand-gray-light"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
