import { Sidebar } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full grid grid-cols-2">
        <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
