import CategoryList from "@/components/CategoryList/CategoryList";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const Home = () => {
  
  
  
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full grid grid-cols-6">
        <Sidebar />

        <div className="w-full h-screen col-span-5">
          <div>
            <Header/>
            
            <CategoryList />
            
          </div>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Home;
