import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import { all_song } from './Data';

const firebaseConfig = {
  apiKey: 'AIzaSyCwQdcC8lWd4r6Ar2fepE5rvRk-Z2NdDFU',
  authDomain: 'ci-finalapp.firebaseapp.com',
  projectId: 'ci-finalapp',
  storageBucket: 'ci-finalapp.appspot.com',
  messagingSenderId: '217114057299',
  appId: '1:217114057299:web:8d07d5f3dbead0644ec4a6',
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('Installed');
}
const db = firebase.firestore();

export function SignIn(data) {
  return new Promise((resolve, reject) => {
    const { username, password } = data;
    db.collection('user')
      .where('username', '==', username)
      .get()
      .then((qs) => {
        if (!qs.empty) {
          db.collection('user')
            .where('password', '==', password)
            .get()
            .then((qs) => {
              if (!qs.empty) {
                localStorage.setItem('username', username);
                window.location.pathname = '/user';
                resolve(true);
              } else {
                resolve(false);
              }
            });
        } else {
          resolve(false);
        }
      });
  });
}

export function SignUpF(data) {
  return new Promise((resolve, reject) => {
    const { username, password } = data;
    db.collection('user')
      .where('username', '==', username)
      .get()
      .then((qs) => {
        if (!qs.empty) {
          resolve(false);
        } else {
          db.collection('user').add({
            username: username,
            password: password,
          });
          db.collection('playlist')
            .doc(username)
            .set({
              song: [all_song[0].title],
            });
          localStorage.setItem('username', username);
          window.location.pathname = '/user';
        }
      });
  });
}

export function ShowPlaylist() {
  return new Promise((resolve, reject) => {
    const username = localStorage.getItem('username');
    db.collection('playlist')
      .doc(username)
      .get()
      .then((qs) => {
        let arr = qs.data().song;
        for (let item of arr) {
          document.getElementById('Playlist').insertAdjacentHTML(
            'beforeend',
            `<div id="div-playlist-button">
          <button class="playlist-button" id='play-${item}'>${item}</button>
          <button class="playlist-button playlist-remove-button" id="remove-${item}">
            Remove
          </button>
        </div>`
          );
        }
        return arr;
      })
      .then((arr) => {
        for (let item of arr) {
          document.getElementById(`play-${item}`).addEventListener('click', () => {
            for (let song of all_song) {
              if (song.title === item) {
                document.getElementById('playing-now').src = `${song.src}`;
              }
            }
          });
          document.getElementById(`remove-${item}`).addEventListener('click', () => {
            document.getElementById(`play-${item}`).remove();
            document.getElementById(`remove-${item}`).remove();
            db.collection('playlist')
              .doc(username)
              .update({
                song: firebase.firestore.FieldValue.arrayRemove(item),
              });
          });
        }
      });
  });
}

export function addToPlaylist(song) {
  return new Promise((resolve, reject) => {
    const username = localStorage.getItem('username');
    db.collection('playlist')
      .doc(username)
      .get()
      .then((qs) => {
        let arr = qs.data().song;
        let check = true;
        for (let item of arr) {
          if (item === song) {
            check = false;
          }
        }
        if (check === true) {
          document.getElementById('Playlist').insertAdjacentHTML(
            'beforeend',
            `<div id="div-playlist-button">
        <button class="playlist-button" id='play-${song}'>${song}</button>
        <button class="playlist-button playlist-remove-button" id="remove-${song}">
          Remove
        </button>
      </div>`
          );
          db.collection('playlist')
            .doc(username)
            .update({
              song: firebase.firestore.FieldValue.arrayUnion(song),
            })
            .then(() => {
              document.getElementById(`play-${song}`).addEventListener('click', () => {
                for (let songs of all_song) {
                  if (songs.title === song) {
                    document.getElementById('playing-now').src = `${songs.src}`;
                  }
                }
              });
              document.getElementById(`remove-${song}`).addEventListener('click', () => {
                document.getElementById(`play-${song}`).remove();
                document.getElementById(`remove-${song}`).remove();
                db.collection('playlist')
                  .doc(username)
                  .update({
                    song: firebase.firestore.FieldValue.arrayRemove(song),
                  });
              });
            });
        }
      });
  });
}
