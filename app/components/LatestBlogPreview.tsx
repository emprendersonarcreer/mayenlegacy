import { getLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "../../i18n/navigation";
import { client } from "../../lib/sanity.client";
import { latestPostsByBrandQuery } from "../../lib/sanity.queries";
import { urlFor } from "../../lib/sanity.image";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  tags: string[];
  mainImage: { asset: { url: string }; alt: string } | null;
};

type Props = {
  brand: "essentia" | "alkalination";
};

const config = {
  essentia: {
    accent: "#9A7B0A",
    accentClass: "text-[#9A7B0A]",
    borderClass: "border-[#EADCC6]",
    hoverBorderClass: "hover:border-[#9A7B0A]",
    hoverTitleClass: "group-hover:text-[#9A7B0A]",
    ctaClass: "text-[#9A7B0A] hover:text-[#2C4A7C]",
    dividerClass: "bg-[#9A7B0A]",
    titleClass: "text-[#2C4A7C]",
    labelES: "ÚLTIMAS DEL BLOG",
    labelEN: "LATEST FROM THE BLOG",
    titleES: "Del Blog ESSENTIA",
    titleEN: "From ESSENTIA Blog",
    ctaES: "VER TODOS LOS ARTÍCULOS →",
    ctaEN: "SEE ALL ARTICLES →",
    blogPath: "/essentia/blog" as const,
    postPath: "/essentia/blog/" as const,
  },
  alkalination: {
    accent: "#4A90E2",
    accentClass: "text-[#4A90E2]",
    borderClass: "border-[#D0E8F5]",
    hoverBorderClass: "hover:border-[#4A90E2]",
    hoverTitleClass: "group-hover:text-[#4A90E2]",
    ctaClass: "text-[#4A90E2] hover:text-[#1A3A5C]",
    dividerClass: "bg-[#4A90E2]",
    titleClass: "text-[#1A3A5C]",
    labelES: "ÚLTIMAS DEL BLOG",
    labelEN: "LATEST FROM THE BLOG",
    titleES: "Del Blog AlkaliNation",
    titleEN: "From AlkaliNation Blog",
    ctaES: "VER TODOS LOS ARTÍCULOS →",
    ctaEN: "SEE ALL ARTICLES →",
    blogPath: "/alkalination/blog" as const,
    postPath: "/alkalination/blog/" as const,
  },
};

export default async function LatestBlogPreview({ brand }: Props) {
  const locale = await getLocale();
  const cfg = config[brand];

  const posts = await client.fetch<Post[]>(latestPostsByBrandQuery, {
    brand,
    language: locale,
  });

  // Don't render section if no posts yet
  if (!posts || posts.length === 0) return null;

  const isES = locale === "es";
  const label = isES ? cfg.labelES : cfg.labelEN;
  const title = isES ? cfg.titleES : cfg.titleEN;
  const cta = isES ? cfg.ctaES : cfg.ctaEN;

  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className={`${cfg.accentClass} tracking-[0.35em] text-xs mb-3`}>
            {label}
          </p>
          <h2 className={`font-serif text-3xl ${cfg.titleClass}`}>{title}</h2>
          <div className={`w-10 h-[1px] ${cfg.dividerClass} mx-auto mt-4`} />
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`${cfg.postPath}${post.slug.current}`}
              className={`group bg-[#FAF7F2] border ${cfg.borderClass} ${cfg.hoverBorderClass} transition-colors`}
            >
              {post.mainImage?.asset?.url && (
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).width(400).height(280).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5">
                {post.tags?.length > 0 && (
                  <p className={`${cfg.accentClass} text-[10px] tracking-widest mb-2`}>
                    {post.tags[0].toUpperCase()}
                  </p>
                )}
                <h3
                  className={`font-serif text-base ${cfg.titleClass} leading-snug mb-2 ${cfg.hoverTitleClass} transition-colors`}
                >
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href={cfg.blogPath}
            className={`${cfg.ctaClass} text-xs tracking-[0.25em] transition-colors`}
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
