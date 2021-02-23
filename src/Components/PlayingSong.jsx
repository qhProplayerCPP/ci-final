import '../Css/PlayingSong.css';
export function PlayingSong(props) {
  return (
    <div className="PlayingSong">
      <img style={{ maxWidth: '50%' }} src={props.thumbnail} alt="thumbnail" />
      <audio autoPlay src={props.src} controls id="playing-now"></audio>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </div>
  );
}
