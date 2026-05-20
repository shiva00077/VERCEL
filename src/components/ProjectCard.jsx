function ProjectCard({ project }) {

  const getEmbedUrl = (url) => {

    // Handle short youtu.be URLs
    if (url.includes("youtu.be")) {
      const videoId = url.split("/").pop()
      return `https://www.youtube.com/embed/${videoId}`
    }

    // Handle youtube.com/watch?v=
    if (url.includes("watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0]
      return `https://www.youtube.com/embed/${videoId}`
    }

    // Already embed URL
    if (url.includes("/embed/")) {
      return url
    }

    return url
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

      <h2 className="text-3xl font-bold mb-4">
        {project.title}
      </h2>

      <p className="text-gray-700 mb-4">
        {project.overview}
      </p>

      <div className="mb-4">
        <h3 className="font-bold text-lg mb-2">
          Technical Details
        </h3>

        <p className="text-gray-600 whitespace-pre-line">
          {project.technical}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mb-5 flex-wrap">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          GitHub Repository
        </a>

      </div>

      <div className="overflow-hidden rounded-xl">
        <iframe
          width="100%"
          height="400"
          src={getEmbedUrl(project.youtube)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>

    </div>
  )
}

export default ProjectCard