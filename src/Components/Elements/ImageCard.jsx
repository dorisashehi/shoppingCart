const ImageCard = ({ imgSrc, category, lowPrice, proName, price }) => {
  return (
    <div className="card w-[300px]">
      <div className="relative">
        <img src={imgSrc} className="w-full object-cover h-[300px]" />
        <div className="icons absolute top-[20px] right-[10px] w-fit flex flex-col gap-3">
          <svg
            className="slider-icon"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            ></path>
          </svg>

          <svg
            className="slider-icon"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="content py-5">
        <h4 className="font-inter text-xs text-secondary pb-2 font-semibold">
          {category}
        </h4>
        <h5 className="font-epilogue font-semibold text-base text-primary pb-3">
          {proName}
        </h5>
        <div className="price flex gap-3">
          <div className="low-price font-epilogue text-primary font-semibold text-[25px]">
            ${lowPrice}
          </div>
          <div className="price font-epilogue text-secondary line-through font-normal text-[25px]">
            ${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
