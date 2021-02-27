import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <style jsx>{`
            ul {
              list-style-type: none;
              margin: 0;
              padding: 0;
              overflow: hidden;
              background-color: #0070F3;
            }
            
            li {
              float: left;
            }
            
            li a {
              display: block;
              color: white;
              text-align: center;
              padding: 14px 16px;
              text-decoration: none;
            }
            
            /* Change the link color to #111 (black) on hover */
            li a:hover {
              background-color: #111;
            }
            `}</style>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#">Tab Two</a>
          </li>
          <li>
            <a href="#">Tab Three</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar