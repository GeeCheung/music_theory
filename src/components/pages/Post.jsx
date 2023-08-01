import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { storage } from "../../firebase-config";
import Footer from "../Footer/Footer";
import Topnavbar from "../Navbars/TopNavbar";

const Post = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("uploaded");
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div>
        <Topnavbar />
      </div>

      <h1
        style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}
      >
        Post
      </h1>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      <div style={{ marginRight: "5%", marginLeft: "9%" }}>
        {" "}
        {imageUrls.map((url) => {
          return (
            <img
              style={{ width: "200px", height: "250px", margin: "10px" }}
              src={url}
            />
          );
        })}
      </div>

      <div className="app">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Post;
