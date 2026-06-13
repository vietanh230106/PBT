function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm thiết bị..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;