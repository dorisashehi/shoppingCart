import Banner from "../Banner";
const Collections = () => {
  return (
    <>
      <Banner title="Shop" path="Home / Collections" />
      <div className="w-full py-20">
        <div className="content">
          <div className="flex">
            <div className="w-[300px]">
              <div className="filter-section">
                <h1 className="filter-header">Filter Options</h1>
              </div>

              <div className="filter-section">
                <h1 className="filter-header">Category</h1>
                <ul className="filter-content">
                  <li>Men</li>
                  <li>Women</li>
                </ul>
              </div>
              <div className="filter-section">
                <h1 className="filter-header">Price</h1>
                <div className="filter-content">price range</div>
              </div>
              <div className="filter-section">
                <h1 className="filter-header">Size</h1>
                <ul className="filter-content">
                  <li>S</li>
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                </ul>
              </div>
            </div>
            <div className="flex-1">right</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
