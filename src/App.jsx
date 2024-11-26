import { useState } from "react";
import Users from "./component/Users";
import CreateUsers from "./component/CreatUsers";
import Details from "./component/Detaeils";

function App() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <div className="w-11/12 grid grid-cols-12 gap-4 mx-auto">
      {/* Left Sidebar */}
      <CreateUsers />

      {/* Main Content */}
      <Users onUserSelect={setSelectedUserId} />

      {/* Right Sidebar */}
      <Details userId={selectedUserId} />
    </div>
  );
}

export default App;
