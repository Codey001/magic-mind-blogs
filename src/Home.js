import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('https://servergi.onrender.com/');
  return (
    <div className="home">
        {error && <div> {error} </div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs ={blogs} title = "All Blogs!" />}  
    </div>
  );
}
 
export default Home;
