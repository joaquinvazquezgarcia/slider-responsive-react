
export const Slide = ({imgSrc, slideTitle, slideDescription}) => {
 return (
    <>
        <div className="sliderImgContainer">
            <img
                src={imgSrc}
                alt=""
                className="sliderItemImg"
            />
            <h3 className="sliderItemTitle">{slideTitle}</h3>
            <p className="sliderArtDescription">
                {slideDescription}
            </p>
        </div>
    </>
 )
}