const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#f6f0cf] dark:bg-gray-900 py-8 px-8 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-black dark:text-white opacity-80">© {currentYear} Digant Suwal. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
