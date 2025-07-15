import ErrorSvg from "../../../Asset/SVG/error-404.svg";

function Error404() {
    return (
        <>


            <div className='ml-base'>
                <div className='ml-par'>
                    <div className='ml-parent'>


                        <div className='ml-section _Cae-2err'>
                            <div className='ml-section-pa'>
                                <div className='ml-section-base'>

                                    <div className='dx-container'>
                                        <div className='__cser-p2_im'>
                                            <div className='__cser-p2'>
                                                <img src={ErrorSvg} alt="Error" />
                                            </div>
                                            <div className='__cser-p3'>
                                                Page not found
                                            </div>
                                            <div className='__cser-p4'>
                                                We couldn't find the page you were looking for.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div >

        </>
    )
}

export default Error404