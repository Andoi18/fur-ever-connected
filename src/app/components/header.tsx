const Header = ({ user, onLogout }: { user: string; onLogout: () => void }) => (
    <div className="flex justify-between items-center mb-8 w-full">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <p className="text-lg text-white">Welcome, {user}!</p>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );

  export default Header;