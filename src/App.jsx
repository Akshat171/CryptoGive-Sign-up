import Signup from "./components/Signup";

import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

function App() {
  return (
    <div>
      {/* <SignupPage /> */}
      <Signup />
    </div>
  );
}

export default App;
