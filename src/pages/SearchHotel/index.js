import React, { useState } from "react";
import style from "./SearchHotel.module.css"
import { SearchHeader} from "../../components";
// import sideBar from "../../components/SearchHotel/sideBar.js";
// import sideBar from "../../components/SearchHotel/sideBar.js";
import Sidebar from "../../components/SearchHotel/Sidebar.js"
import HotelInfo from "../../components/SearchHotel/HotelInfo.js";
import HotelPrice from "../../components/SearchHotel/HotelPrice";
import SlideImage from "../../components/SlideImage/SlideImage"


const tabs = ['Phù hợp nhất', 'Được đánh giá nhiều nhất', 'Giá thấp nhất trước']
const SearchHotel = () => {
    const Hotels = [
        {
            name: 'Khách sạn Mường Thanh Sài Gòn Center',
            address: 'Sài Gòn',
            location: 'Cách trung tâm 2km',
            star: 2,
            orginalPrice: '1.000.000 $',
            discountPrice: '800.000 $',
            img: 'https://pix8.agoda.net/hotelImages/1032041/-1/39ff37f5b391961283f9ade4c1f2ef68.jpg?ca=17&ce=1&s=450x450',
            discount: '30%',
            point: 9.5,
            numOfComments: '500',
        },
        {
            name: 'Khách sạn Palace Sài Gòn',
            address: 'Sài Gòn',
            location: 'Cách trung tâm 2km',
            star: 4,
            orginalPrice: '1.600.000 $',
            discountPrice: '1.000.000 $',
            img: 'https://pix8.agoda.net/hotelImages/1032041/-1/39ff37f5b391961283f9ade4c1f2ef68.jpg?ca=17&ce=1&s=450x450',
            discount: '50%',
            point: 8.5,
            numOfComments: '257',
        },
        {
            name: 'Khách sạn Akoya Trung Tâm Sài Gòn',
            address: 'Sài Gòn',
            location: 'Cách trung tâm 2km',
            star: 5,
            orginalPrice: '1.990.000 $',
            discountPrice: '1.500.000 $',
            img: 'https://pix8.agoda.net/hotelImages/1032041/-1/39ff37f5b391961283f9ade4c1f2ef68.jpg?ca=17&ce=1&s=450x450',
            discount: '10%',
            point: 7,
            numOfComments: '345',
        },
        {
            name: 'Khách sạn Akoya Trung Tâm Sài Gòn',
            address: 'Sài Gòn',
            location: 'Cách trung tâm 2km',
            star: 5,
            orginalPrice: '1.990.000 $',
            discountPrice: '1.500.000 $',
            img: 'https://pix8.agoda.net/hotelImages/1032041/-1/39ff37f5b391961283f9ade4c1f2ef68.jpg?ca=17&ce=1&s=450x450',
            discount: '10%',
            point: 7,
            numOfComments: '345',
        },
    ]

    const [type, setType] = useState('Phù hợp nhất');
    const [show, setShow] = useState(false);
    return (
        <>
            <SearchHeader />
            <div className={style.container}>
                <Sidebar />
                <div className={style.show}>
                    <div className={style.suggesstion}>
                        <span className={style.vl}>Sắp xếp</span>
                        {tabs.map(tab => {
                            return <div
                                key={tab}
                                className={style.options}
                                style={tab == type ? { backgroundColor: '#5392f9', color: '#fff' } : { backgroundColor: 'white' }}
                                onClick={() => setType(tab)}
                            >
                                {tab}
                            </div>
                        })}
                    </div>
                    {Hotels.map((hotel, index) => {
                        return <div key={index} className={style.card}>
                            <SlideImage />
                            <HotelInfo hotel={hotel} />
                            <HotelPrice hotel={hotel} />
                        </div>
                    })}
                </div>
            </div >
        </>
    )
};

export default SearchHotel;
