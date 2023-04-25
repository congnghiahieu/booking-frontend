import React, { useState } from "react";
import style from "./SearchHotel.module.css"
import { InputSearch, DatePlant, Member } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faMugSaucer, faDumbbell, faPersonSwimming, faStar, faLocationDot, faBell, faHandHoldingDollar, faLeaf, faClock } from "@fortawesome/free-solid-svg-icons"



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
        },
        {
            name: 'Khách sạn Palace Sài Gòn',
            address: 'Sài Gòn',
            location: 'Cách trung tâm 2km',
            star: 4,
            orginalPrice: '1.600.000 $',
            discountPrice: '1.000.000 $',
            img: 'https://pix8.agoda.net/hotelImages/1032041/-1/39ff37f5b391961283f9ade4c1f2ef68.jpg?ca=17&ce=1&s=450x450',
        },
        {
            name: 'Khách sạn Akoya Trung Tâm Sài Gòn',
            address: 'Sài Gòn',
            location: 'Cách trung tâm 2km',
            star: 5,
            orginalPrice: '1.990.000 $',
            discountPrice: '1.500.000 $',
            img: 'https://pix8.agoda.net/hotelImages/1032041/-1/39ff37f5b391961283f9ade4c1f2ef68.jpg?ca=17&ce=1&s=450x450',
        },
    ]
    const TypeOfHotels = ['HomeStay', 'Resort', 'Hotel']

    const [type, setType] = useState('Phù hợp nhất')

    return (
        <>
            <div className={style.search}>
                <div>
                    <InputSearch placeholder="Căn hộ Nikko - Cuộc sống quý phái" />
                </div>
                <DatePlant />
                <Member />
                <button className={style.searchButton}>
                    <span>TÌM</span>
                </button>
            </div>
            <div className={style.container}>
                <div className={style.sideBar}>
                    <div className={style.filter}>
                        <h3 style={{ color: '#5a5b5b' }}>Giá mỗi đêm</h3>
                        <span>
                            <input type="checkbox" name="5" />
                            <label htmlFor="5" /> 500-1000
                        </span>
                        <span>
                            <input type="checkbox" name="4" />
                            <label htmlFor="4" /> 1000-1500
                        </span>
                        <span>
                            <input type="checkbox" name="3" />
                            <label htmlFor="3" /> 1500-2000
                        </span>
                        <span>
                            <input type="checkbox" name="2" />
                            <label htmlFor="2" /> 2000+
                        </span>
                    </div>
                    <div className={style.filter}>
                        <h3 style={{ color: '#5a5b5b' }}>Xếp hạng sao</h3>
                        <span>
                            <input type="checkbox" name="5" />
                            <label htmlFor="5" >
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </label>
                        </span>
                        <span>
                            <input type="checkbox" name="4" />
                            <label htmlFor="4" >
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </label>
                        </span>
                        <span>
                            <input type="checkbox" name="3" />
                            <label htmlFor="3">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" /></label>
                        </span>
                        <span>
                            <input type="checkbox" name="2" />
                            <label htmlFor="2">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </label>
                        </span>
                        <span>
                            <input type="checkbox" name="1" />
                            <label htmlFor="1">
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </label>
                        </span>
                        <span>
                            <input type="checkbox" name="none" />
                            <label htmlFor="none" /> Chưa xếp hạng
                        </span>
                    </div>
                    <div className={style.filter}>
                        <h3 style={{ color: '#5a5b5b' }}>Loại hình nơi ở</h3>
                        {TypeOfHotels.map(type => {
                            return <span key={type}>
                                <input type="checkbox" name={type} />
                                <label htmlFor={type} /> {type}
                            </span>
                        })}
                    </div>

                    <div className={style.filter}>
                        <h3 style={{ color: '#5a5b5b' }}>Khoảng cách đến trung tâm</h3>
                        <span>
                            <input type="checkbox" name="5" />
                            <label htmlFor="5" /> Bên trong trung tâm thành phố
                        </span>
                        <span>
                            <input type="checkbox" name="4" />
                            <label htmlFor="4" /> Cách trung tâm 2 km
                        </span>
                        <span>
                            <input type="checkbox" name="3" />
                            <label htmlFor="3" /> Cách trung tâm 2-5 km
                        </span>
                        <span>
                            <input type="checkbox" name="2" />
                            <label htmlFor="2" /> Cách trung tâm 5-10 km
                        </span>
                        <span>
                            <input type="checkbox" name="1" />
                            <label htmlFor="1" /> Cách trung tâm 5 km
                        </span>

                    </div>
                </div>
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
                            <div className={style.image}>
                                <img src={hotel.img} />
                                <div style={{ backgroundColor: 'blue' }}></div>
                                <div style={{ backgroundColor: 'blue' }}></div>
                                <div style={{ backgroundColor: 'blue' }}></div>
                            </div>
                            <div className={style.hotelInfor}>
                                <div className={style.information}>
                                    <h3>{hotel.name}</h3>
                                    <p>
                                        {Array(hotel.star).fill().map(_ => {
                                            return <FontAwesomeIcon icon={faStar} className="star" />
                                        })}
                                    </p>
                                    <p id={style.one}>
                                        <FontAwesomeIcon icon={faLocationDot} /> {hotel.address + ' - ' + hotel.location}
                                    </p>
                                    <p id={style.four}>
                                        <FontAwesomeIcon icon={faLeaf} /> Du lịch bền vững
                                    </p>
                                    <p id={style.three}>
                                        <FontAwesomeIcon icon={faClock} /> Lý tưởng cho lưu trú dài hạn
                                    </p>
                                    <p id={style.two}>
                                        <FontAwesomeIcon icon={faBell} /> Lần đặt gần nhất:
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faHandHoldingDollar} />Thưởng hoàn tiền mặt:
                                    </p>
                                    <hr />
                                </div>

                                <div className={style.famous}>
                                    <p>Đặc điểm nổi bật: </p>
                                    <span>
                                        <FontAwesomeIcon icon={faBed} className="famous" />x1
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faMugSaucer} className="famous" />x1
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faDumbbell} className="famous" />x1
                                    </span>
                                    <span>
                                        <FontAwesomeIcon icon={faPersonSwimming} className="famous" />x1
                                    </span>
                                </div>
                            </div>
                            <div className={style.price}>
                                <div className={style.feedBack}>
                                    <div className={style.comment}>
                                        <h4>Trên cả tuyệt vời</h4>
                                        <span>500 Nhận xét</span>
                                    </div>
                                    <div className={style.point}>9.3</div>
                                </div>

                                <div className={style.discount}>
                                    <p>Còn 1 phòng GIẢM 32%</p>
                                    <span>Giá mỗi đêm rẻ nhất từ</span>
                                    <span id={style.orginalPrice}>{hotel.orginalPrice}</span>
                                    <span id={style.discountPrice}>{hotel.discountPrice}</span>
                                    <span className={style.destroy}>+ Hủy miễn phí</span>

                                </div>

                            </div>
                        </div>
                    })}
                </div>
            </div >
        </>
    )
};

export default SearchHotel;
