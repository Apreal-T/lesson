
import Information from "./Info";
import useFetch from "./useFetch";
const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    
    return (
      <div className="home">
          {error && <div>{error}</div>}
          {isPending && <div>loading....</div>}
          {blogs && <Information blogs= {blogs} title="Get to know us"/>}
      </div>
    );
}
 
export default Home;