import logo from "./bowlingLogo.png";

// use properties to connect additional variables from App.tsx to this file
function Header(props: any) {
  return (
    <>
      <header
        className="row navbar navbar-dark"
        style={{ backgroundColor: "skyblue" }}
      >
        <div className="col-3">
          <img
            src={logo}
            style={{ width: "100px", borderRadius: "50%", overflow: "hidden" }}
            className="logo"
            alt="logo"
          />
        </div>
        <div className="col subtitle" style={{ fontStyle: "italic" }}>
          <h1 className="text-white">{props.title}</h1>
          <h4>
            Find information of your top competitors from the top teams! Only
            Marlin and Sharks teams shown.
          </h4>
        </div>
      </header>
    </>
  );
}

export default Header;
