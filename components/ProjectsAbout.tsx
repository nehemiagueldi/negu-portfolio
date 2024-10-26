import React from 'react'
import { Card, Carousel } from './ui/AppleCardsCarousel'
import Image from 'next/image';

const ProjectsAbout = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="py-20">
      <h1 className="heading">
        My {' '}
        <span className="text-purple">Projects</span>
      </h1>
      <div className="w-full h-full">
        <Carousel items={cards} />
      </div>
    </div>
  )
}

type DummyContentProps = {
  contentText: string;
  imageSrc: string;
};

const DummyContent: React.FC<DummyContentProps> = ({ contentText, imageSrc }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {/* <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "} */}
              {contentText}
            </p>
            <Image
              src={imageSrc}
              alt="Mockup"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-5"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "HireHub",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:( 
      <>
        <DummyContent
          contentText="This project was the Top 20 Product-Based Capstone Project and was made to fulfill the graduation requirements of the Bangkit 2023 H1 program.
          HireHub serves as a talent search and recruitment platform, connecting job seekers with employers. Job seekers can easily create online profiles by uploading their resumes and await relevant job offers."
          imageSrc="/about/hirehub/hirehubprofile.jpg"
        />
        <DummyContent
          contentText="Our in-app recommenders system assists employers in finding the best candidates based on specific criteria. Additionally, HireHub includes a messaging feature to enhance the recruitment experience and facilitate communication between employers and candidates. By leveraging advanced features like CV processing and recommenders, HireHub aims to modernize and improve the recruitment process."
          imageSrc="/about/hirehub/hirehubrewind.png"
        />
        <DummyContent
          contentText="One of my notable achievements is the creation of HireHub as part of the Bangkit 2023 H1 program. HireHub was inspired by the time-consuming and labor-intensive process of CV filtering in companies. To address this challenge, we developed an application that offers recommenders for companies and automates online profile generation through CV text processing. This significantly reduces HR workload and ensures consistency between CVs and online profiles."
          imageSrc="/about/hirehub/hirehubtopperformer.png"
        />
      </>
    ),
  },
  {
    category: "Productivity",
    title: "Portfolio Starterpack",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:( 
      <>
        <DummyContent
          contentText="The Portfolio tarterpack is a pre-built template designed to simplify the process of creating a professional and visually appealing portfolio website. This ready-to-use template combines the power of HTML and the flexibility of the TailwindCSS framework, making it an ideal choice for both beginners and experienced developers."
          imageSrc="/about/portfoliostarterpack/pshome.png"
        />
        <DummyContent
          contentText="With this starterpack, you can kickstart your own portfolio website without the need for extensive coding knowledge. It provides a fantastic toolkit that includes essential features and components to showcase your work and skills effectively."
          imageSrc="/about/portfoliostarterpack/psprojects.png"
        />
        <DummyContent
          contentText="Whether you&apos;re just starting or looking to revamp your portfolio website, the Portfolio Starterpack provides a convenient and customizable solution, empowering you to create an impressive online presence with minimal effort."
          imageSrc="/about/portfoliostarterpack/psarticles.png"
        />
      </>
    ),
  },
  {
    category: "Product",
    title: "Happy Work",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:( 
      <>
        <DummyContent
          contentText="This web application, &apos;Random Name Food Generator with CRUD Functionality&apos; allows users to generate random food dish names from a pre-registered list or their own input. It features a user-friendly interface built with HTML, CSS, and JavaScript."
          imageSrc="/about/happywork/hwhome.png"
        />
        <DummyContent
          contentText="Users have the option to generate a random food dish name from the existing list or contribute their own dishes. Adding a new dish is simple enter the dish name and click &apos;Add Menu&apos; and it will be included in the registered list for future random name generation."
          imageSrc="/about/happywork/hwmenu.png"
        />
        <DummyContent
          contentText="The application stores dish data in the browser&apos;s local storage, ensuring that the information remains accessible even if the browser window is closed. To use the application, click the &apos;Randomize&apos; button to generate a random food dish name. To add a new dish, click &apos;Add Menu&apos; and enter the dish name in the input field, followed by clicking &apos;Add Menu&apos; to add it to the list."
          imageSrc="/about/happywork/hwrandomize.png"
        />
      </>
    ),
  },

  {
    category: "Product",
    title: "Kota Bogor",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:( 
      <>
        <DummyContent
          contentText="Kota Bogor is a final project developed for the dicoding basic web programming course. It is a comprehensive website providing information about Bogor City, covering it&apos;s history, tourist destinations, and more. The goal is to offer a one-stop platform for anyone seeking to explore Bogor City."
          imageSrc="/about/kotabogor/kbhome.png"
        />
        <DummyContent
          contentText="The header displays the current time and date, the city&apos;s name in different languages, and a randomly generated brief description of Bogor City upon page refresh. The header also includes a navigation bar for easy content browsing. The main section provides in-depth information about the history, culinary delights, and tourist attractions of Bogor City, organized in card format."
          imageSrc="/about/kotabogor/kbabout.png"
        />
        <DummyContent
          contentText="To enhance user experience, a slider is implemented for showcasing the tourist attractions. Additionally, an aside section presents personal biodata. The footer provides links to Bogor City&apos;s social media platforms (YouTube, website, Twitter, Facebook), enabling users to explore more about the city."
          imageSrc="/about/kotabogor/kbfooter.png"
        />
      </>
    ),
  },
  {
    category: "iOS",
    title: "Pokédex NG",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:( 
      <>
        <DummyContent
          contentText="Pokédex NG is a web application that offers a comprehensive and immersive experience for Pokémon enthusiasts. Powered by React, this Pokédex leverages the PokeAPI to provide users with in-depth information about their favorite Pokémon species. From types and abilities to moves and stats, Pokédex NG is your go-to resource for exploring the vast world of Pokémon."
          imageSrc="/about/pokedex/pnhome.png"
        />
        <DummyContent
          contentText="TWith Pokédex NG, you can browse and search for information on various Pokémon. Each Pokémon entry includes essential details such as images, names, types, height, weight, abilities, moves, and stats. This wealth of information allows you to gain a deeper understanding of each Pokémon&apos;s characteristics and capabilities."
          imageSrc="/about/pokedex/pnmain.png"
        />
        <DummyContent
          contentText="The app also features a &apos;My Pokémon&apos; section, where you can add your favorite Pokémon to your personal collection. Keep track of your most cherished Pokémon and access their information easily whenever you want."
          imageSrc="/about/pokedex/pnmypokemon.png"
        />
      </>
    ),
  },
  {
    category: "Hiring",
    title: "NG Store",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:( 
      <>
        <DummyContent
          contentText="NG STORE is your go-to online shop for all your shopping needs. With a diverse range of products, including homes and used goods, we prioritize safety and quality. Our website offers a seamless shopping experience, providing clear specifications, direct communication options, and multiple themes to suit your preferences."
          imageSrc="/about/ngstore/ngstorewelcome.png"
        />
        <DummyContent
          contentText="NG STORE is an exceptional online marketplace offering a diverse selection of products, including homes and preloved items, directly sourced from my family. Our commitment to quality and genuineness ensures a confident shopping experience, as each item is meticulously chosen and backed by our family&apos;s guarantee."
          imageSrc="/about/ngstore/ngstorehome.png"
        />
        <DummyContent
          contentText="Visit NG STORE now and enjoy a delightful shopping experience. Explore our wide range of products, personalize your theme, and make direct contact with sellers. With NG STORE, shopping has never been easier or more enjoyable!"
          imageSrc="/about/ngstore/ngstorefaq.png"
        />
      </>
    ),
  },
];

export default ProjectsAbout