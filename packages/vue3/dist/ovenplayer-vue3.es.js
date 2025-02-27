import { defineComponent as t, ref as v, onMounted as C, onUnmounted as c, onUpdated as g, openBlock as y, createElementBlock as p } from "vue";
import s from "ovenplayer";
const k = /* @__PURE__ */ t({
  __name: "OvenPlayer",
  props: {
    config: {}
  },
  emits: ["ready", "metaChanged", "stateChanged", "resized", "playbackRateChanged", "seek", "time", "bufferChanged", "mute", "volumeChanged", "playlistChanged", "sourceChanged", "qualityLevelChanged", "cueChanged", "timeDisplayModeChanged", "adChanged", "adTime", "adComplete", "fullscreenChanged", "clicked", "allPlaylistEnded", "hlsPrepared", "hlsDestroyed", "dashPrepared", "dashDestroyed", "destroy", "error"],
  setup(r, { expose: u, emit: n }) {
    const h = r, a = v(), o = "ovenplayer-" + Math.random().toString().replace(".", ""), d = () => {
      a.value = s.create(o, h.config), a.value.on("ready", () => n("ready")), a.value.on("metaChanged", (e) => n("metaChanged", e)), a.value.on("stateChanged", (e) => n("stateChanged", e)), a.value.on("resized", (e) => n("resized", e)), a.value.on("playbackRateChanged", (e) => n("playbackRateChanged", e)), a.value.on("seek", (e) => n("seek", e)), a.value.on("time", (e) => n("time", e)), a.value.on("bufferChanged", (e) => n("bufferChanged", e)), a.value.on("mute", (e) => n("mute", e)), a.value.on("volumeChanged", (e) => n("volumeChanged", e)), a.value.on("playlistChanged", (e) => n("playlistChanged", e)), a.value.on("sourceChanged", (e) => n("sourceChanged", e)), a.value.on("qualityLevelChanged", (e) => n("qualityLevelChanged", e)), a.value.on("cueChanged", (e) => n("cueChanged", e)), a.value.on("timeDisplayModeChanged", (e) => n("timeDisplayModeChanged", e)), a.value.on("adChanged", (e) => n("adChanged", e)), a.value.on("adTime", (e) => n("adTime", e)), a.value.on("adComplete", () => n("adComplete")), a.value.on("fullscreenChanged", (e) => n("fullscreenChanged", e)), a.value.on("clicked", (e) => n("clicked", e)), a.value.on("allPlaylistEnded", () => n("allPlaylistEnded")), a.value.on("hlsPrepared", (e) => n("hlsPrepared", e)), a.value.on("hlsDestroyed", () => n("hlsDestroyed")), a.value.on("dashPrepared", (e) => n("dashPrepared", e)), a.value.on("dashDestroyed", () => n("dashDestroyed")), a.value.on("destroy", () => n("destroy")), a.value.on("error", (e) => n("error", e));
    }, l = () => {
      if (a.value) {
        try {
          a.value.remove();
        } catch {
        }
        a.value = void 0;
      }
    };
    return u({
      createPlayer: d,
      removePlayer: l,
      playerInstance: a
    }), C(d), c(l), g(() => {
      l(), d();
    }), (e, f) => (y(), p("div", { id: o }));
  }
});
export {
  k as default
};
