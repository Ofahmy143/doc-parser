import { useEffect, useState } from "react";
import "./App.styles";
import { AppWrapper, OutputImg } from "./App.styles";
import AppButton from "./components/Button/Button.component";
import PictureBox from "./components/PictureBox/Picture-Box.components";

function App() {
  const [loading, setLoading] = useState(false);
  const [ImageFile, setImageFile] = useState<File | null>(null);
  const [OutputSrc, setOutputSrc] = useState<string>("");
  // const [OutputFile, setOutputFile] = useState<File | null>(null);

  const analyzeImage = async (file: File) => {
    const formData = new FormData();
    formData.append("pdf_file", file);
    try {
      const response = await fetch("http://localhost:5000/analyze-pdf", {
        method: "POST",
        body: formData,
      });
      // Assuming the response contains the image data
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setOutputSrc(imageUrl);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleClick = () => {
    setLoading(true);
    analyzeImage(ImageFile as File);
  };
  useEffect(() => {
    console.log("ImageFile", ImageFile);
  }, [ImageFile]);

  return (
    <AppWrapper isOutput={OutputSrc ? true : false}>
          <h1>Document Parser</h1>

      <PictureBox ImageFile={ImageFile} handleImageFileChange={setImageFile} />

      {ImageFile && (
        <AppButton
          label="Analyze"
          loading={loading}
          clickHandler={handleClick}
        />
      )}

      {OutputSrc && (
        <>
          <h1>Parsed Image</h1>
          <OutputImg src={OutputSrc} alt="Output" />
        </>
      )}
    </AppWrapper>
  );
}

export default App;
