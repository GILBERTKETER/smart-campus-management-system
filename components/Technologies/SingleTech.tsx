import { Technologies } from "@/types/technologies";
import { motion } from "framer-motion";

const SingleBrand = ({ tech }: { tech: Technologies }) => {
  const { image, href, id } = tech;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative block h-15 w-[98px]"
      >
        {/* <Image
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image}
          alt={name}
          fill
        /> */}
        <p className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden">
          {image}
        </p>
        {/* <Image
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          fill
        /> */}
      </motion.a>
    </>
  );
};

export default SingleBrand;
