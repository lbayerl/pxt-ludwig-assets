//% weight=100 color=#ff8800 icon="\uf03e"
//% block="Ludwig Assets"
namespace ludwigAssets {

    //
    // Beispiel: Sprite zurückgeben
    //
    //% block="create test sprite"
    export function createTestSprite(): Sprite {
        return sprites.create(assets.image.testSprite)
    }

    //
    // Beispiel: Soundeffekt abspielen
    //
    //% block="play test sfx"
    export function playTestSfx() {
        music.play(assets.sound.testSfx, music.PlaybackMode.InBackground)
    }

    //
    // Beispiel: Musik abspielen
    //
    //% block="play test music"
    export function playTestMusic() {
        music.play(assets.music.testSong, music.PlaybackMode.InBackground)
    }

    //
    // Beispiel: Tilemap setzen
    //
    //% block="set test tilemap"
    export function setTestTilemap() {
        tiles.setCurrentTilemap(assets.tilemap.testMap)
    }
}
