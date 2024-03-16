import logo from "./bowlingLogo.png";
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
        </div>
      </header>
    </>
  );
}

export default Header;
