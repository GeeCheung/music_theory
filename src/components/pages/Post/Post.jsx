import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 } from "uuid";
import { storage } from "../../../firebase-config";
import Buttons from "../../Buttons";
import Footer from "../../Footer/Footer";
import Topnavbar from "../../Navbars/TopNavbar";

const Post = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) {
      toast.error("No File Chosen");
    } else {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        toast.success("Image Uploaded");
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    }
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
      <Topnavbar />

      <h1 className="posttitle">Post</h1>

      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
          if (event.target.files[0]) setDisabled(false);
        }}
      />

      <Buttons
        disabled={disabled}
        color={"danger"}
        text={"Upload Image"}
        onClick={uploadFile}
      >
        {" "}
        Upload Image
      </Buttons>

      <span style={{ marginLeft: "6%", marginRight: "5%" }}>
        {imageUrls.map((url) => {
          return <img src={url} className="imgsize" />;
        })}
      </span>

      <ToastContainer position="top-center" />
      <Footer />
    </div>
  );
};

export default Post;
