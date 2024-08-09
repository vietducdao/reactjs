import React from 'react';
import Navbar from './Navbar';

// Import Swiper styles 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules'

const Home = () => {
    const swiperOptionsOne = {
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            
        },
        loop:true,
    };
    const swiperOptionsTwo ={
        breakpoints:{
        0:{
            slidesPerView:1,
            spaceBetween:10,
        },
        450:{
            slidesPerView:2,
            spaceBetween:10,

        },
        768:{
            slidesPerView:3,
            spaceBetween:10,

        },
        1024:{
            slidesPerView:4,
            spaceBetween:10,

        },
    },
        loop:true,
        centeredSlides:true,
        spaceBetween:10,
    };
    

    return (
        <div className='home-container'>
            <Navbar />
            
            <section className='home' id='home'>
                <div className='row'>
                    <div className='content'>
                        <h3>Welcome to Pages
                        of VietDuc</h3>
                        <p>Discover a unique space for all literature lovers, where every book is a new chapter in your literary journey. From classics to modern bestsellers, we offer a wide variety of literary genres to satisfy every taste. We also support talented local authors by featuring their works in our store. Our knowledgeable staff is always available to provide expert advice and recommendations.</p>
                        <a href='#' className='btn'>Contact Us</a>
                    </div>

                    <div className='swiper'>
                        <Swiper
                            watchSlidesProgress={true}
                            slidesPerView={3}
                            autoplay={{
                                delay:9500,
                                disableOnInteraction:false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay]}
                            className="book-list"
                            {...swiperOptionsOne}
                        >
                            <SwiperSlide><a href='#' className='swiper-slide'><img src='/images/book-1.png' alt='book 1'/></a></SwiperSlide>
                            <SwiperSlide><a href='#' className='swiper-slide'><img src='/images/book-2.png' alt='book 2'/></a></SwiperSlide>
                            <SwiperSlide><a href='#' className='swiper-slide'><img src='/images/book-3.png' alt='book 3'/></a></SwiperSlide>
                            <SwiperSlide><a href='#' className='swiper-slide'><img src='/images/book-4.png' alt='book 4'/></a></SwiperSlide>
                            <SwiperSlide><a href='#' className='swiper-slide'><img src='/images/book-5.png' alt='book 5'/></a></SwiperSlide>
                            <SwiperSlide><a href='#' className='swiper-slide'><img src='/images/book-6.png' alt='book 6'/></a></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className='featured'>
            <div className='heading'><span>Explore Our Literary Universe</span></div>
            <div className='swiper'>
            <Swiper
        watchSlidesProgress={true}
                            autoplay={{
                                delay:3500,
                                disableOnInteraction:false
                            }}
        modules={[Autoplay]}
        className="featured-slider"
        {...swiperOptionsTwo}
      >
        <SwiperSlide>
            <div className='box'>
                <div className='image'>
                    <img src='images/book-1.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book </h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box'>

                
                <div className='image'>
                    <img src='images/book-1.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box'>
                <div className='image'>
                    <img src='images/book-1.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box'>
                <div className='image'>
                    <img src='images/book-1.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box'>
                <div className='image'>
                    <img src='images/book-2.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box'>
                <div className='image'>
                    <img src='images/book-3.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box'>
                <div className='icons'>
                    <a href='\#'></a>
                </div>
                <div className='image'>
                    <img src='images/book-4.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box'>
                
                <div className='image'>
                    <img src='images/book-5.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='box'>
                <div className='image'>
                    <img src='images/book-6.png' alt='' />
                </div>
                <div className='content'>
                    <h3>featured book</h3>
                    <div className='price'>$15.99 <span>$20.99</span></div>
                   
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>           

            </div>
            </section> 
                                                    
        <section className='Discover-Sophistication'> 
      <div className='row'>
        <div className='about-col'>
          <h3>A World of Mystery and Intrigue</h3>
          <p>Experience the thrill of the unknown with our collection of crime and mystery novels. Our carefully curated selection will have you on the edge of your seat, eager to discover what happens next.</p>
          <a href='#'>Contact Us</a>
        </div>
        
        <div className='about-col'>
          <img src='/images/letter.jpg' alt='Letter' />
        </div>
      </div>
    </section>

    <section className='arrivals' id='arrivals'>
        <div className='heading'>Discover Our Curated Collections</div>
        <div className='swiper'>
        <Swiper
        watchSlidesProgress={true}
                            autoplay={{
                                delay:3500,
                                disableOnInteraction:false
                            }}
        modules={[Autoplay]}
        className="featured-slider"
        {...swiperOptionsTwo}
      >

        <SwiperSlide>
            <a href='\#' className='box'>
                <div className='image'>
                    <img src='images/book-1.png' alt='' />
                </div>
                <div className='content'>
                    <h3>Discover Our Curated Collections</h3>
                            <div className='price'>$15.99</div>
                </div>

            </a>
        </SwiperSlide>
    </Swiper>
        </div>

    </section>

        </div>
    )
}

export default Home;