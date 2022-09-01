import React from 'react';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import "react-jinke-music-player/assets/index.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Use <Translate> for Zuhören/Play and for react-music-player specific locale translations.
// Global Event Listener: "ThemeChange"
export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      instance: null,
      options: {
        audioLists: this.props.playlist,
        defaultPlayIndex: 0,
        theme: "auto",
        autoPlay: false,
        defaultPosition: { top: 80, right: 80 },
        glassBg: true,
        remove: false,
        showPlayMode: false,
        showMediaSession: true,
        showDownload: this.props.downloadble,
        mode: "full",
        toggleMode: this.props.toggleMode || false
      }
    };
  }

  play = (e) => {
    this.setState({ open: this.state.open ? false : true })
    return this.state.open
      ? this.state.instance.pause()
      : this.state.instance.play()
  }

  componentDidUpdate() {
    let playlist = document.getElementsByClassName("group audio-lists-btn")[0]
    let prev = document.getElementsByClassName("group prev-audio")[0]
    let next = document.getElementsByClassName("group next-audio")[0]

    this.props.showPlaylist ? playlist.style.display = "" : playlist.style.display = "none"
    this.props.showPrev ? prev.style.display = "" : prev.style.display = "none"
    this.props.showNext ? next.style.display = "" : next.style.display = "none"
  }

  render() {
    return <>
      <button
        onClick={this.play}
        className={styles.playButton}
      >{this.state.open
        ? <Translate id="buttonListenStop">⏸️ Pausieren</Translate>
        : <Translate id="buttonListen">🎧 Zuhören</Translate>} </button>
      <BrowserOnly>
        {() => {
          return <ReactJkMusicPlayer
            style={{ display: this.state.open ? "block" : "none" }}
            getAudioInstance={(instance) => { this.state.instance = instance }}
            mobileMediaQuery="(max-width: 0px)"
            {...this.state.options} />
        }}
      </BrowserOnly>
    </>
  }
}
