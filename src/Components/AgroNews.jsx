import { Link } from "react-router";
import {blogs} from '../Data/Data'


const AgroNews = () => {
  return (
    <div className="my-10 shadow-md py-10 px-2 rounded-2xl">
      <div>
        <h5 className="text-gray-500 ">Latest</h5>
        <h1 className="mb-10 text-xl font-bold">Agro-Weather News</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {blogs.slice(0, 4).map((blog) => (
          <div key={blog.category} className="relative bg-[#fdfdfd] ">
            <img src={blog.image} alt="blogimage" className="rounded-xl" />
            {/* blog title */}
            <div>
              <p className="text-[12px] font-medium py-3 text-gray-500">
                1<sup>st</sup> July
              </p>
              <h5 className="pr-4 mb-1 text-[14px] md:text-[15px] font-bold uppercase">
                {blog.title}
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, id? Quia error ullam eos ex sapiente aliquid
                recusandae, alias vitae.{" "}
                <Link className="text-blue-500 underline" to="/news">
                  Read more
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AgroNews