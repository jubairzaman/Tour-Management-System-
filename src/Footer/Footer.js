import React from 'react';


const Footer = () => {
    return (
        <div>
            <nav class=" nav bg-dark d-flex justify-content-around ">
                <div>
                    <h4 className="text-white text-center">Our Address</h4>
                    <ul>
                        <li className="text-white">Level-4, 34, Awal Centre, Banani, Dhaka</li>
                        <li className="text-white">Official: web@programming-hero.com</li>
                        <li className="text-white"> Helpline : 01322810867 </li>
                    </ul>
                </div>
                <div>
                    <p className="text-center text-white p-8">Copyright © 2021 ComfortTour.com||Developed By Jubair</p>
                </div>

                <div >
                    <h4 className="text-white text-center">Social Media</h4>
                    <ul>
                        <li className="text-white">Facebook</li>
                        <li className="text-white">github</li>
                        <li className="text-white">LinkedIn</li>
                    </ul>

                </div>




            </nav>



        </div>
    );
};

export default Footer;