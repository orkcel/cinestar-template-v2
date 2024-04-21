import styles from "./Home.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import SectionTitle from "../../Common/SectionTitle/SectionTitle.jsx";
import {
    ArrowRight, EnvelopeSimple,
    FilmStrip, GithubLogo,
    Images, InstagramLogo,
    MusicNotes,
    Play,
    Quotes,
    Star,
    VideoCamera,
    WhatsappLogo
} from "@phosphor-icons/react";
import {useCallback, useMemo, useState,useEffect} from "react";
import servicesData from "/public/data/servicesData.json";
import reviewData from "/public/data/reviewData.json";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Footer} from "../../Components/Footer/Footer.jsx";
import blogCardsData from "/public/data/blogCardsData.json";


export const Home = () => {
    const [videoState, setVideoState] = useState(false);
    const [secondVideoState, setSecondVideoState] = useState(false);
    const [slidesPerView, setSlidesPerView] = useState(3);


    const handleVideoOpen = useCallback(() => {
        setVideoState(true);
    }, [setVideoState]);

    const handleSecondVideoOpen = useCallback(() => {
        setSecondVideoState(true);
    }, [setSecondVideoState]);

    const iconData = useMemo(() => ({
        "film": <FilmStrip/>,
        "gallery": <Images weight="fill"/>,
        "camera": <VideoCamera weight="fill"/>,
        "music": <MusicNotes weight="fill"/>,
    }), [])

    const handleResize = useCallback(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1100 && windowWidth > 800) {
            setSlidesPerView(2);
        } else if (windowWidth <= 800 && windowWidth > 0) {
            setSlidesPerView(1);
        }
        else {
            setSlidesPerView(3);
        }
    }, []);
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    return (
        <>
            <Header/>
            <main className={styles.homeWrapper}>
                <section className={styles.homeSection}>
                    <div className={styles.overlay}></div>
                    <div className={styles.homeContent}>
                        <div className={styles.homeTitle}>
                            <h5>CINESTAR STUDIO</h5>
                            <h1>FILM & MOVIE <br/><span>PRODUCTION</span></h1>
                            <p>Nullam a placerat nibh, et posuere lacus. Etiam massa ex, imperdiet et lobortis et,
                                posuere non tellus. Pellentesque finibus maximus sapien.</p>
                        </div>


                        <div className={styles.awardsWrapper}>
                            <div className={styles.imgBlock}>
                                <img src="https://html.rometheme.pro/cinestar/image/award1.png" alt="award"/>
                            </div>

                            <div className={styles.imgBlock}>
                                <img src="https://html.rometheme.pro/cinestar/image/award2.png" alt="award"/>
                            </div>

                            <div className={styles.imgBlock}>
                                <img src="https://html.rometheme.pro/cinestar/image/award1.png" alt="award"/>
                            </div>

                            <div className={styles.imgBlock}>
                                <h5>WE ARE THE BEST STUDIO PRODUCTION</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.firstSection}>
                    <div className={styles.firstSectionContent}>
                        <div className={styles.textContainer}>
                            <SectionTitle heading="CINESTER STUDIO" title="HAVE IDEA FOR YOUR PROJECT ?"
                                          centered={false}/>
                            <div className={styles.textBlock}>
                                <p>Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus
                                    nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est
                                    id
                                    blandit. Duis fermentum nulla non mi tempor elementum. Donec efficitur ac eros quis
                                    porta.</p>
                            </div>
                        </div>
                        <div className={styles.vidTextContainer}>
                            <div className={styles.vidBlock}>
                                {!videoState ?
                                    <div className={styles.playBtn} onClick={handleVideoOpen}>
                                        <Play weight="fill"/>
                                    </div>
                                    :
                                    null
                                }
                                {videoState ?
                                    <iframe

                                        src="https://www.youtube.com/embed/FK2RaJ1EfA8?si=ypUhYe6bAme7OQ4v&autoplay=1"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                                        className={styles.iFrame}
                                    >
                                    </iframe>
                                    :
                                    null
                                }

                            </div>
                            <div className={styles.textBlock}>
                                <h5>DO NOT HESITATE TO CHOOSE CINESTAR AS YOUR STUDIO PRODUCTION</h5>
                                <p>Integer scelerisque nulla nec lectus dapibus gravida. Nulla sit amet leo vel orci
                                    convallis hendrerit. Donec eget enim pharetra, interdum tellus et, fringilla dolor.
                                    Duis eget imperdiet nisl. Sed quis convallis felis. Donec varius dictum purus, at
                                    ullamcorper eros dictum venenatis. Pellentesque dictum dictum quam vitae
                                    laoreet.</p>
                                <div className={styles.numbersRow}>
                                    <div className={styles.numbersColumn}>
                                        <h3>250+</h3>
                                        <p>MOVIE PRODUCTION</p>
                                    </div>
                                    <div className={styles.numbersColumn}>
                                        <h3>78+</h3>
                                        <p>MUSIC VIDEO</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className={styles.secondSection}>
                    <div className={styles.secondSectionContent}>
                        <div className={styles.title}>
                            <SectionTitle heading="PORTFOLIO" title="FEATURED PROJECT" centered={false}/>
                        </div>

                        <div className={styles.vidBlock}>
                            <div className={styles.imgBlock}>
                                <img src="/images/leftVid.png" alt="video"/>
                            </div>
                            <div className={styles.imgBlock}>
                                <img src="/images/rightVid.png" alt="video"/>
                            </div>
                            <div className={styles.playVideoBlock}>
                                {secondVideoState ?
                                    null
                                    :
                                    <div className={styles.playBtn} onClick={handleSecondVideoOpen}>
                                        <Play weight="fill"/>
                                    </div>
                                }
                                {secondVideoState ?
                                    <iframe

                                        src="https://www.youtube.com/embed/FK2RaJ1EfA8?si=FOQtd0sSXQigpqvb&autoplay=1"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                                        className={styles.iFrame}
                                    >
                                    </iframe>
                                    :
                                    null
                                }


                            </div>
                        </div>

                        <div className={styles.textContainer}>

                            <div className={styles.textBlock}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus velit,
                                    iaculis quis mauris et, dignissim hendrerit ex. Nulla ultrices vel tellus lacinia
                                    pharetra. Integer commodo ligula lobortis sapien vehicula placerat eu id tellus. Ut
                                    faucibus neque eget dui rutrum, in hendrerit diam euismod. Nam congue diam nulla,
                                    vitae sagittis lorem bibendum eu. Curabitur eu ex pulvinar massa convallis
                                    ornare.</p>
                            </div>
                            <div className={styles.textBlock}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper mattis, pulvinar dapibus leo. Proin interdum dignissim maximus. Interdum
                                    et malesuada fames ac ante ipsum primis in faucibus.</p>
                                <div className={styles.buttonsRow}>
                                    <div className={styles.button}>
                                        <a>SEE ALL PROJECTS</a>
                                    </div>
                                    <div className={styles.button}>
                                        <a>START THE PROJECT<ArrowRight/></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className={styles.thirdSection}>
                    <div className={styles.overlay}></div>
                    <div className={styles.thirdSectionContent}>
                        <div className={styles.title}>
                            <SectionTitle heading="SERVICES" title="WHAT SERVICE WE OFFER ?" centered={true}/>
                        </div>


                        <div className={styles.servicesRow}>

                            {servicesData.map(service => (
                                <div key={service.id} className={styles.service}>
                                    <div className={styles.iconBlock}>
                                        {iconData[service.icon]}
                                    </div>
                                    <div className={styles.textBlock}>
                                        <h5>{service.title}</h5>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                <section className={styles.fourthSection}>
                    <div className={styles.fourthSectionContent}>
                        <div className={styles.textImgContainer}>
                            <div className={styles.textBlock}>
                                <div className={styles.title}>
                                    <SectionTitle heading="STORY" title="STORY BEHIND CINESTAR" centered={false}/>
                                </div>
                                <p>Aliquam ex lacus, venenatis id finibus ut, scelerisque at felis. Nulla facilisi. Sed
                                    fringilla enim consectetur cursus euismod. Sed vel magna in ex malesuada rhoncus ac
                                    a turpis.</p>
                                <p>” Vivamus quam lectus, facilisis a massa facilisis, imperdiet maximus nunc. Integer
                                    ut metus eget lectus imperdiet pulvinar in ac urna “</p>
                                <h5>DYAS KARDINAL</h5>
                                <span>CEO OF CINESTAR</span>
                            </div>
                            <div className={styles.imgBlock}>
                                <img src="https://html.rometheme.pro/cinestar/image/image-900x600-4.jpg"
                                     alt="CameraMan"/>
                            </div>
                        </div>

                    </div>
                </section>

                <section className={styles.fifthSection}>
                    <div className={styles.fifthSectionContent}>
                        <SectionTitle heading="TESTIMONIAL" title="WHAT THEY SAY ABOUT OUR STUDIO ?" centered={true}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className={styles.reviewSwiper}>
                            <Swiper
                                slidesPerView={slidesPerView}
                                spaceBetween={25}
                                className="mySwiper"
                                loop={true}
                            >
                                {reviewData.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id}>
                                            <div className={styles.reviewBlock}>
                                                <div className={styles.rating}>
                                                    <Star weight="fill"/>
                                                    <Star weight="fill"/>
                                                    <Star weight="fill"/>
                                                    <Star weight="fill"/>
                                                    <Star weight="fill"/>
                                                </div>
                                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
                                                    fames
                                                    ac turpis egestas. Quisque eget metus id eros varius venenatis ut
                                                    sed
                                                    mauris. Aliquam tempus</p>
                                                <div className={styles.designation}>
                                                    <div className={styles.name}>
                                                        <h5>{data.name}</h5>
                                                        <span>Desingnation</span>
                                                    </div>
                                                    <div className={styles.iconBlock}>
                                                        <Quotes weight="fill"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                        </div>
                    </div>
                </section>

                <section className={styles.sixSection}>
                    <div className={styles.overlay}></div>
                    <div className={styles.sixSectionContent}>
                        <div className={styles.inputTextContainer}>
                            {/*LEFT BLOCK*/}
                            <div className={styles.block}>
                                <div className={styles.inputGrid}>
                                    <input type="text" placeholder="First Name"/>
                                    <input type="text" placeholder="Last Name"/>
                                    <input type="email" placeholder="Email"/>
                                    <input type="text" placeholder="Subject"/>
                                </div>
                                <textarea className={styles.message}></textarea>
                                <div className={styles.button}>
                                    <a>Send Message</a>
                                </div>
                                <p>Hope you doing well </p>
                            </div>
                            {/*RIGHT BLOCK*/}
                            <div className={styles.block}>
                                <div className={styles.title}>
                                    <SectionTitle heading="CONTACT" title="REQUEST CALL BACK"/>
                                </div>
                                <p>Hello world. Lemme introduce myself. <br/> My name is Gasımov Orkhan, and this is my
                                    second
                                    project on REACT. <br/> Now I am studying in Baku at Garage Academy on FrontEnd, I
                                    like it and I think I'm doing well at this. <br/>
                                    Here are some links you can follow and contact me. <br/> Thank you for appreciating
                                    my work.</p>
                                <div className={styles.contactGrid}>
                                    <a href="whatsapp://send?phone=+994517468773" target="_blank"
                                       className={styles.contact}>
                                        <WhatsappLogo weight="fill"/> <span>+994-51-746-87-73</span>
                                    </a>
                                    <a href="https://www.instagram.com/orkcel/" target="_blank"
                                       className={styles.contact}>
                                        <InstagramLogo weight="fill"/> <span>@orkcel</span>
                                    </a>
                                    <a href="mailto:orkcel@yandex.com" target="_blank" className={styles.contact}>
                                        <EnvelopeSimple weight="fill"/> <span>orkcel@yandex.com</span>
                                    </a>
                                    <a href="https://github.com/orkcel" target="_blank" className={styles.contact}>
                                        <GithubLogo weight="fill"/> <span>@orkcel</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.seventhSection}>
                    <div className={styles.seventhSectionContent}>
                        <div className={styles.textContainer}>
                            <SectionTitle heading="BLOG" title="OUR LATEST BLOG"
                                          centered={false}/>
                            <div className={styles.textBlock}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet
                                    nisi nec pellentesque. Ut vitae metus blandit, ornare dolor at, pretium ligula. Sed
                                    dapibus tortor nisl, quis pretium metus finibus ac.</p>
                            </div>
                        </div>
                        <div className={styles.cardsWrapper}>
                            {
                                blogCardsData.map((data)=>{
                                    return (
                                        <div key={data.id} className={styles.card}  >
                                            <div className={styles.imgBlock}>
                                                <img src={data.image} alt="blogImg"/>
                                            </div>
                                            <div className={styles.cardText}>
                                                <h5>{data.title}</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                    lacinia sit amet
                                                    nisi nec pellentesque.…</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}