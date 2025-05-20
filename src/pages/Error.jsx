import React from 'react'

function Error() {
  return (
    <div>
      <section className="bg-white rounded-lg">
        <div className="container flex items-center text-center justify-center min-h-screen px-6 py-12 mx-auto">
          <div>
            <p className="text-sm font-medium text-blue-500">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              No podemos encontrar la página.
            </h1>
            <p className="mt-4 text-gray-500">
              Oops!, la página que estás buscando no existe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Error;