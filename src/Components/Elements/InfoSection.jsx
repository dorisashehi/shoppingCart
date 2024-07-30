const InfoSection = () => {
  return (
    <div className="full-screen less-section-space">
      <div className="content">
        <div className="flex gap-10 md:gap-20 justify-start flex-col md:flex-row">
          <div className="flex gap-5">
            <div className="two-cols">
              <div className="yellow-rounded"></div>
              <svg fill="none" viewBox="0 0 15 15" className="info-icon">
                <path
                  stroke="currentColor"
                  d="M1.5 9.5h1a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3a1 1 0 011-1zm0 0v-3a6 6 0 1112 0v3m0 0h-1a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 001-1v-3a1 1 0 00-1-1z"
                />
              </svg>
            </div>

            <div>
              <h5 className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary">
                Free Shipping
              </h5>
              <div className="font-inter text-sm text-secondary pt-2 pb-5 font-medium ">
                Free shipping for all orders
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="two-cols">
              <div className="yellow-rounded"></div>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className="info-icon"
              >
                <path d="M8.186 1.113a.5.5 0 00-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 011.114 0l7.129 2.852A.5.5 0 0116 3.5v8.662a1 1 0 01-.629.928l-7.185 2.874a.5.5 0 01-.372 0L.63 13.09a1 1 0 01-.63-.928V3.5a.5.5 0 01.314-.464L7.443.184z" />
              </svg>
            </div>
            <div>
              <h5 className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary">
                Free Shipping
              </h5>
              <div className="font-inter text-sm text-secondary pt-2 pb-5 font-medium ">
                Free shipping for order above $180
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="two-cols">
              <div className="yellow-rounded"></div>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className="info-icon"
              >
                <path d="M11 5.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1z" />
                <path d="M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm13 2v5H1V4a1 1 0 011-1h12a1 1 0 011 1zm-1 9H2a1 1 0 01-1-1v-1h14v1a1 1 0 01-1 1z" />
              </svg>
            </div>
            <div>
              <h5 className="font-epilogue font-semibold text-[0.9rem] lg:text-base text-primary">
                Free Shipping
              </h5>
              <div className="font-inter text-sm text-secondary pt-2 pb-5 font-medium ">
                Free shipping for order above $180
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
