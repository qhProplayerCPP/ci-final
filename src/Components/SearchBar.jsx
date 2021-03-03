import { all_song } from '../Data';
import '../Css/SearchBar.css';
import { addToPlaylist } from '../Utilities';

export function SearchBar() {
  return (
    <div className="search__Box">

      <div class="search_wrap search_wrap_3">
        <div class="search_box">
          <input type="text" class="input" placeholder=" Search your songs" onKeyUp={(e) => {
            return new Promise((resolve, reject) => {
              document.getElementById('SongsList').innerHTML = '';
              let arr = [];
              for (let item of all_song) {
                if (
                  (item.title.toLowerCase().includes(e.target.value) ||
                    item.author.toLowerCase().includes(e.target.value)) &&
                  e.target.value !== ''
                ) {
                  arr.push(item.title);
                  document.getElementById('SongsList').insertAdjacentHTML(
                    'beforeend',
                    `<div class='SearchedSong'>
                  <img id='searchedSong-img'  src=${item.thumbnail} alt="thumbnail" />
                <div id='searchedSong-info'>
                  <h3 id='searchedSong-h3'>${item.title}</h3>
                <p id='searchedSong-p'>${item.author}</p>
                </div>  
                <a class='searchedSong-button' id='searched-${item.title}' href="#"><span>Add to playlist</span></a>
               
                </div>`
                  );
                }
              }
              resolve(arr);
            }).then((arr) => {
              for (let i = 0; i < arr.length; i++) {
                document.getElementById(`searched-${arr[i]}`).addEventListener('click', () => {
                  addToPlaylist(arr[i]);
                });
              }
            });
          }} />

          <div class="btn btn_common">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>

  );
}
