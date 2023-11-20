// @ts-nocheck
import "../Rating/Rating.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @ts-nocheck
const Rating = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="hero h-[800px] ratingbg">
      <div className="overlay">
        <div className="max-w-7xl mx-auto">
          <div className="text-white text-center mt-36 font-dancing my-4">
            <h3 className="text-3xl text-[#C59D5F]">People Talk</h3>
            <h2 className="text-5xl">Our Guestbook</h2>
          </div>
          <div className="mt-20">
            <div>
              <Slider {...settings}>
                <div className="card h-[400px]  text-neutral-content">
                  <div className="card-body items-center text-center space-y-5">
                    <div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p className="text-white">
                      Exceptional dining experience! The food at TasteHarmony
                      Cafe is a culinary masterpiece. Every dish is a work of
                      art, and the flavors are simply outstanding. We will
                      definitely be back for more.
                    </p>
                    <div className="card-actions justify-end">
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            className="h-full"
                            src="https://i.ibb.co/m4p8ZbM/avatar1.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card h-[400px]  text-neutral-content">
                  <div className="card-body items-center text-center space-y-5">
                    <div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p className="text-white">
                      What a gem! TasteHarmony Cafe offers an unforgettable
                      journey of tastes. The atmosphere is cozy, the staff is
                      welcoming, and the dishes are mouthwatering. A must-visit
                      for food enthusiasts.
                    </p>
                    <div className="card-actions justify-end">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          className="rounded-full h-full"
                          src="https://i.ibb.co/c6Dczhq/avatar2.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card h-[400px]  text-neutral-content">
                  <div className="card-body items-center text-center space-y-5">
                    <div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p className="text-white">
                      I cannot get enough of TasteHarmony Cafe! The menu is
                      diverse, and every bite is a burst of flavor. The service
                      is top-notch, and the ambiance is perfect for any
                      occasion. Highly recommended!
                    </p>
                    <div className="card-actions justify-end">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          className="rounded-full h-full"
                          src="https://i.ibb.co/QPXt2z0/avatar3.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card h-[400px]  text-neutral-content">
                  <div className="card-body items-center text-center space-y-5">
                    <div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p className="text-white">
                      A hidden treasure! TasteHarmony Cafe exceeded all our
                      expectations. The attention to detail in every dish is
                      remarkable. It is the kind of place where you savor every
                      bite. We cannot wait to return.
                    </p>
                    <div className="card-actions justify-end">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          className="rounded-full h-full"
                          src="https://i.ibb.co/NmJpzKr/avatar4.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card h-[400px]  text-neutral-content">
                  <div className="card-body items-center text-center space-y-5">
                    <div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p className="text-white">
                      An unforgettable evening at TasteHarmony Cafe. The
                      presentation, taste, and quality of the food are
                      unmatched. The staffs knowledge and passion for food shine
                      through. Truly a culinary delight.
                    </p>
                    <div className="card-actions justify-end">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          className="rounded-full h-full"
                          src="https://i.ibb.co/VjLjBm5/avatar5.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card h-[400px]  text-neutral-content">
                  <div className="card-body items-center text-center space-y-5">
                    <div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                    <p className="text-white">
                      We celebrated our special occasion at TasteHarmony Cafe,
                      and it was magical. The restaurants ambiance, the
                      impeccable service, and the exquisite menu made it an
                      evening to remember. Thank you for the wonderful
                      experience.
                    </p>
                    <div className="card-actions justify-end">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          className="rounded-full h-full"
                          src="https://i.ibb.co/qNrVVg7/avatar6.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
