import React, { useState, useEffect } from "react";
import { apiGetWishlist } from "../../services";
import { Item } from "../../components";
import { useSelector } from "react-redux";
import { ItemSidebar, RelatedPost } from "../../components";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(null);
  const [update, setUpdate] = useState(false);
  const { currentData } = useSelector((state) => state.user);
  const fetchWishlist = async () => {
    const response = await apiGetWishlist();
    if (response.data.err === 0) setWishlist(response.data.response);
  };
  useEffect(() => {
    fetchWishlist();
  }, [update]);
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-[24px] font-semibold">Bài đăng đã thích</h1>
      <div className='w-full flex gap-4'>
      <div className="w-[70%]">
        {wishlist?.map((el) => (
          <Item
            key={el.id}
            address={el?.wishlistData?.address}
            attributes={el?.wishlistData?.attributes}
            description={
              el?.wishlistData?.description?.length > 0
                ? el?.wishlistData?.description
                : JSON.parse(el?.wishlistData?.description)
            }
            images={JSON.parse(el?.wishlistData?.images?.image)}
            star={+el?.wishlistData?.star}
            title={el?.wishlistData?.title}
            user={el?.wishlistData?.user}
            id={el?.wishlistData?.id}
            islover={el?.wishlistData?.lovers?.some(
              (i) => currentData?.id === i.uid
            )}
            setUpdate={setUpdate}
          />
        ))}
      </div>
      <div className="w-[30%] flex flex-col gap-4 justify-start items-center">
        {/* <ItemSidebar isDouble={true} type='priceCode' content={prices} title='Xem theo giá' />
                    <ItemSidebar isDouble={true} type='areaCode' content={areas} title='Xem theo diện tích' /> */}
        <RelatedPost />
      </div>
      </div>
    </div>
  );
};

export default Wishlist;
