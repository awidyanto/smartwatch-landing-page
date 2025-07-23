import Image from "next/image";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

type TestimonialProps = {
  author: string;
  handle: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
};

const Testimonial = ({ author, handle, blurb, imageSrc, imageAlt }: TestimonialProps) => {
  return (
    <section
      className={`${notoSans.className} bg-white p-6 rounded-lg flex flex-col border border-neutral-200 gap-4 shadow-md mx-auto`}
      role="complementary"
    >
      <header className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={48}
          height={48}
          className="rounded-full"
          priority={true}
        />
        <div className="flex flex-col gap-1 overflow-hidden">
          <h2 className="text-lg text-neutral-900 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {author}
          </h2>
          <p className="text-sm text-neutral-600 whitespace-nowrap overflow-hidden text-ellipsis">
            {handle}
          </p>
        </div>
      </header>
      <blockquote
        className="text-neutral-600 text-base overflow-hidden text-ellipsis"
        aria-label="testimonial"
      >
        <p>{blurb}</p>
      </blockquote>
    </section>
  );
};

export default Testimonial;
