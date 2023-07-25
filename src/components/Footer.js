import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className="footer" style={{ color: 'gray', bottom: 0 }}>
      <span>Last Update: 2023/07/21</span>
      <span>•</span>
      <span>Updated by leosoqq</span>
      <span>•</span>
      <span>Originally made by Dongun Yi </span>
      <span className="footer-icon">
        <GitHubIcon
          onClick={() =>
            window.open('https://github.com/dyi919/hku-timetable', '_blank')
          }
        />
      </span>
    </footer>
  );
}

export default Footer;
