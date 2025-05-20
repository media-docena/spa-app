import logo from "../assets/img/logo.jpeg";

function Header({ onToggleSidebar }) {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2 relative">
      <div className="flex items-center space-x-2">
        <button className="text-3xl" onClick={onToggleSidebar}>
          <i className="bx bx-menu"></i>
        </button>
        <div className="flex items-center space-x-2">
          <img className="w-10 h-10 rounded-lg" src={logo} />
          <p className="font-medium text-gray-800 uppercase">Media docena</p>
        </div>
      </div>
    </header>
  );
}

export default Header;