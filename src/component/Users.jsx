import { useState } from "react";
import UserItem from "./UserItem";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Next from "./Next";

const getData = async () => {
  const response = await axios.get("https://json-data-o05l.onrender.com/first");
  return response.data;
};

function Users({ onUserSelect }) {
  const queryClient = useQueryClient();

  // Fetch Users
  const { data: users, isFetching, error } = useQuery({
    queryKey: ["users"],
    queryFn: getData,
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: (userId) => axios.delete(`https://json-data-o05l.onrender.com/first/${userId}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const handleDelete = (userId) => {
    deleteMutation.mutate(userId);
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    if (currentPage < Math.ceil(users.length / itemsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isFetching) return <div>Data is Loading...</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;

  // Calculate the users to display based on the current page
  const currentUsers = users.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="col-span-6 border-2">
      <h1>All Users</h1>
      <div className="grid grid-cols-2 gap-4">
        {currentUsers.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onViewDetails={onUserSelect}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Pass currentPage and total items to the Next component */}
      <Next
        dataIndex={currentPage}
        totalItems={users.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}

export default Users;
