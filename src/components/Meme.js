import React from "react";

export default function Meme() {
  //memeimage
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  // const allMemeImages = memesData.data.memes;

  function getMemeImage() {
    const image =
      allMemeImages[Math.floor(Math.random() * allMemeImages.length)];

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: image.url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div action="" className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        {/* by clicking the button below, we are calling the randomImage function */}
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>

      <div className="meme">
        <img
          src={meme.randomImage}
          alt="random meme photos"
          className="meme-image"
        />
        <h2 className="meme-text-top">{meme.topText}</h2>
        <h2 className="meme-text-bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
