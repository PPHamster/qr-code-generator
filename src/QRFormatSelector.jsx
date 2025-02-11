const qrFormats = ["png", "jpg", "webp"]

// eslint-disable-next-line react/prop-types
export default function QRFormatSelector({ fileFormat, setFileFormat }) {
  return (
    <label>
      Select File Format:
      <select
        value={fileFormat}
        onChange={(e) => setFileFormat(e.target.value)}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        {qrFormats.map((f) => (
          <option key={f} value={f}>{f.toUpperCase()}</option>
        ))}
      </select>
    </label>
  );
}
