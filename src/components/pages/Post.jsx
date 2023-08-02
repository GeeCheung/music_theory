import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 } from "uuid";
import { storage } from "../../firebase-config";
import Buttons from "../Buttons";
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
      toast.success("Image Uploaded");
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
        style={{ justifyContent: "center", display: "flex", marginTop: "80px" }}
      >
        Post
      </h1>

      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />

      <Buttons color={"danger"} text={"Upload Image"} onClick={uploadFile}>
        {" "}
        Upload Image
      </Buttons>

      <div style={{ marginLeft: "6%", marginRight: "5%" }}>
        {" "}
        {imageUrls.map((url) => {
          return (
            <img
              style={{ width: "300px", height: "350px", margin: "15px" }}
              src={url}
            />
          );
        })}
      </div>

      <div className="app">
        {" "}
        <ToastContainer position="top-center" />
        <Footer />
      </div>
    </div>
  );
};

export default Post;
