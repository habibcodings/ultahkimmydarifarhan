import Navbar from "./components/Navbar";
import heroImg from "./assets/pics/17.jpg";
import { Info } from "lucide-react";
import { FaPlay } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import CardImage from "./components/CardImage";
import { images } from "./constants/images";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const Button = ({ children, variant, ...rest }) => {
    return (
      <button
        className={`flex items-center gap-2 p-3 px-7 rounded-lg font-semibold active:scale-90 duration-300 ease-in-out ${variant == "primary" && "bg-white text-black "
          } ${variant == "secondary" && "bg-white/30 text-white"}`}
        {...rest}
      >
        {children}
      </button>
    );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex justify-center items-end"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full max-w-screen-2xl px-5 lg:px-10 mb-[5%] flex flex-col gap-3 lg:gap-5 z-10 text-white ">
          <h1
            className="lg:text-4xl text-2xl font-bold lg:w-[50%]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Happy Birthday, Kimmy.
          </h1>
          <p
            className="text-sm lg:text-base lg:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            This is how Farhan, someone you might know, expresses
            admiration. From a distance, he's watched your light grow brighter,
            hoping one day you'd notice. But for now, this is how Farhan says
            happy birthday to You
          </p>
          <p data-aos="fade-right" data-aos-duration="1300">
            Click "Play" to see Details
          </p>
          <div
            className="actions flex items-center gap-3"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Button variant={"primary"} onClick={() => setOpenModal(true)}>
              <FaPlay />
              Play
            </Button>
            <Button variant={"secondary"}>
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-black text-white">
        <div className="py-5 lg:py-10 flex flex-col gap-5 px-5 lg:px-10 max-w-screen-2xl">
          <h3 className="font-semibold text-xl">More to Explore : Us</h3>
          <section className=" grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-5">
            {images.map((image, idx) => (
              <CardImage src={image.src} key={idx} idx={idx} />
            ))}
          </section>
        </div>
      </section>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[250px] lg:h-[450px] "
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black" />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 p-5 text-white">
          <h1 className="font-bold text-2xl">A Heartfelt Message for Janey's 22nd Birthday </h1>
          <p>Happy 22nd Birthday, my dearest Janey! 🎉🎂</p>
          <p>
            I can't believe another year has flown by, and you're a year older and wiser.
            You've always been such an incredible person, and I'm so lucky to have you in my life.
            You're not just my girlfriend; you're my best friend, my confidante, and my biggest supporter.
            You have a unique way of making me laugh, making me think, and making me feel loved.
            Your infectious laughter and kind heart brighten up even the darkest days.🥳🥰
          </p>

          <p>
            I admire your passion for English literature.
            Your love for words is inspiring, and I can't wait to see you grow as a writer.
            You have a gift for storytelling and a knack for capturing emotions in your writing.
            I have no doubt that you'll become an amazing copywriter one day.
          </p>

          <p>
            Remember, Janey, you're capable of achieving anything you set your mind to.
            You have the intelligence, the creativity, and the determination to succeed.
            Don't be afraid to chase your dreams, no matter how big or small they may seem.
            I'll always be here to cheer you on and support you every step of the way.
            As you embark on this new chapter of your life, I hope you'll continue to be the wonderful person you are.
            May you always find joy in the little things, and may your days be filled with love, laughter, and success.
          </p>

          <p>
            Here's to many more birthdays filled with happiness and love! 🥂❤️
          </p>

          <p>
            A Few More Things I Admire About You🌼🤍:
          </p>

          <p>1. Your intelligence: You're incredibly smart and always have something interesting to say.👩‍💻💯
            <br />
            2. Your creativity: Your mind is always buzzing with new ideas.🎨💡
            <br />
            3. Your kindness: You have a heart of gold and always go out of your way to help others.💌📑
            <br />
            4. Your sense of humor: You can always make me laugh, even on the toughest days.😹🧁
            <br />
            5. Your passion for learning: You're always eager to learn new things.🧸📓
          </p>

          <p>
            A Special Message for Your Future as a Copywriter🖥️🖱️🖨️:
          </p>

          <p>
            I know you've always dreamed of becoming a copywriter, and I'm so excited to see where your career takes you.
            You have a unique voice and a talent for crafting compelling stories.
            I can't wait to read your work and see your name on billboards and magazine covers.
          </p>

          <p>
            Remember, the best copywriters are those who can connect with their audience on an emotional level.
            Don't be afraid to let your personality shine through in your writing.
            And always strive to write with clarity, conciseness, and creativity.
          </p>

          <p>I believe in you, Janey.
            You have the potential to be one of the best copywriters in the world.
            Just keep writing, keep learning, and never give up on your dreams.
          </p>

          <p>A Little Something Extra:</p>
          <p>Here's a poem I wrote for you:</p>

          <p>A sparkling soul, a brilliant mind,
            <br />
            A heart so pure, so kind and fine.
            <br />
            A future bright, a path ahead,
            <br />
            With every step, may joy be spread.
            <br />
          </p>

            <p>Happy Birthday, my love! 🎁🎈</p>
            <p>
              With all my love,
              <br />
              Farhan
            </p>
          </div>
          </Modal>
          </main>
          );
}

          export default App;
