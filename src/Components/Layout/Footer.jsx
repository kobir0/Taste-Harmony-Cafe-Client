// @ts-nocheck
import { GrFacebook, GrTwitter, GrLinkedin } from "react-icons/gr";
import Container from "../UI/Container";
const Footer = () => {
  return (
    <div className="bg-[#222222] text-white pt-20">
      <Container>
        <div>
          <div className="flex justify-between gap-10">
            <div>
              <h1 className="text-xl font-semibold mb-2">TasteHarmony Cafe</h1>
              <p className="max-w-[35ch] font-medium">
                Experience the Art of Culinary Excellence at TasteHarmony Cafe.
                From our carefully crafted dishes to our warm and inviting
                atmosphere, we are dedicated to creating moments of gastronomic
                delight that will linger in your memory..
              </p>
              <div className="flex gap-5 text-3xl text-[#C59D5F] mt-10">
                <GrFacebook className="cursor-pointer" />
                <GrLinkedin className="cursor-pointer" />
                <GrTwitter className="cursor-pointer" />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">Navigations</h1>
              <div className="flex items-center gap-2">
                <div className="bg-[#C59D5F] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  FAQs
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#C59D5F] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  Privacy Policy
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#C59D5F] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  Terms & Conditions
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">Company</h1>
              <div className="flex items-center gap-2">
                <div className="bg-[#C59D5F] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  About
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#C59D5F] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  Team
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#C59D5F] w-4 h-4 rounded-full grid place-content-center">
                  <div className="bg-white w-2 h-2 rounded-full"></div>
                </div>
                <p className="cursor-pointer hover:underline font-medium">
                  Contact
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-bold mb-2">Contact Information</h1>
              <p className="font-medium">Mohakhali, Dhaka 1212.</p>
              <p className="font-medium">+019 123 456 78</p>
              <p className="font-medium">info@tasteHarmony.cafe.com</p>
            </div>
          </div>
          <div className="divider"></div>
          <p className="mt-6 mb-10">
            Copyright © 2023 TasteHarmony Cafe. | Powered by TasteHarmony Cafe.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
