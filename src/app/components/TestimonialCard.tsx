import Testimonial from "../components/Testimonial";

export default function TestimonialCard() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
      <Testimonial
        author="Nichole Micihigan"
        handle="@nicholemichigan"
        blurb="I've been looking for a cool smartwatch. And here I found one with top quality and an affordable price.!"
        imageSrc="/customer/customer1.webp"
        imageAlt="Headshot of Nichole Michigan"
      />
      <Testimonial
        author="Dony Setiyawan"
        handle="@donysetiyawan"
        blurb="The watches here are absolutely stunning. The features are top-notch. It's truly a pleasure to shop for cool watches at the Infinity Smartwatch Store.!"
        imageSrc="/customer/customer2.jpg"
        imageAlt="Headshot of Dony Setiyawan"
      />
      <Testimonial
        author="Suryo Saputro"
        handle="@nsuryosaputro"
        blurb="Wow... one word. SATISFACTORY!!! Buy a smartwatch at the Infinity Smartwatch store. There are many choices and an extraordinary guarantee. Thank you Infinity Smartwatch for providing quality products that are certainly comfortable to wear.!"
        imageSrc="/customer/customer3.webp"
        imageAlt="Headshot of Suryo Saputro"
      />
    </div>
  );
}
