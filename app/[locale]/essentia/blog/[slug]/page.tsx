import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { Link } from "../../../../../i18n/navigation";
import Navbar from "../../../../components/Navbar";
import { client } from "../../../../../lib/sanity.client";
import { postBySlugQuery, slugsByBrandQuery } from "../../../../../lib/sanity.queries";
import { urlFor } from "../../../../../lib/sanity.image";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  tags: string[];
  language: string;
  mainImage: { asset: { url: string }; alt: string } | null;
  body: PortableTextBlock[];
};

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: { current: string }; language: string }[]>(
    slugsByBrandQuery,
    { brand: "essentia" }
  );
  return slugs.map(({ slug, language }) => ({
    locale: language,
    slug: slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await client.fetch<Post>(postBySlugQuery, {
    slug,
    brand: "essentia",
  });
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage?.asset?.url
        ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }]
        : [],
      locale: locale === "es" ? "es_US" : "en_US",
    },
  };
}

export const revalidate = 60;

export default async function EssentiaBlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "EssentiaBlog" });

  const post = await client.fetch<Post>(postBySlugQuery, {
    slug,
    brand: "essentia",
  });

  if (!post) notFound();

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        locale === "es" ? "es-US" : "en-US",
        { year: "numeric", month: "long", day: "numeric" }
      )
    : null;

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      <article className="pt-36 pb-20 px-6 max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 tracking-widest mb-10">
          <Link
            href="/essentia/blog"
            className="hover:text-[#9A7B0A] transition-colors"
          >
            BLOG
          </Link>
          <span>›</span>
          <span className="text-[#9A7B0A] truncate">{post.title.toUpperCase()}</span>
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-widest text-[#9A7B0A] border border-[#EADCC6] px-2 py-0.5"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl text-[#2C4A7C] leading-tight mb-4">
          {post.title}
        </h1>

        {/* Date */}
        {publishedDate && (
          <p className="text-gray-400 text-xs tracking-widest mb-10">{publishedDate}</p>
        )}

        {/* Main image */}
        {post.mainImage?.asset?.url && (
          <div className="relative w-full h-72 mb-10 overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(800).height(500).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Divider */}
        <div className="w-12 h-[1px] bg-[#9A7B0A] mb-10" />

        {/* Body */}
        {post.body && (
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:font-serif prose-headings:text-[#2C4A7C] prose-a:text-[#4A90E2] prose-blockquote:border-l-[#9A7B0A] prose-blockquote:text-[#2C4A7C] prose-blockquote:italic">
            <PortableText value={post.body} />
          </div>
        )}

        {/* Back */}
        <div className="mt-16 pt-8 border-t border-[#EADCC6]">
          <Link
            href="/essentia/blog"
            className="text-[#4A90E2] text-sm tracking-widest hover:text-[#9A7B0A] transition-colors"
          >
            ← {t("backToBlog")}
          </Link>
        </div>
      </article>

      <footer className="py-10 bg-[#FAF7F2] border-t border-[#EADCC6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-serif text-[#4A90E2] tracking-widest mb-1">
            NASHELI MAYÉN
          </p>
          <p className="text-gray-400 text-xs mt-2">{t("footer.rights")}</p>
        </div>
      </footer>
    </main>
  );
}
