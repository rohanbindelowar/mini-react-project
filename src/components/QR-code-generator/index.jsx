import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  function handleQRCodeGenerate() {
    setQRCode(input);
    setInput("");
  }
  return (
    <div className="qr-container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="qr-code"
          placeholder="valuessss"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleQRCodeGenerate}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
