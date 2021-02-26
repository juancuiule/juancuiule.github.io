import * as React from "react";

const DescriptionItem = (props: {
  text: string;
  emoji: string;
  emojiAlt: string;
}) => (
  <p className="text-gray-600 dark:text-gray-300 flex flex-row items-center my-1">
    <div className="flex items-center justify-items-center sm:flex-row mx-2">
      <img
        className="ml-1 mr-1 inline-flex w-4 h-4"
        src={`/emojis/${props.emoji}.png`}
        alt={props.emojiAlt}
      />
    </div>
    {props.text}
  </p>
);

interface ProjectProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  badges: React.ReactChild;
  imageSrc: string;
  links: {
    text: string;
    href: string;
  }[];
}

const Project = (props: ProjectProps) => {
  const { title, subtitle, description, date, badges, imageSrc, links } = props;
  return (
    <div className="w-full sm:w-full lg:flex-1 lg:w-5/12 bg-white shadow-md px-4 py-4 m-0 border-solid border-2 border-opacity-30 rounded-md border-gray-200 flex flex-col-reverse sm:flex-row">
      <div className="sm:w-4/5 pr-1 flex flex-col">
        <h3 className="font-semibold">
          {title}{" "}
          <span className=" font-normal text-gray-500">
            {" "}
            - {subtitle} ({date})
          </span>
        </h3>
        <p className="my-1">{description}</p>
        <div className="my-1">
          {links.map((link) => (
            <React.Fragment key={link.href}>
              <a
                target="_blank"
                className="text-base text-blue-500 underline hover:text-blue-400"
                href={link.href}
              >
                {link.text}
              </a>{" "}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-auto">
          <p>Tech stack:</p>
          <div className="flex flex-row gap-2 mt-2">{badges}</div>
        </div>
      </div>
      <div className="sm:w-1/5 pb-5 sm:pb-0 flex items-start justify-center">
        <img className="w-full h-auto max-w-xs" src={imageSrc} />
      </div>
    </div>
  );
};

const Badge = (props: {
  bgColor: string;
  text: string;
  textColor?: string;
}) => {
  return (
    <div
      className={`max-w-min px-2 ${props.bgColor} rounded-md ${props.textColor}`}
    >
      {props.text}
    </div>
  );
};

const Index = () => (
  <div className="bg-white dark:bg-gray-800 min-h-screen">
    <header className="flex flex-col items-center p-2 pt-5">
      <img
        className="inline-flex mx-auto h-48 w-48 rounded-full sm:mx-0 sm:flex-shrink-0"
        src="/profile.jpeg"
        alt="Github profile picture"
      />
      <h1 className="py-2 text-xl text-gray-900 dark:text-white font-semibold">
        Juan Ignacio Cuiule
      </h1>
      <div className="flex flex-col items-start sm:items-center">
        <DescriptionItem
          text="Web Development at El Gato y La Caja"
          emoji="man-technologist"
          emojiAlt="Man with computer emoji"
        />
        <DescriptionItem
          text="Studying Systems Engineering at UTN-FRBA"
          emoji="books"
          emojiAlt="Books emoji"
        />
        <DescriptionItem
          text="Buenos Aires, Argentina"
          emoji="flag-argentina"
          emojiAlt="Argentinian flag emoji"
        />
        <div>
          <a
            href="https://github.com/juancuiule"
            target="_blank"
            className="mr-3 text-base text-blue-500 underline hover:text-blue-400 ml-3 sm:ml-0"
          >
            @juancuiule
          </a>
          <a
            href="https://docs.google.com/document/d/1lRFN1HLDPrpj0bue4QghytC4UDh3wOvt4g0uvrpST-A/edit#heading=h.tk538brb1kdf"
            target="_blank"
            className="text-base text-blue-500 underline hover:text-blue-400 ml-3 sm:ml-0"
          >
            CV
          </a>
        </div>
      </div>
    </header>
    <main className="px-4 sm:px-8">
      <section className="mt-12">
        <h1 className="text-4xl font-bold">Latest projects</h1>
        <div className="flex flex-col sm:justify-between mt-6 gap-4 sm:flex-row sm:flex-wrap">
          <Project
            title="OCEAN"
            subtitle="Big 5 Personality Traits"
            date="Jan 2021"
            description="What is the Big 5 Test? What did we learn from our experiment? What can
        we do with this data?"
            badges={
              <>
                <Badge bgColor="bg-blue-300" text="React" />
                <Badge bgColor="bg-yellow-500 bg-opacity-80" text="D3.js" />
                <Badge
                  bgColor="bg-gray-900"
                  textColor="text-white"
                  text="Next"
                />
                <Badge bgColor="bg-yellow-300" text="Python" />
              </>
            }
            links={[
              {
                text: "Web",
                href: "https://elgatoylacaja.com/ocean/resultados",
              },
              {
                text: "Data Analysis",
                href: "https://github.com/juancuiule/gato-ocean-analysis",
              },
            ]}
            imageSrc="https://elgatoylacaja.com/images/ocean-opengraph.png"
          />
          {/* <div className="w-0 md:w-1/12"></div> */}
          <Project
            title="Labs by El Gato y La Caja"
            subtitle="an open science laboratory on the web"
            date={"Mar 2019 - Today"}
            description="More than 10 web experiments related to moral reasoning, personality traits, vaccine hesitancy/confidence, emotions, capital sins and more."
            badges={
              <>
                <Badge bgColor="bg-blue-300" text="React" />
                <Badge
                  bgColor="bg-blue-600"
                  textColor="text-white"
                  text="TypeScript"
                />
              </>
            }
            links={[
              {
                text: "Web",
                href: "https://elgatoylacaja.com/experimentos",
              },
              {
                text: "Github Repo",
                href: "https://github.com/juancuiule/labs-monorepo",
              },
            ]}
            imageSrc="https://s3.us-south.cloud-object-storage.appdomain.cloud/production-elgatoylacaja/2018/02/opengraph_labs.png"
          />
        </div>
      </section>
    </main>
  </div>
);

export default Index;
