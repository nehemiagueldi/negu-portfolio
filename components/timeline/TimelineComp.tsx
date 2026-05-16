import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/Timeline";
import { Spotlight } from "../ui/Spotlight";
import { LinkPreview } from "../ui/LinkPreview";
import { AnimatedTooltip } from "../ui/AnimatedTooltip";
import { amartekteam } from '@/data'

const TimelineComp = () => {
  return (
    <div className="pb-20 pt-20 md:pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="aqua" />
        <Spotlight className="top-10 left-full h-[60vh] md:h-[100vh] lg:h-[150vh] w-[60vw]" fill="MediumSeaGreen" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[60vw] lg:w-[50vw]" fill="olive" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <Timeline data={dataTimeline} />
    </div>
  );
};

const dataTimeline = [
  {
    title: "2025",
    content: (
      <div>
        {/* EXPERIENCE 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">
          <LinkPreview url="https://www.muf.co.id" imageSrc="/timeline/muf/muf.png" isStatic className="hover:no-underline underline transition opacity-100 hover:opacity-60 duration-300 decoration-neutral-300">
            PT Mandiri Utama Finance 
          </LinkPreview>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Contract | 1 year 10 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Indonesia | On-Site</p>
        {/* POSITION 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">ICT Operation Programmer</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">Jan 2025 - Nov 2026 | 1 year 10 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
          Mandiri Utama Finance (MUF) is a financing company which is a subsidiary of one of the largest banks in Indonesia, namely Bank Mandiri Tbk. MUF&apos;s business orientation is to increase customer volume and significant financing, supported by integrated system automation. As a holding company, Bank Mandiri Tbk will support the business development of all subsidiaries as part of the Mandiri Group&apos;s integration strategy through an extensive business network with a large customer base to synergize all subsidiaries under the Mandiri Group.
        </p>
        {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
          Through this program, participants are prepared to become future IT consultants by working in a collaborative and diverse environment that encourages teamwork, adaptability, and continuous learning. Amartek believes that different backgrounds and perspectives create stronger teams and help achieve greater business goals, making the program a valuable stepping stone for graduates who want to grow, gain real industry exposure, and make an impact in the technology field.
        </p> */}
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Main responsibilities:</p>
        <div className="mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Oversee and manage the organization’s data and information to ensure accessibility, accuracy, and security.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Analyze and evaluate the information needs of the organization to ensure proper tools and systems are in place for efficient data usage and decision-making.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Utilize tools for effective database management and maintenance, ensuring data is organized and accessible.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Extract data from multiple sources, transform it into standardized formats, and load it into target systems to support reporting and analytics.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Design and maintain data workflows and validation processes to ensure data consistency, integrity, and reliability across systems.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/timeline/muf/firstday.jpeg" alt="muf firstday" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/muf/birthday.jpeg" alt="muf birthday" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/muf/birthday2.jpeg" alt="muf birthday" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/muf/badmin.jpeg" alt="muf badmin" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        {/* EXPERIENCE 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">
          <LinkPreview url="https://www.amartek.id" imageSrc="/timeline/amartek/amartek.png" isStatic className="hover:no-underline underline transition opacity-100 hover:opacity-60 duration-300 decoration-neutral-300">
            PT Bumi Amartha Teknologi Mandiri 
          </LinkPreview>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Contract | 2 year</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Indonesia | Hybrid</p>
        {/* POSITION 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">IT Graduate Development Program</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">Nov 2024 - Nov 2026 | 2 year</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
          Amartek&apos;s IT Graduate Development Program attract graduates from top-tier universities who are enthusiastic about professional development and aspire to work in a quick-changing and challenging IT industry. The program provides opportunities to strengthen critical technical and professional skills while receiving direct mentoring from senior managers and experienced IT trainers. During the 2-year program, participants will also have the opportunity to be assigned to various clients, allowing them to gain hands-on experience, adapt to different working environments, and expand their professional network in the IT industry.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
          Through this program, participants are prepared to become future IT consultants by working in a collaborative and diverse environment that encourages teamwork, adaptability, and continuous learning. Amartek believes that different backgrounds and perspectives create stronger teams and help achieve greater business goals, making the program a valuable stepping stone for graduates who want to grow, gain real industry exposure, and make an impact in the technology field.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Main responsibilities:</p>
        <div className="mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Learned and explored about basic programming (full stack).</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Explored and learned about Java Fundamental (data types, variables, constants, statements, flow control, looping, void/non-void, array, and list data structure).</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Explored and learned about OOP Concept (apply programming elements classes and object, structure form, implement access modifiers, encapsulation and constructor, inheritance of properties, overriding and overloading, abstraction).</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Explored and learned about PL/SQL (advantage, type, structure block and the difference).</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Explored and learned about Java Generic, Java Collection, Java Stream, and Java Database Connectivity (JDBC).</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Understand and use the Spring Boot framework.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Learned about concept of Unit testing and versioning AAA (Arrange-Act-Assert), Software Development Life Cycle (SDLC), Entity Relationship Diagram (ERD), Unified Modeling Language (UML), Business Process Modeling Notation (BPMN), Model, view and controller.</p>
        </div>
        {/* <div className="flex flex-row items-left justify-left mb-10 w-full">
          <AnimatedTooltip items={amartekteam} />
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          <Image src="/timeline/amartek/teamate.jpg" alt="amartek teamate" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/amartek/team.jpg" alt="amartek team" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/amartek/team1.jpg" alt="amartek team" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/amartek/team2.jpg" alt="amartek team" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        {/* EXPERIENCE 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">
          <LinkPreview url="https://www.linkedin.com/company/hirehub-indonesia" imageSrc="/timeline/hirehub/hirehubplaystore.jpeg" isStatic className="hover:no-underline underline transition opacity-100 hover:opacity-60 duration-300 decoration-neutral-300">
            HireHub
          </LinkPreview>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Self-employed | 1 year 7 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Indonesia | Remote</p>
        {/* POSITION 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">Chief Technology Officer (CTO)</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">May 2023 - Aug 2024 | 1 year 4 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
          HireHub is a talent search and recruitment platform designed to connect job seekers with potential employers efficiently. This application allows job seekers to easily create an online profile by uploading their resume, after which they can receive job offers from companies. Employers can search for candidates, and our in-app recommender system assists in finding the best matches based on specified criteria.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">Additionally, HireHub offers a messaging feature to enhance communication between employers and candidates, aiming to elevate the recruitment process with advanced features like automatic CV processing and a recommender system to streamline candidate selection for specific roles.</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Main responsibilities:</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">▪ Responsible for the development and maintenance of the company&apos;s technology infrastructure, implementation of product development, and maintaining information technology security and compliance.</p>
        {/* POSITION 2 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">Cloud Developer</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">Feb 2023 - Aug 2024 | 1 year 7 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Main responsibilities:</p>
        <div className="mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Manage and maintain cloud-based databases to ensure optimal performance and security.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Develop and maintain backend systems to support various applications and services.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Utilize cloud storage solutions, such as buckets, for efficient data management.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Execute Python scripts and applications from the backend to perform necessary computations and processes.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Develop and manage APIs to facilitate communication between different services and systems.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Deploy and manage backend applications on cloud platforms to ensure scalability, reliability, and high availability.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/timeline/hirehub/hirehubprofile.jpg" alt="hirehub profile" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/hirehub/hirehubtop3.jpg" alt="hirehub top 3" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/hirehub/hirehubtopperformer.png" alt="hirehub top performer" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/hirehub/hirehubrewind.png" alt="hirehub rewind" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        {/* EXPERIENCE 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">
          <LinkPreview url="https://www.helios.id" className="hover:no-underline underline transition opacity-100 hover:opacity-60 duration-300 decoration-neutral-300">
            PT Helios Informatika Nusantara
          </LinkPreview>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Internship | 6 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Centennial Tower Lt. 12 Jl. Gatot Subroto No.24-25, Jakarta Selatan | On-site</p>
        {/* POSITION 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">Developer</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">Aug 2023 - Feb 2024 | 6 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">
          PT Helios Informatika Nusantara (Helios), a member of PT Computrade Technology International (CTI Group), was established in 2014 as an IT Value Added Distributor (VAD). Collaborating with leading global IT companies, Helios is dedicated to providing rapidly evolving, cutting-edge technology and innovative infrastructure solutions, including servers, storage, and networking, tailored to meet the demands of modern businesses. Helios committed to delivering and assisting our clients in
          obtaining the most innovative solutions for their business needs.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Main responsibilities:</p>
        <div className="mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Focuses on front-end website development, ability to create mobile-first and responsive web designs.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Contributions to improving user interfaces and user experiences.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Collaborate with back-end developers to integrate RESTful APIs and work with JSON data.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Independently develop features or components.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Identified and resolved front-end issues and bugs, ensuring smooth functionality.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Participated in regular team meetings and contributed to project planning and brainstorming sessions.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Involvement in peer code reviews to maintain code quality and share knowledge.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Image src="/timeline/helios/heliosbadminton.jpg" alt="helios badminton" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/helios/helios_w1.jpg" alt="helios w1" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/helios/helios_w2.jpg" alt="helios w2" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/helios/helios_w3.jpg" alt="helios w3" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        </div>
        {/* EXPERIENCE 2 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">
          <LinkPreview url="https://grow.google/intl/id_id/bangkit/" className="hover:no-underline underline transition opacity-100 hover:opacity-60 duration-300 decoration-neutral-300">
            Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
          </LinkPreview>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Full-time | 6 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Indonesia | Remote</p>
        {/* POSITION 2 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">Cloud Computing Cohort - Bangkit 2023 Batch 1</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">Feb 2023 - Jul 2023 | 6 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 text-justify">The Bangkit 2023 Batch 1 Program is a technology-based learning initiative that aims to develop student&apos;s skills in areas such as cloud engineering, machine learning, and mobile development. It is fully supported by world-class Indonesian technology companies and startups affiliated with Merdeka Belajar Kampus Merdeka (MBKM), including Google, GoTo, and Traveloka.</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Main responsibilities:</p>
        <div className="mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Regularly attending and actively engaging in mandatory sessions.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Successfully completing the self-paced learning materials.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Submitting original assignments and projects.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Fulfilling all the designated assignments provided by Bangkit.</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Making significant contributions to the Capstone Project.</p>
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Technical Material:</p>
        <div className="mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Fundamentals of Software Developer - Dicoding</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Programming Logic 101 - Dicoding</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Git Fundamental with GitHub - Dicoding</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Belajar Dasar Pemrograman JavaScript - Dicoding</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Belajar Dasar Pemrograman Web - Dicoding</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Google IT Support Professional Certificate (The Bits and Bytes of Computer Networking) - Coursera</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Google Cloud Computing Foundations - Google Cloud Skill Boost</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud - Dicoding</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Google IT Support Professional Certificate (System Administration and IT Infrastructure Services) - Coursera</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Cloud Engineer Learning Path - Google Cloud Skill Boost</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Menjadi Google Cloud Engineer - Dicoding</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Google Cloud Skills Boost Quest - Google Cloud Skill Boost</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Preparing for Associate Cloud Engineer Certification - Coursera</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Simulasi Ujian Associate Cloud Engineer - Dicoding</p>
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Advanced Technical Class:</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">▪ Menjadi Google Cloud Architect - Dicoding</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Soft Skill Class:</p>
        <div className="mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Growth Mindset and The Power of Feedback</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Time Management</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Critical Thinking and Problem Solving</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Adaptability and Resilience</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Project Management</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Professional Communication and Networking</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">▪ Personal Branding & Interview Communication</p>
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">English Class:</p>
        <div className="mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Spoken Correspondence</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Expressing Opinion</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Business Presentation</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/timeline/bangkit/certificateofcompletion.png" alt="certificate of completion" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/bangkit/certificateofachievement.png" alt="certificate of achievement" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/bangkit/finaltranscript.jpeg" alt="final transcript" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/bangkit/studentlearningachievement.jpeg" alt="student learning achievement" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        {/* EXPERIENCE 2 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">
          <LinkPreview url="https://www.umn.ac.id/" className="hover:no-underline underline transition opacity-100 hover:opacity-60 duration-300 decoration-neutral-300">
            Multimedia Nusantara University
          </LinkPreview>
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Contract | 11 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Multimedia Nusantara University, Tangerang Selatan, Banten | On-site</p>
        {/* POSITION 1 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">Laboratory Assistant</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">Aug 2022 - Dec 2022 | 5 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Courses taught:</p>
        <div className="mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Database System</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Object Oriented Programming</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Introduction to Multimedia Technology</p>
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Laboratory Assistant for Database System. Students are taught about:</p>
        <div className="mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Introduction to Database System</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ ERD, Database Schema, DDL and DML Statements</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ SELECT Statement, JOIN, Set Operator</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Database Security (Create, Update, Drop User, Create privileges for created users)</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Normalization for Relational Databases</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Stored Procedures</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Cursor, Stored Functions, and Triggers</p>
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Laboratory Assistant for Object Oriented Programming. Students are taught about:</p>
        <div className="mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Introduction to Object Oriented Programming</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Control Structure in Java, Array and Enchaned for loops</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Classes and Objects in Java, Inheritance and Polymorphism</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ UML Diagram, Abstraction, Multiple Inheritance</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Final Keyword and Java Typecasting</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Exception Handling, File Handling</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Software Design Pattern</p>
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Laboratory Assistant for Intro to Internet Technology. Students are taught about:</p>
        <div className="mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ HTML, CSS, vanilla Javascript, Jquery</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Javascript Frameworks such as React and Angular</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Image src="/timeline/aslab/databasesystem.jpg" alt="database system" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/aslab/oop.jpg" alt="oop" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <div className="col-span-2 flex justify-center">
            <div className="w-[calc(50%-0.5rem)]">
              <Image src="/timeline/aslab/ptiganjil22.jpg" alt="ptiganjil22" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            </div>
          </div>
        </div>
        {/* POSITION 2 */}
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-bold">Laboratory Assistant</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">Jan 2022 - Jun 2022 | 6 mos</p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Courses taught:</p>
        <div className="mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Introduction to Multimedia Technology</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Algorithm and Data Structures</p>
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Laboratory Assistant for Intro to Internet Technology. Students are taught about:</p>
        <div className="mb-4">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ HTML, CSS, vanilla Javascript, Jquery</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Javascript Frameworks such as React and Angular</p>
        </div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">Laboratory Assistant for Algorithm and Data Structures. Students are taught about:</p>
        <div className="mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Array and Pointer, Structures, Unions, and Enumerations, File Processing</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Linked List, Stack and Queue</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Tree, Efficient Binary Tree</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Hashing, Heaps, Graphs, Advanced Graphs</p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">▪ Sorting, Searching</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src="/timeline/aslab/algostrukdat.jpg" alt="algostrukdat" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <Image src="/timeline/aslab/ptigenap21.jpg" alt="ptigenap21" width={500} height={500} className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
        </div>
      </div>
    ),
  },
];

export default TimelineComp;
