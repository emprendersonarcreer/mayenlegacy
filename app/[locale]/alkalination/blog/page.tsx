import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "../../../../i18n/navigation";
import Navbar from "../../../components/Navbar";
import { client } from "../../../../lib/sanity.client";
import { postsByBrandQuery } from "../../../../lib/sanity.queries";
import { urlFor } from "../../../../lib/sanity.image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AlkalinationBlog" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  tags: string[];
  mainImage: { asset: { url: string }; alt: string } | null;
};

export default async function AlkalinationBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AlkalinationBlog" });

  const posts: Post[] = await client.fetch(postsByBrandQuery, {
    brand: "alkalination",
    language: locale,
  });

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-[#4A90E2] tracking-[0.4em] text-xs mb-4">
          {t("hero.tagline")}
        </p>
        <div className="w-12 h-[1px] bg-[#4A90E2] mx-auto mb-6" />
        <h1 className="font-serif text-4xl sm:text-6xl text-[#2C4A7C] tracking-widest mb-4">
          {t("hero.title")}
        </h1>
        <div className="w-12 h-[1px] bg-[#4A90E2] mx-auto mt-6" />
        <p className="text-gray-500 text-sm tracking-wide mt-6 max-w-xl mx-auto">
          {t("hero.description")}
        </p>
      </section>

      {/* POSTS */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#4A90E2] tracking-[0.3em] text-sm mb-3">
              {t("empty.label")}
            </p>
            <p className="font-serif text-2xl text-[#2C4A7C] mb-4">
              {t("empty.title")}
            </p>
            <p className="text-gray-500">{t("empty.description")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/alkalination/blog/${post.slug.current}`}
                className="group bg-white border border-[#EADCC6] hover:border-[#4A90E2] transition-colors"
              >
                {post.mainImage?.asset?.url && (
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-widest text-[#4A90E2] border border-[#EADCC6] px-2 py-0.5"
                        >
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="font-serif text-xl text-[#2C4A7C] mb-2 group-hover:text-[#4A90E2] transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <p className="text-[#4A90E2] text-xs tracking-widest mt-4">
                    {t("readMore")} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#FAF7F2] border-t border-[#EADCC6] mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            href="/alkalination"
            className="text-[#4A90E2] text-sm tracking-wider hover:text-[#9A7B0A] transition-colors"
          >
            {t("footer.backToAlkalination")}
          </Link>
          <p className="font-serif text-[#4A90E2] tracking-widest mt-6 mb-1">
            ALKALINATION USA
          </p>
          <p className="text-gray-400 text-xs mt-2">{t("footer.rights")}</p>
        </div>
      </footer>
    </main>
  );
}
