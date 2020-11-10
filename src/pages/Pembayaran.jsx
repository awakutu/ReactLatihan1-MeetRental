export default function Pembayaran() {
  return (
    <>
      <div className="container pt-5">
        <h1>Pembayaran</h1>
        <p>Harga Pemesanan: RP.267.000,-</p>
        <p>Masukkan Kode Kupon Diskon:</p>
        <input className="w-25 btn-secondary" type="text"></input>
        <hr />
        <div className="text-right justify-content-end">
          <p>Harga : Rp.267.000,-</p>
          <p>Diskon: Rp.107.000,-</p>
          <hr />
          <p>
            {" "}
            <b>Total Biaya</b>: Rp.60.000,-
          </p>
        </div>
        <hr/>
        <p>Pilih Jenis Pembayaran (pilih salah satu):</p>
        <div className="d-flex px-4 justify-content-around">
        <p>Transfer Bank :</p>
        <button>BRI</button>
        <button>BNI</button>
        <button>Mandiri</button>
        </div>
        <div className="d-flex pt-4 px-4 justify-content-around">
        <p>Lainnya :</p>
        <button>OVO</button>
        <button>DANA</button>
        <button>Gopay</button>
        <button>Link Aja</button>
        </div>
        <hr/>
        <div className="d-flex justify-content-end">
        <button className="btn-primary">Bayar</button>
        </div>
      </div>
    </>
  );
}
