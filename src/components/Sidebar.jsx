import NavLinkItem from './NavLinkItem';
import SectionTitle from './SectionTitle';

function Sidebar() {

  return (
    <aside
      className="flex min-h-screen w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-slate-800 p-2 text-zinc-50"
      
    >
      <SectionTitle title="Menu" />
      <NavLinkItem icon="bx-copy" label="Presentación" path="/" />

      <SectionTitle title="Integrantes" />
      <NavLinkItem icon="bx bx-user" label="Jose" path="/jose" />
      <NavLinkItem icon="bx bx-user" label="Agus" path="/agus" />
      <NavLinkItem icon="bx bx-user" label="Ro" path="/ro" />

      <SectionTitle title="Hobbies" />
      <NavLinkItem icon="bx bx-headphone" label="Música" path="/musica" />
      <NavLinkItem icon="bx bx-film" label="Películas" path="/pelicula" />

      <SectionTitle title="Seguimiento" />
      <NavLinkItem icon="bx bx-file" label="Bitácora" path="/bitacora" />
    </aside>
  );
}

export default Sidebar;
// This code defines a Sidebar component in React. The sidebar contains a list of links with icons and labels.