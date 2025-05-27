import React from 'react'

function ProjectCard({ image, title, description, link }) {
  return (
    <div>
      <div>
        <img
          className="object-cover w-full rounded-lg h-96 "
          src={image}
          alt="Imagen genérica"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
          {title}
        </h2>
        <p className="mt-2 text-gray-500">{description}</p>
        {link && (
          <a
            className="flex items-center -mx-1 mt-4 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            href={link}
            target="_blank"
          >
            <span className="mx-1">link al repo</span>
            <svg
              className="w-4 h-4 mx-1 rtl:-scale-x-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;