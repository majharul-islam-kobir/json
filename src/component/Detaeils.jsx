import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUserDetails = async (id) => {
  const response = await axios.get(`https://json-data-o05l.onrender.com/first/${id}`);
  return response.data;
};

function Details({ userId }) {
  if (!userId) {
    return <div className="col-span-3 text-center border-2">No User Selected</div>;
  }

  const { data: user, error, isFetching } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserDetails(userId),
  });

  if (isFetching) return <div>Data is Loading...</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;

  return (
    <div className="col-span-3 text-center border-2">
      <h2 className="mb-4">User Details</h2>
      <div className="bg-slate-100">
        <hr />
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <hr />
      </div>
    </div>
  );
}

export default Details;
