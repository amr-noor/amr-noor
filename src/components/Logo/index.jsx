import "./index.css";

const Logo = () => <a href="#" aria-label="logo">
  {/* <h1 className="logo">A</h1> */}

  <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#0000" />
    
    <g transform="translate(400 0) rotate(90)" fill="#fff">
      <path d="
        M0 0h200v40H40v320h80v40H0V0z 
        M240 0h40v400h-40V0z 
        M80 80h40v40H80V80z 
        M160 80h40v40h-40V80z 
        M80 120h160v40H80v-40z 
        M80 200h120v40H80v-40z 
        M80 240h40v40H80v-40z 
        M160 240h40v40h-40v-40z 
        M80 280h120v40H80v-40z 
        M160 320h40v80h-40v-80z
      "/>
    </g>
  </svg>
</a>;

export default Logo;