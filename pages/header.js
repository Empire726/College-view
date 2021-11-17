
const header = () => {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-lg-6"> */}
                            <div className="text-container">
                                <h3>MOBILE APP FOR <span id="js-rotating">Notes,Lecture,Practical</span></h3>
                                <p>the easiest and feature packed marketing<br /> automation apps in the market. Download it today!</p>
                                <a className="btn-solid-lg page-scroll" href="#your-link">APP</a>
                                <a className="btn-solid-lg page-scroll" href="#your-link">READ more</a>
                            </div>
                            {/* </div>  */}
                            {/* <div className="col-lg-6"> */}
                            <div className="image-container">
                                <img className="img-fluid" src="images/header-iphone.png" alt="alternative" />
                            </div>
                            {/* </div>  */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default header;
