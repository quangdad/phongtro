import React from "react";
import { text } from "../../ultils/constant";
import { Province, ItemSidebar, RelatedPost } from "../../components";
import { List, Pagination, Search } from "./index";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const { posts, count } = useSelector((state) => state.post);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <Province />

      {/* <div className="relative h-full">
        <img
          src="https://res.cloudinary.com/dluanqwnn/image/upload/v1703142454/phongtro/qtbormj69jgpp2pf9sqd.jpg"
          className="h-1/2 w-full object-cover"
          />
        <div className="absolute flex flex-col w-full gap-10 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <p className="text-[25px] text-[#f0efed]">{text.HOME_DESCRIPTION}</p>{" "}
          <div className="flex ">
            <Search />
          </div>
        </div>
      </div> */}
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
        </div>
        <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
          {/* <ItemSidebar content={categories} title='Danh sách cho thuê' /> */}
          {/* <ItemSidebar isDouble={true} type='priceCode' content={prices} title='Xem theo giá' />
                    <ItemSidebar isDouble={true} type='areaCode' content={areas} title='Xem theo diện tích' /> */}
          <RelatedPost />
        </div>
      </div>
      <Pagination posts={posts} count={count} />
    </div>
  );
};

export default Homepage;
