import Card from "./practice1_card";
import "../../components-css/practice1_parent.css";
export default function Parent() {
  const details = [
    {
      imgsrc: "./images/luffy.jpeg",
      name: "Monkey D. Luffy",
      bounty: "$ 1,500,000,000",
      description:
        "The Straw Hat captain possesses the power of the Gomu Gomu no Mi, making him a formidable fighter with a penchant for adventure.",
    },
    {
      imgsrc: "./images/zoro.jpeg",
      name: "Roronoa Zoro",
      bounty: "$ 320,000,000",
      description:
        "A master swordsman with three swords style, Zoro is the crew's loyal and powerful swordsman, always striving to become the world's best.",
    },
    {
      imgsrc: "./images/Sanji.jpeg",
      name: "Vinsmoke Sanji",
      bounty: "$ 330,000,000",
      description:
        "A skilled chef and martial artist, Sanji specializes in powerful kicks. He is the Straw Hat's dedicated cook and loyal crew member.",
    },
    {
      imgsrc: "./images/nami.jpeg",
      name: "Nami",
      bounty: "$ 66,000,000",
      description:
        "The crew's navigator and expert cartographer, Nami is an intelligent and sharp-witted navigator with a love for treasure and a knack for weather manipulation.",
    },
    {
      imgsrc: "./images/god ussop.jpeg",
      name: "Usopp",
      bounty: "$ 200,000,000",
      description:
        "A sharpshooter and accomplished liar, Usopp brings his wit and creativity to battles. He's the crew's storyteller and strategist.",
    },
    {
      imgsrc: "./images/chopper.jpeg",
      name: "Tony Tony Chopper",
      bounty: "$ 100 (Unofficial)",
      description:
        "A reindeer with a Devil Fruit ability, Chopper can transform into various forms. He serves as the crew's doctor and mascot.",
    },
    {
      imgsrc: "./images/brook.jpeg",
      name: "Brook",
      bounty: "$ 83,000,000",
      description:
        "An immortal musician with a swordsmanship style, Brook adds a lively spirit to the crew. He is also an accomplished fencer.",
    },
    {
      imgsrc: "./images/Franki.jpeg",
      name: "Franky",
      bounty: "$ 94,000,000",
      description:
        "A cyborg shipwright with a strong sense of justice, Franky is responsible for the maintenance and upgrades of the Thousand Sunny.",
    },
    {
      imgsrc: "./images/law.jpeg",
      name: "Trafalgar D. Water Law",
      bounty: "$ 500,000,000",
      description:
        "An accomplished surgeon and captain of the Heart Pirates, Law wields the Ope Ope no Mi, granting him powerful spatial manipulation abilities.",
    },
    {
      imgsrc: "./images/Robin.jpeg",
      name: "Nico Robin",
      bounty: "$ 130,000,000",
      description:
        "A skilled archaeologist with the ability to sprout body parts anywhere, Robin is invaluable for her knowledge of history and her combat abilities.",
    },
  ];
  return (
    <>
      <div className="parent">
        <div className="first">
          <img
            src="./images/jolly roger.png"
            alt="jolly roger"
            className="jollyRoger"
          />
          <h3 className="heading">Straw Hat Pirates</h3>
          <p className="discription">
            " I don't want to conquer anything. I just think the guy with the
            most freedom in this whole sea... is the Pirate King!" -{" "}
            <i>
              <b>Monkey D. Luffy</b>
            </i>
          </p>
        </div>
        <div className="cards">
          <Card prop={details[0]} />
          <Card prop={details[1]} />
          <Card prop={details[3]} />
          <Card prop={details[4]} />
          <Card prop={details[2]} />
          <Card prop={details[5]} />
          <Card prop={details[9]} />
          <Card prop={details[7]} />
          <Card prop={details[6]} />
          <Card prop={details[8]} />
        </div>
      </div>
    </>
  );
}
