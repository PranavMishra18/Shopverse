import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Centered Heading */}
      <h1 className="font-bold mt-7 text-[#A97142] text-[90px] font-['Helvetica',sans-serif] text-center">
        SHOPVERSE
      </h1>

      {/* Centered Button under Heading */}
      <button className="btn p-7 mb-7 text-lg font-['Verdana',sans-serif] mt-4">
        SHOP NOW
      </button>

      {/* Flex container for Cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="card bg-base-100 w-80 shadow-sm rounded-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Check out Shoes!</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card bg-base-100 w-80 shadow-sm rounded-xl">
          <figure>
            <img
              src="src\assets\homepageshirt.jpg"
              alt="Shirts"
              className="h-[190px] w-[321px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Check out Shirts!</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card bg-base-100 w-80 shadow-sm rounded-xl">
          <figure>
            <img
              src="src\assets\homepagejeans.jpg"
              alt="Pants"
              className="h-[190px] w-[321px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Check out Pants!</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
