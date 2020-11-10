import "../component/login.css";
import loginIMG from "../component/login.svg"

export default function login() {
  return (
    <>
      <div class="container px-lg-1 my-5 ">
          <div class="row d-flex main">
            <div class="col-lg-6">
              <div class="pb-5">
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                  {" "}
                  <img
                    src={loginIMG}
                    className="image"
                    alt="Gambar"
                  />{" "}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card2 card border-0 px-4 py-5">
                  <small class=" text-center">MEMBER LOGIN</small> 
                <div class="row px-3">
                  {" "}
                  <input
                    class="mb-4"
                    type="text"
                    name="email"
                    placeholder="Enter a valid username"
                  />{" "}
                </div>
                <div class="row px-3">
                  {" "}
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />{" "}
                </div>
                
                <div class="row mb-3 px-3">
                  {" "}
                  <button type="submit" class="btn btn-primary text-center">
                    Login
                  </button>{" "}
                </div>
                </div>
            </div>
          </div>
         </div>
    </>
  );
}
