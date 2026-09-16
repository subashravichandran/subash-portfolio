const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Subash R. All rights reserved.
        </p>

        <p>
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  )
}

export default Footer