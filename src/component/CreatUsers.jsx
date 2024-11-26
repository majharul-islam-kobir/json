import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function CreateUsers() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (variables) => {
      return axios.post("https://json-data-o05l.onrender.com/first", variables); // URL fix
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newData = Object.fromEntries(formData);

    mutation.mutate({
      ...newData,
      id: crypto.randomUUID(),
    });
  };

  return (
    <div className="col-span-3 border-2">
      <h1 className="text-center">Create A New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 p-1 w-full rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="border-2 p-1 w-full rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="profession"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Profession
          </label>
          <input
            type="text"
            id="profession"
            name="profession"
            className="border-2 p-1 w-full rounded-lg"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Upload Your Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="border-2 p-1 w-full rounded-lg"
          />
        </div>
        <button className="bg-blue-700 px-3 rounded-md py-1" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUsers;
