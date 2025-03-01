import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import QRSizeSelector from "./QRSizeSelector";
import QRFormatSelector from './QRFormatSelector';

export default function App() {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [size, setSize] = useState(200);
  const [fileName, setFileName] = useState("");
  const [fileFormat, setFileFormat] = useState("png");

  const generateQRCode = () => {
    setQrValue(text);
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    const imageUrl = canvas.toDataURL(`image/${fileFormat}`).replace(`image/${fileFormat}`, "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = `${fileName || "qrcode"}.${fileFormat}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h1>QR Code Generator</h1>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
      />

      <br />

      <input
        type="text"
        placeholder="Enter file name (optional)"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
      />

      <br />

      <QRFormatSelector fileFormat={fileFormat} setFileFormat={setFileFormat} />

      <br />
      <br />

      <QRSizeSelector size={size} setSize={setSize} />

      <br />
      <br />

      <button
        onClick={generateQRCode}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Generate QR Code
      </button>

      <br />
      <br />

      {qrValue && (
        <div>
          <QRCodeCanvas value={qrValue} size={size} />
          <br />
          <button
            onClick={downloadQRCode}
            style={{ padding: "10px 20px", cursor: "pointer", marginTop: "10px" }}
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}

