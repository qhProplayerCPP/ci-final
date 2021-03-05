import '../Css/Footer.css';
export function Footer() {
  return (
    <footer className="footer">
      <div class="wrapper">
        <div class="icon facebook">
          <div class="tooltip">
            fb.com/quanghuy.1334</div>
          <span><a className="iconFooter" href="https://www.facebook.com/quanghuy.1334" target="_blank"><i class="fab fa-facebook-f"></i></a></span>
        </div>
        <div class="icon twitter">
          <div class="tooltip">
            Twitter</div>
          <span><i class="fab fa-twitter"></i></span>
        </div>
        <div class="icon instagram">
          <div class="tooltip">
            instagram.com/huy1</div>
          <span><i class="fab fa-instagram"></i></span>
        </div>
        <div class="icon github">
          <div class="tooltip">
            Github</div>
          <span><i class="fab fa-github"></i></span>
        </div>
        <div class="icon youtube">
          <div class="tooltip">
            YouTube</div>
          <span><i class="fab fa-youtube"></i></span>
        </div>
      </div>
    </footer>
  );
}
