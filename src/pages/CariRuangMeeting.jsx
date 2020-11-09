import { useState } from "react";
import DatePicker from "react-datepicker";

export default function CariRuangMeeting() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h1 className="m-4">Cari Ruang Meeting</h1>
      <form className="form-group d-flex justify-content-center align-items-center container">
        <div className="row">
          <label for="Lokasi"></label>
          <input
            style={{ fontFamily: "Arial, FontAwesome" }}
            type="text"
            name=""
            id="kapasitas"
            className="form-control"
            placeholder="&#xF077; Masukkan Lokasi Meeting"
            aria-describedby="helpId"
          />
          <label for="kapasitas"></label>
          <input
            style={{ fontFamily: "Arial, FontAwesome" }}
            type="text"
            name=""
            id="kapasitas"
            className="form-control"
            placeholder="&#xF2bd; Masukkan Kapasitas Orang"
            aria-describedby="helpId"
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <button type="submit" class="btn btn-primary ml-auto px-5">
            Cari
          </button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
