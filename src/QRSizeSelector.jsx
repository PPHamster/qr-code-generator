const qrSizes = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

// eslint-disable-next-line react/prop-types
export default function QRSizeSelector({ size, setSize }) {
  return (
    <label>
      Select QR Size:
      <select 
        value={size} 
        onChange={(e) => setSize(parseInt(e.target.value))}
        style={{ marginLeft: "10px", padding: "5px" }}
      >
        {qrSizes.map((s) => (
          <option key={s} value={s}>{s}x{s}</option>
        ))}
      </select>
    </label>
  );
}
