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

          <div className="w-full h-screen col-span-5 overflow-y-auto">
            <div>
              <Header />
              <CategoryList />

              <div className="w-full h-full grid grid-cols-4 px-10 py-5 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:px-4">
                <CourseCard
                  Title={"Finance Platform"}
                  Category={"Web Development"}
                  Chapters={4}
                  isEnrolled={true}
                  Progress={80}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4984f8a5-fe83-4429-b154-972bb15d39f2-czdgic.png&w=1920&q=75"
                  }
                />
                <CourseCard
                  Title={"Duolingo Clone"}
                  Category={"Android Development"}
                  Chapters={10}
                  isEnrolled={false}
                  Price={500}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F6f5ddbbe-cf91-44d4-bd10-5fdb235889df-tt9026.png&w=1200&q=75"
                  }
                />
                <CourseCard
                  Title={"Finance Platform"}
                  Category={"Web Development"}
                  Chapters={4}
                  isEnrolled={true}
                  Progress={80}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4984f8a5-fe83-4429-b154-972bb15d39f2-czdgic.png&w=1920&q=75"
                  }
                />
                <CourseCard
                  Title={"Duolingo Clone"}
                  Category={"Android Development"}
                  Chapters={10}
                  isEnrolled={false}
                  Price={500}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F6f5ddbbe-cf91-44d4-bd10-5fdb235889df-tt9026.png&w=1200&q=75"
                  }
                />
                <CourseCard
                  Title={"Finance Platform"}
                  Category={"Web Development"}
                  Chapters={4}
                  isEnrolled={true}
                  Progress={80}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4984f8a5-fe83-4429-b154-972bb15d39f2-czdgic.png&w=1920&q=75"
                  }
                />
                <CourseCard
                  Title={"Duolingo Clone"}
                  Category={"Android Development"}
                  Chapters={10}
                  isEnrolled={false}
                  Price={500}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F6f5ddbbe-cf91-44d4-bd10-5fdb235889df-tt9026.png&w=1200&q=75"
                  }
                />
                <CourseCard
                  Title={"Finance Platform"}
                  Category={"Web Development"}
                  Chapters={4}
                  isEnrolled={true}
                  Progress={80}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4984f8a5-fe83-4429-b154-972bb15d39f2-czdgic.png&w=1920&q=75"
                  }
                />
                <CourseCard
                  Title={"Duolingo Clone"}
                  Category={"Android Development"}
                  Chapters={10}
                  isEnrolled={false}
                  Price={500}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F6f5ddbbe-cf91-44d4-bd10-5fdb235889df-tt9026.png&w=1200&q=75"
                  }
                />
                <CourseCard
                  Title={"Finance Platform"}
                  Category={"Web Development"}
                  Chapters={4}
                  isEnrolled={true}
                  Progress={80}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4984f8a5-fe83-4429-b154-972bb15d39f2-czdgic.png&w=1920&q=75"
                  }
                />
                <CourseCard
                  Title={"Duolingo Clone"}
                  Category={"Android Development"}
                  Chapters={10}
                  isEnrolled={false}
                  Price={500}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F6f5ddbbe-cf91-44d4-bd10-5fdb235889df-tt9026.png&w=1200&q=75"
                  }
                />
                <CourseCard
                  Title={"Finance Platform"}
                  Category={"Web Development"}
                  Chapters={4}
                  isEnrolled={true}
                  Progress={80}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F4984f8a5-fe83-4429-b154-972bb15d39f2-czdgic.png&w=1920&q=75"
                  }
                />
                <CourseCard
                  Title={"Duolingo Clone"}
                  Category={"Android Development"}
                  Chapters={10}
                  isEnrolled={false}
                  Price={500}
                  Thumbnail={
                    "https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F6f5ddbbe-cf91-44d4-bd10-5fdb235889df-tt9026.png&w=1200&q=75"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
