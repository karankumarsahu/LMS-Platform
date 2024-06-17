import CategoryList from "@/components/CategoryList/CategoryList";
import CourseCard from "@/components/CourseCard/CourseCard";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full grid grid-cols-6 max-lg:block">
        <Sidebar />

        <div className="w-full h-screen col-span-5">
          <div>
            <Header/>
            <CategoryList />

            <div className="w-full h-full grid grid-cols-4 px-10 py-5 gap-8">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
            
          </div>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Home;
