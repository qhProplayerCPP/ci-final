import '../Css/PlayingSong.css';
export function PlayingSong(props) {
  return (
    <div className="PlayingSong">
      <img style={{ maxWidth: '50%' }} src={props.thumbnail} alt="thumbnail" id="playing-img" />
      <audio autoPlay src={props.src} controls id="playing-now"></audio>
      <h3 id="playing-title">{props.title}</h3>
      <p id="playing-author">{props.author}</p>
    </div>
  );
}
