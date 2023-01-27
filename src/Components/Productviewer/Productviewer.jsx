import React, { useState } from "react";
import style from "./productviewer.module.scss";
import blueUmb from "../../Assests/Blue umbrella.png";
import pinkUmb from "../../Assests/Pink umbrella.png";
import yellowUmb from "../../Assests/Yello umbrella.png";
import Upload from "../../Assests/upload_icon.svg";

const productData = {
  id: 1,
  images: [blueUmb, pinkUmb, yellowUmb],
};
const Productviewer = () => {
  const [file, setFile] = useState();
  const [data, setData] = useState({ image: productData.images[0], index: 0 });
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className={style.productViewerSection}>
      <div className={style.row}>
        <div className={style.coloumOne}>
          <img src={data ? data.image : productData.images[0]} alt="" />
          <div className={style.imagelogo}>
            <img src={file} />
          </div>
        </div>
        <div className={style.coloumTwo}>
          <div className={style.displayProduct}>
            <div>
              <div>
                <h1 style={{ fontSize: "50px"}}>Custom Umbrella</h1>
              </div>
              <div className={style.imagecontainer}>
                {productData.images.map((image, index) => {
                  return index < 4 ? (
                    <div
                      key={index}
                      onClick={() => setData({ image, index })}
                      className={style.productrow}
                    >
                      <img src={image} alt="" />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3>Customize Your Umbrella</h3>
            </div>
            <div>
              <p>Upload a logo for instant preview</p>
            </div>
            <div>
              <p>.png and .jpej files only.Max file size is 5MB</p>
            </div>
            <div className={style.inputfilebtncontainer}>
              {/* <button className={style.inputbtnlogo}><input type="file" name="upload" id="filesuploading"  />  </button> */}
              <label className={style.label} for="upload-photo">
                <img src={Upload} alt="" />
                Upload Logo
              </label>
              <input
                type="file"
                name="photo"
                id="upload-photo"
                accept="image/png,image/jpeg"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productviewer;
