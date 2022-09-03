import React from 'react';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import "react-jinke-music-player/assets/index.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Use <Translate> for Zuhören/Play and for react-music-player specific locale translations.
// TODO: Restore volume (className: .play-sounds) for max-width: 767px
// TODO: Replace document.getElementsByClassName with React equivalent
export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      instance: null,
      options: {
        audioLists: this.props.playlist,
        defaultPlayIndex: 0,
        theme: this.theme,
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

  get theme() {
    if (typeof window != "undefined") {
      return localStorage.getItem("audioTheme")
    }
  }

  set theme(themeName) {
    if (typeof window != "undefined") {
      localStorage.setItem('audioTheme', themeName)
    }
  }

  play = () => {
    this.setState({ open: this.state.open ? false : true })
    return this.state.open
      ? this.state.instance.pause()
      : this.state.instance.play()
  }

  changeTheme = (theme) => {
    this.theme = theme
  }

  changeGlobalTheme = (event) => {
    this.theme = event.detail
    let options = { ...this.state.options }
    options.theme = event.detail;
    this.setState({ options })
  }

  componentDidUpdate() {
    let playlist = document.getElementsByClassName("group audio-lists-btn")[0]
    let prev = document.getElementsByClassName("group prev-audio")[0]
    let next = document.getElementsByClassName("group next-audio")[0]
    let cover = document.getElementsByClassName("img-content img-rotate img-rotate-pause")[0]

    this.props.showPlaylist ? playlist.style.display = "" : playlist.style.display = "none"
    this.props.showPrev ? prev.style.display = "" : prev.style.display = "none"
    this.props.showNext ? next.style.display = "" : next.style.display = "none"
    this.props.showCover ? cover.style.display = "" : cover.style.display = "none"
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
          if (this.theme == null) { this.theme = "auto" }
          window.addEventListener("themeChange", this.changeGlobalTheme)
          return <ReactJkMusicPlayer
            onThemeChange={this.changeTheme}
            style={{ display: this.state.open ? "block" : "none" }}
            getAudioInstance={(instance) => { this.state.instance = instance }}
            mobileMediaQuery="(max-width: 0px)"
            {...this.state.options} />
        }}
      </BrowserOnly>
    </>
  }
}
