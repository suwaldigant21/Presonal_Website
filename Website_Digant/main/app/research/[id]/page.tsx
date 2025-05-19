import { getResearchPaperById } from "@/lib/content-loader"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ResearchDownloadButton from "@/components/research-download-button"

export default function ResearchPaperPage({ params }: { params: { id: string } }) {
  const paper = getResearchPaperById(params.id)

  if (!paper) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[color:var(--background)] pt-24 pb-16 px-4 md:px-8 transition-colors">
      <div className="max-w-3xl mx-auto bg-[color:var(--card-bg)] rounded-lg shadow-lg p-6 md:p-10 animate-fadeIn">
        <Link href="/#research" className="inline-flex items-center text-[color:var(--card-fg)] hover:underline mb-6 group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          Back to all research
        </Link>
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--card-fg)] animate-fadeInUp">
              {paper.title}
            </h1>
            <p className="text-[color:var(--muted-fg)] animate-fadeInUp animation-delay-100">{paper.publication} &middot; {paper.year}</p>
          </header>
          <section className="mb-8 animate-fadeInUp animation-delay-200">
            <p className="text-lg text-[color:var(--card-fg)]">{paper.abstract}</p>
          </section>
          {/* Render full content if available */}
          {paper.content && (
            <section className="prose prose-invert max-w-none mb-8 animate-fadeInUp animation-delay-300">
              {paper.content.split('\n').map((line, idx) =>
                line.trim() === '' ? <br key={idx} /> : <p key={idx}>{line}</p>
              )}
            </section>
          )}
          {paper.pdfUrl && (
            <ResearchDownloadButton pdfUrl={paper.pdfUrl} title={paper.title} />
          )}
        </article>
      </div>
    </main>
  )
}
