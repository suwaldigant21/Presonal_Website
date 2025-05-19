"use client"

interface ResearchDownloadButtonProps {
  pdfUrl: string
  title: string
}

const ResearchDownloadButton = ({ pdfUrl, title }: ResearchDownloadButtonProps) => {
  return (
    <button
      onClick={() => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${title.replace(/\s+/g, '_')}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors"
    >
      Download PDF
    </button>
  )
}

export default ResearchDownloadButton;
