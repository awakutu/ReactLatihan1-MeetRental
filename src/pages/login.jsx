import "../component/login.css";
export default function login() {
  return (
    <>
      <div class="container-fluid px-lg-1 mx-auto main">
        <div class="card card0 border-0">
          <div class="row d-flex">
            <div class="col-lg-6">
              <div class="card1 pb-5">
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                  {" "}
                  <img
                    src="https://static.tildacdn.com/tild6366-3662-4533-b134-343063366330/clip-customer-suppor.svg"
                    class="image"
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
                  <button type="submit" class="btn btn-blue text-center">
                    Login
                  </button>{" "}
                </div>
                </div>
            </div>
          </div>
          <footer class="bg-blue py-4 fixed-bottom">
            <div class="row px-3">
              {" "}
              <small class="ml-4 ml-sm-5 mb-2">
                Copyright &copy; 2019. All rights reserved.
              </small>
              <div class="social-contact ml-4 ml-sm-auto">
                {" "}
                <span class="fa fa-facebook mr-4 text-sm"></span>{" "}
                <span class="fa fa-google-plus mr-4 text-sm"></span>{" "}
                <span class="fa fa-linkedin mr-4 text-sm"></span>{" "}
                <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>{" "}
              </div>
            </div>
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
