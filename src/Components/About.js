import React from 'react'


export default function About(props) {


    // const [handleStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // let handleStyle = {

    // }

  

    // const [handleStyle, setStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid white',


    // })

    const handleStyle = {
        color: props.mode==="dark"?"white":"#4D4B4A",
        backgroundColor: props.mode==="dark"?"#7A7775":"white"
    }
  

    // const darkFun = () => {
    //     if (handleStyle.color === "black") {
    //         setStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
           
    //     }
    //     else {
    //         setStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid black'
    //         })
           
    //     }
    // }


    return (
        <>
            <div className="container" >
                <h1 className="my-3" style={{ color: props.mode==="dark"?"white":"#4D4B4A"}}>About Us</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={handleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is TextUtil ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={handleStyle}>
                                <strong>TextUti is a text manipulating site.</strong> You can use to convert the text into upper case, lower case, count the words and characters.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={handleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                When it is developed ?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={handleStyle}>
                                It is developed in <strong>Dec, 2022</strong> for learning the <i>REACT</i> concepts.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={handleStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Contacts
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={handleStyle}>
                                <i className='fas fa-address-card'></i> <strong>Founder: </strong> Rahul Yadav <br />
                                <i className='fas fa-phone'></i> <strong>Phone: </strong> 9837870927 <br />
                                <i className='fas fa-envelope-open'></i> <strong>Mail: </strong> rahul.ydv0927@gmail.com
                                
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}
