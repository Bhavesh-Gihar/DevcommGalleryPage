import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

const ASMEgallery = ({galleryImages}) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        console.log("clicked");
        setSlideNumber(index);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
    }

    const nextSlide = () => {
        slideNumber === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
    }

    return (
        <div>
            {
                openModal && 
                <div class="fixed top-0 left-0 right-0 bottom-0 flex flex-row items-center justify-center z-50">
                    <div>
                        <FontAwesomeIcon class="h-10 w-10" icon={faCircleXmark} onClick={handleCloseModal} />
                        <FontAwesomeIcon class="h-10 w-10" icon={faCircleChevronLeft} onClick={prevSlide} />
                        <FontAwesomeIcon class="h-10 w-10" icon={faCircleChevronRight} onClick={nextSlide}/>
                    </div>
                    <div class="fullScreenImage">
                        <img src={galleryImages[slideNumber].img} alt="" />
                    </div>
                </div>
            }
            <div className="App max-w-[1200px] py-5 text-black mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5 mt-[100px]">
                {
                    galleryImages && galleryImages.map((slide, index) => {
                        return(
                            <div class="shadow-lg rounded" key={index} onClick={() => handleOpenModal(index)}>
                                <div class="overflow-hidden rounded">
                                    <img src={slide.img} alt="ok" class="hover:scale-125 duration-1000"/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ASMEgallery