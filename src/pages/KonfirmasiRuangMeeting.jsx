import "../component/meet.css";
import { Link } from "react-router-dom";

export default function KonfirmasiRuangMeeting() {
  return (
    <>
      <div className="imgMeet"></div>
      <div className="container">
        <div className="row">
          <div className="col-6 pt-5">
            <h1>Meet Place Coworking Space</h1>
            <p>Selasa, 3 November 2020</p>
            <p>Kapasitas, 20 Orang</p>
          </div>
          <div className="col-6 pl-4 pt-5">
            <h1>Lokasi</h1>
            <p>Jalan Timun Laut, Block B. Jakarta Barat</p>
          </div>
        </div>
        <div className="d-flex pt-5 justify-content-center">
          <div className="column">
          <p className="text-center">Harga: RP.267.000,-</p>
          <Link to="/Pembayaran">
          <button className="btn btn-primary">Konfirmasi</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}
