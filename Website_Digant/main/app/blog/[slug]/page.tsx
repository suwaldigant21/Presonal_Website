import { getBlogPostById } from "@/lib/content-loader"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostById(params.slug)

  if (!post) {
    notFound()
  }

  const socialLinks = [
    {
      platform: "twitter",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://digantsuwal.com/blog/${post.id}`)}`,
    },
    {
      platform: "linkedin",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://digantsuwal.com/blog/${post.id}`)}`,
    },
    {
      platform: "email",
      url: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://digantsuwal.com/blog/${post.id}`)}`,
    },
  ]

  return (
    <main className="min-h-screen bg-[color:var(--background)] pt-24 pb-16 px-4 md:px-8 transition-colors">
      <div className="max-w-3xl mx-auto bg-[color:var(--card-bg)] rounded-lg shadow-lg p-6 md:p-10 animate-fadeIn">
        <Link href="/#blog" className="inline-flex items-center text-[color:var(--card-fg)] hover:underline mb-6 group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          Back to all posts
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--card-fg)] animate-fadeInUp">
              {post.title}
            </h1>
            <p className="text-[color:var(--muted-fg)] animate-fadeInUp animation-delay-100">{post.date}</p>
            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-4 animate-fadeInUp animation-delay-200">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[color:var(--background)] text-[color:var(--foreground)] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {post.coverImage && (
            <div className="mb-8 rounded-lg overflow-hidden animate-scaleIn">
              <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-auto" />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-[color:var(--card-fg)] animate-fadeIn animation-delay-300">
            {/* This would normally be rendered markdown, but for now we'll just use the content as is */}
            <p className="text-lg leading-relaxed mb-4">{post.content}</p>

            {/* Example paragraphs to make the blog post look more complete */}
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
              nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt,
              nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
              Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt,
              nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt,
              nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
            </p>
          </div>
        </article>

        <div className="mt-12 border-t border-[color:var(--border-color)] pt-6">
          <h2 className="text-xl font-semibold text-[color:var(--card-fg)] mb-4">Share this post</h2>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[color:var(--background)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)] border border-[color:var(--foreground)] transition-colors"
                aria-label={`Share on ${link.platform}`}
              >
                {link.platform === "twitter" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                )}
                {link.platform === "linkedin" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {link.platform === "email" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
