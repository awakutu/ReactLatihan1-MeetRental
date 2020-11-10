import Login from "./pages/Login";
import CariRuang from "./pages/CariRuangMeeting";
import { default as Konfirmasi } from "./pages/KonfirmasiRuangMeeting";
import Pembayaran from "./pages/Pembayaran";
import { default as Bukti } from "./pages/BuktiPembayaran";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/CariRuang" component={CariRuang} />
        <Route path="/KonfirmasiRuang" component={Konfirmasi} />
        <Route path="/Pembayaran" component={Pembayaran} />
        <Route path="/BuktiPembayaran" component={Bukti} />

      </Switch>
    </>
  );
}
