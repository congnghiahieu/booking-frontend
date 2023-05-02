import style from './HighLightPlace.module.css'

function HighLightPlace({placeName}) {

    return (
        <div className={style.place}>
            <div className={style.place_img}></div>
            <div className={style.place_name}>{placeName}</div>
        </div>
    );
}

export default HighLightPlace