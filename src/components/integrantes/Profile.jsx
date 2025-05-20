

function Profile({ name, role, description, image }) {
  return (
    <>
      <section className="bg-white rounded-lg">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Portfolio
          </h1>
          {/* Tarjeta de perfil */}
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16">
            <div className="px-12 py-8 max-w-2xl mx-auto transition-colors duration-300 transform border border-gray-300 cursor-pointer rounded-xl group hover:border-transparent hover:bg-blue-600">
              <div className="flex flex-col sm:-mx-4 sm:flex-row">
                <img
                  className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                  src={image}
                  alt={`Avatar de perfil de ${name}`}
                />
                <div className="mt-4 sm:mx-4 sm:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl group-hover:text-white">
                    {name}
                  </h1>

                  <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-100">
                    {role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-500 group-hover:text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
