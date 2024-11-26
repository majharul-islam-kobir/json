function UserItem({ user, onViewDetails, onDelete }) {
  return (
    <div className="bg-slate-500 p-3">
      <h1>{user.name}</h1>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <button
        className="px-3 py-1 bg-blue-400"
        onClick={() => onViewDetails(user.id)}
      >
        View Details
      </button>
      <button
        className="px-3 py-1 bg-red-400 ml-5"
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default UserItem;
