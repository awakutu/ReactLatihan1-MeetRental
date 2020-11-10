export default function BuktiPembayaran() {
  return (
    <>
      <div className="container pt-4">
        <div className="row">
          <div className="col-6">
            <h3>Customer Details:</h3>
            <p>Nama: Dummy</p>
            <p>Email: Dummy@mail.com</p>
            <p>No Telephone: +92362865376</p>
          </div>
          <div className="col-6">
            <h3>Payment Details:</h3>
            <p>No. Pembayaran: 00768</p>
            <p>Jenis Pembayaran: LinkAja</p>
          </div>
        </div>
        <u><h3>Ruang Meeting Details</h3></u>
        <h4>Ruang Meeting "Meet Place Coworking Space"</h4>
        <p>Alamat: Dummy Street</p>
        <p>Digunakan Tanggal: 10 November 2020</p>
        <p>Jam: 08:00 s.d 11.00 WIB</p>
        <p>Durasi Pemakaian: 3 Jam</p>
        <h5>Details</h5>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Tipe</th>
      <th scope="col">Deskripsi R. Meeting</th>
      <th scope="col">Qty</th>
      <th scope="col">Harga Rp.</th>
      <th scope="col">Total Rp.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
   </tbody>
</table> 
<table className="table table-dark w-25 float-right">
<tbody>
    <tr>
      <th scope="row">Total</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Diskon Voucher</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Diskon Voucher</th>
      <td></td>
    </tr>
   </tbody>
</table>
      </div>
    </>
  );
}
