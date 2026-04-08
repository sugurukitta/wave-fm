import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>© {year} ガジュマルのさんぽ. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
